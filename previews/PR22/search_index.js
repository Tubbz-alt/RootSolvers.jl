var documenterSearchIndex = {"docs":
[{"location":"#RootSolvers.jl-1","page":"Home","title":"RootSolvers.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"A simple GPU-capable root solver package.","category":"page"},{"location":"#Usage-1","page":"Home","title":"Usage","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"using RootSolvers\n\nsol = find_zero(x -> x^2 - 100^2,\n                SecantMethod{Float64}(0.0, 1000.0),\n                CompactSolution());","category":"page"},{"location":"Installation/#Installation-1","page":"Installation","title":"Installation","text":"","category":"section"},{"location":"Installation/#","page":"Installation","title":"Installation","text":"RootSolvers.jl is a Julia registered package, and can be added from the Julia Pkg manager:","category":"page"},{"location":"Installation/#","page":"Installation","title":"Installation","text":"(v1.x) pkg> add RootSolvers","category":"page"}]
}