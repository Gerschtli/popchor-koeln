{
  description = "popchor-koeln";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};

      nodejs = pkgs.nodejs_20;
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = [
          pkgs.netlify-cli
          nodejs
          nodejs.pkgs.pnpm
        ];
      };

      checks.${system} =
        let
          inherit (pkgs.lib) getExe;

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
              | ${getExe pkgs.gnused} -e 's,pnpm@,,'
          '';
        };
    };
}
