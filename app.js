const $grid = document.querySelectorAll(".grid-case")
const $colone = document.querySelectorAll(".juste-colone")
const $gameScreenGridCells = document.querySelectorAll(".grid")
const $footer = document.querySelector("footer")
const $restart = document.querySelector(".main-page-button-restart")
const $restart2 = document.querySelector(".play-again")
const $restart3 = document.querySelector(".play-again2")
const $winner1 = document.querySelector(".winner1")
const $winner2 = document.querySelector(".winner2")

// const $myCell = document.querySelector('.grid-case[data-x="2"][data-y="2"]')
// $myCell.classList.add("tomato")

let yelloWin = false
let redWin = false 
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

$restart.addEventListener("click", function() {
    $grid.forEach(function($gameScreenGridCell) {
        $gameScreenGridCell.classList.remove("yellow", "red")
    })
    gameBoard = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ]
    yelloWin = false
    redWin = false
    $footer.classList.remove("yellow", "red")
    $winner1.classList.add("hidden")
    $winner2.classList.add("hidden")
})

$restart2.addEventListener("click", function() {
    $grid.forEach(function($gameScreenGridCell) {
        $gameScreenGridCell.classList.remove("yellow", "red")
    })
    gameBoard = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ]
    yelloWin = false
    redWin = false
    $footer.classList.remove("yellow", "red")
    $winner1.classList.add("hidden")
    $winner2.classList.add("hidden")
})

$restart3.addEventListener("click", function() {
    $grid.forEach(function($gameScreenGridCell) {
        $gameScreenGridCell.classList.remove("yellow", "red")
    })
    gameBoard = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ]
    yelloWin = false
    redWin = false
    $footer.classList.remove("yellow", "red")
    $winner1.classList.add("hidden")
    $winner2.classList.add("hidden")
})







$grid.forEach(function($gameScreenGridCell) {
    $gameScreenGridCell.innerHTML = ""
})




function checkWin(board, y, DX) {


       // colonne
    let result = 0
    let player = notplayer
    let  = 1
    let passage = 0
    let x = parseInt(DX)

    

    for (let e = 0; e < 5; e++) {
        if (result >= 4) {
            if (player === "y") {
                yelloWin = true
            } else {
                redWin = true 
            }
        } 
        if (passage === 0 && y > 0 ) {
            if (board[y-e][x] === player) {
                result += 1
            } else {
                passage = 1
                e = 0
            }
        } else {  
            if (e+y > 5) {
            }  else {         
                
                if (board[y+e][x] === player) {
                    result += 1
                } else {
                    break
                }
            }
                
            
        }
    }





   // ligne
    result = 0
    player = notplayer
    o = 1
    passage = 0

    

    for (let e = 0; e < 5; e++) {
        if (result >= 4) {
            if (player === "y") {
                yelloWin = true
            } else {
                redWin = true 
            }
        } 
        if (passage === 0 && y > 0 ) {
            if (board[y][x-e] === player) {
                result += 1
            } else {
                passage = 1
                e = 0
            }
        } else {  
            if (e+y > 5) {
            }  else {         
                
                if (board[y][x+e] === player) {
                    result += 1
                } else {
                    break
                }
            }
                
            
        }
    }




   // diagonale haut gauche 
    result = 0
    player = notplayer
    o = 1
    passage = 0

    

    for (let e = 0; e < 5; e++) {
        if (result >= 4) {
            if (player === "y") {
                yelloWin = true
            } else {
                redWin = true 
            }
        } 
        if (passage === 0 && y > 0 ) {
            if (board[y-e][x-e] === player) {
                result += 1
            } else {
                passage = 1
                e = 0
            }
        } else {  
            if (e+y > 5 || e === -1) {
            }  else {         
                if (board[y+e][x+e] === player) {
                    result += 1
                } else {
                }
            }
                
            
        }
    }




   // diagonale haut droite 
    result = 0
    lplayer = notplayer
    o = 1
    passage = 0

    
    for (let e = 0; e < 5; e++) {
        if (result >= 4) {
            if (player === "y") {
                yelloWin = true
            } else {
                redWin = true 
            }
        } 
        if (passage === 0 && y > 0 ) {
            if (board[y-e][x+e] === player) {
                result += 1
            } else {
                passage = 1
                e = 0
            }
        } else {  
            if (e+y > 5) {
            }  else {         
                
                if (board[y+e][x-e] === player) {
                    result += 1
                } else {
                    break
                }
            }
                
            
        }
    }

    if (yelloWin === true) {
        $footer.classList.add("yellow")
        $winner2.classList.remove("hidden")
    } else if (redWin === true) {
        $footer.classList.add("red")
        $winner1.classList.remove("hidden")
    }
}











$grid.forEach(function($grid) {

    $grid.addEventListener("click", function() {
        const dataX = $grid.getAttribute("data-x")
        const dataY = $grid.getAttribute("data-y") 

        const cDeX = $grid.getAttribute(parseInt("data-x"))
        // console.log(parseInt(dataX))

        if (yelloWin === false && redWin === false) {

        for (let i = 5; i >= 0; i--) {
            const $test = document.querySelector(`.grid-case[data-x="${dataX}"][data-y="${i}"]`)


            if (gameBoard[i][dataX] === "y" || gameBoard[i][dataX] === "r") {
            } else {
                if (currentPlayer === "y") {
                    gameBoard[i][dataX] = currentPlayer
                    $test.classList.add("yellow")
                    currentPlayer = "r"
                    notplayer = "y"
                    const isWin = checkWin(gameBoard, i, dataX)
                    return
                } else {
                    gameBoard[i][dataX] = currentPlayer
                    $test.classList.add("red")
                    currentPlayer = "y"
                    notplayer = "r"
                    const isWin = checkWin(gameBoard, i, dataX)
                    return
                }
                

                // console.log(isWin(gameBoard, i, dataX))




                
                
            }
        } 

    } 
    })
})






