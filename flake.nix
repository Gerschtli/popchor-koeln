{
  description = "popchor-koeln";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-22.11";

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = [
          pkgs.jq
          pkgs.netlify-cli
          pkgs.nodejs_latest
          pkgs.nodePackages_latest.pnpm
        ];

        PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = "true";
        PLAYWRIGHT_BROWSERS_PATH = pkgs.playwright.browsers;
        PLAYWRIGHT_BROWSERS_VERSION = pkgs.playwright.version;
      };
    };
}
