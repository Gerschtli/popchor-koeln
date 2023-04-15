{
  description = "popchor-koeln";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs";

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import
        (nixpkgs.legacyPackages.${system}.applyPatches {
          name = "nixpkgs-with-playwright-patch";
          src = nixpkgs;
          patches = [
            (builtins.fetchurl {
              name = "playwright-patch";
              url = "https://patch-diff.githubusercontent.com/raw/NixOS/nixpkgs/pull/214939.patch";
              sha256 = "1ps7vyk9ivikfd35xppzd4qgkavcj60nghim0v83ws2dyxigmhmj";
            })
          ];
        })
        {
          inherit system;
        };
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

      packages.${system} = { inherit (pkgs) playwright; };
    };
}
