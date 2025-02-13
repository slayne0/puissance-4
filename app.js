const $grid = document.querySelectorAll(".grid-case")
const $colone = document.querySelectorAll(".juste-colone")
const $gameScreenGridCells = document.querySelectorAll(".grid")


// const $myCell = document.querySelector('.grid-case[data-x="2"][data-y="2"]')
// $myCell.classList.add("tomato")

let currentPlayer = "y"
let notplayer = "r"
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




function checkWin(board, y, x) {
    let result = 0
    let player = notplayer

    
    // colonne
    for (let i = 0; i < 4; i++) {
        // 2. alors, tu vas ici
        if (y - number < 0) {
            number = i
            for (let i = 1; i < 6-y; i++) {
                if (board[y+i][x] === player) {
                    result += 1
                } else {
                    if (result >= 4) {
                        return true
                    } else {
                        return false
                    }
                }
            }
        } else {
            if (isValid) {
                // 1. Si tu ne vas ici
                result += 1
            } else {
                number = 30
            }
        }
    }
}







$grid.forEach(function($grid) {
    $grid.addEventListener("click", function() {
        const dataX = $grid.getAttribute("data-x")
        const dataY = $grid.getAttribute("data-y") 




        console.log(gameBoard)

        for (let i = 5; i >= 0; i--) {
            const $test = document.querySelector(`.grid-case[data-x="${dataX}"][data-y="${i}"]`)
            const isWin = checkWin(gameBoard, i, dataX)


            if (gameBoard[i][dataX] === "y" || gameBoard[i][dataX] === "r") {
            } else {
                if (currentPlayer === "y") {
                    gameBoard[i][dataX] = currentPlayer
                    $test.classList.add("yellow")
                    currentPlayer = "r"
                    notplayer = "y"
                    return
                } else {
                    gameBoard[i][dataX] = currentPlayer
                    $test.classList.add("red")
                    currentPlayer = "y"
                    notplayer = "r"
                    return
                }

                // console.log(isWin(gameBoard, i, dataX))


                // if (isWin) {
                //     console("abelibacenfly")
                // }

                
                
            }
        }
    })
})






