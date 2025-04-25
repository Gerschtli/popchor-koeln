{
  description = "popchor-koeln";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      forEachSystem = nixpkgs.lib.genAttrs [ "aarch64-darwin" "x86_64-linux" ];

      pkgsFor = forEachSystem (system: nixpkgs.legacyPackages.${system});

      nodejsFor = forEachSystem (system: pkgsFor.${system}.nodejs_22);
    in
    {
      devShells = forEachSystem
        (system:
          let
            pkgs = pkgsFor.${system};
            nodejs = nodejsFor.${system};
          in
          {
            default = pkgs.mkShell {
              packages = [
                pkgs.netlify-cli
                nodejs
                nodejs.pkgs.pnpm
              ];
            };
          });

      checks = forEachSystem
        (system:
          let
            pkgs = pkgsFor.${system};
            nodejs = nodejsFor.${system};

            inherit (pkgs.lib) getExe versions;

            checker = name: description: package: versionCommand: pkgs.runCommand "check-${name}-version" { } ''
              version_nix="${package.version}"
              version_non_nix="$(${versionCommand})"

              echo "compare versions for ${description}"
              echo "version_nix:     $version_nix"
              echo "version_non_nix: $version_non_nix"

              [[ "$version_nix" == "$version_non_nix" ]]
              touch $out
            '';
          in
          {
            node = checker "node" "node version for netlify" nodejs ''
              ${getExe pkgs.gnugrep} NODE_VERSION ${./netlify.toml} \
                | ${getExe pkgs.gnused} -e 's,^.*"\(.*\)"$,\1,'
            '';

            pnpm = checker "pnpm" "pnpm version in package.json" nodejs.pkgs.pnpm ''
              ${getExe pkgs.jq} --raw-output '.packageManager' ${./package.json} \
                | ${getExe pkgs.gnused} -e 's,^pnpm@,,'
            '';
          });
    };
}
