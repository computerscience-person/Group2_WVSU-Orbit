{
  description = "The base nix flake.";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    # pyproject-nix.url = "github:nix-community/pyproject.nix";
    # pyproject-nix.inputs.nixpkgs.follows = "nixpkgs";
    # uv2nix.url = "github:adisbladis/uv2nix";
    # uv2nix.inputs.nixpkgs.follows = "nixpkgs";
    # uv2nix.inputs.pyproject-nix.follows = "pyproject-nix";
  };
  outputs = { nixpkgs, ... }@inputs: let
    systems = [ "x86_64-linux" "aarch64-linux" ];
    eachSystem = nixpkgs.lib.genAttrs systems;
    withPkgs = system: nixpkgs.legacyPackages.${system};
  in {
    devShells = eachSystem (system: let
      pkgs = withPkgs system;
      python = pkgs.python313;
    in { 
      default = pkgs.mkShell {
        packages = [
        ];
        nativeBuildInputs = [
          python
          pkgs.uv
          pkgs.deno
        ];
        shellHook = ''
          unset PYTHONPATH
        '';
      };
    });
  };
}
