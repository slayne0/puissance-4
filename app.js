const $grid = document.querySelectorAll(".grid-case")
const $colone = document.querySelectorAll(".juste-colone")


console.log($grid)

let currentPlayer = "y"
let gameBoard = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""]
]


$grid.forEach(function($grid) {
    $grid.addEventListener("click", function() {
        const dataX = $grid.getAttribute("data-x")
        const dataY = $grid.getAttribute("data-y")
        

        gameBoard[dataX][dataY] = currentPlayer

        console.log(gameBoard)
    })
})