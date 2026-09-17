const gameBoardObject = ["","","","","","","","",""]

const player1 = { "mark": "X"};
const player2 = { "mark": "O"};

let currentPlayer = player1;

console.log(gameBoardObject)

function placeMark(position) {
    if(gameBoardObject[position] === "") {
        gameBoardObject[position] = currentPlayer.mark;
        checkWinner();
        if (currentPlayer === player1){
            currentPlayer = player2;
        }
        else {
            currentPlayer = player1;
        }
    }

    
}

const result = document.getElementsByClassName("results")[0]
const result_txt = document.createElement("h1")
result_txt.classList.add("resultstext")
result.appendChild(result_txt);

function checkDraw() {

    if (!gameBoardObject.includes("")) {
        result_txt.textContent = "Game Draws";
    }
}


function checkWinner(){
    console.log("working");
    const combinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    combinations.forEach(function(combination) {
        if (gameBoardObject[combination[0]] != "" && gameBoardObject[combination[0]] === gameBoardObject[combination[1]] && gameBoardObject[combination[1]] === gameBoardObject[combination[2]]){
            
            const winner = gameBoardObject[combination[0]]

            if(winner === player1.mark){
                result_txt.textContent = "Player 1 Wins";

            
            }
            else if(winner === player2.mark){
                result_txt.textContent = "Player 2 Wins";
    
            }

        }
    });

    checkDraw();

}

const board = document.getElementsByClassName("gameBoard")[0];

for(let i = 0; i<9 ; i++){

    const cell = document.createElement("div")
    cell.classList.add("cells")
    board.appendChild(cell)


}

const cell = document.querySelectorAll(".cells");

cell.forEach((c , index) => {
    c.addEventListener("click",()=> {
        placeMark(index);
        c.textContent = gameBoardObject[index];
    });

});

const rst = document.getElementsByClassName("restart")[0];
const restarts = document.createElement("button")
restarts.textContent = "Restart";
rst.classList.add("restart")
rst.appendChild(restarts)

restarts.addEventListener("click", ()=> {
    restart_game();
})

function restart_game (){

    gameBoardObject.fill("");
    cell.forEach((c) => {
        c.textContent = "";
    });
    result_txt.textContent="";
    currentPlayer = player1;

}


