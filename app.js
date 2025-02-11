const $grid = document.querySelectorAll(".grid-case")
const $colone = document.querySelectorAll(".juste-colone")
const $gameScreenGridCells = document.querySelectorAll(".grid")


// const $myCell = document.querySelector('.grid-case[data-x="2"][data-y="2"]')
// $myCell.classList.add("tomato")

console.log($grid)

let currentPlayer = "y"
let gameBoard = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
]

$grid.forEach(function($gameScreenGridCell) {
    $gameScreenGridCell.innerHTML = ""
})








$grid.forEach(function($grid) {
    $grid.addEventListener("click", function() {
        const dataX = $grid.getAttribute("data-x")
        const dataY = $grid.getAttribute("data-y") 




        console.log(gameBoard)

        for (let i = 5; i >= 0; i--) {
            const $test = document.querySelector(`.grid-case[data-x="${dataX}"][data-y="${i}"]`)
            const isWin = checkWin(gameBoard, [i]) 


            function checkWin(board, y,) {
                let result = 0
                for (let i = 0; i > 4; i ++) {
                    if (board[y-i][dataX] === currentPlayer) {
                        result += 1
                    } else {
                        return false
                    }
                }
            
            }


            if (gameBoard[i][dataX] === "y" || gameBoard[i][dataX] === "r") {
                console.log("hmm")
            } else {
                if (currentPlayer === "y") {
                    gameBoard[i][dataX] = currentPlayer
                    $test.classList.add("yellow")
                    currentPlayer = "r"
                    return
                } else {
                    gameBoard[i][dataX] = currentPlayer
                    $test.classList.add("red")
                    currentPlayer = "y"
                    return
                }

                
                
            }
        }
    })
})

