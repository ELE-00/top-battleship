
/*Psuedocode

Done:
init game
create player grid and set ships
create computer and set ships
Grid cells update based on hit or miss
player switching
computer playes random coordinates

TO DO:
1. POLISH UI
    -  Connect Start button to setting ships
    - Grey out Computer grid
    - Make the page pretty

2. (optional)
    - Drag and drop ships (I will skip)
    - Make computer smart (I will skip I in case not enough time)

*/


import {player, computer} from "./players.js";
import gameboard from "./gameboard.js";


//Game board object responsible for the playing grid
function gridItem(UIgameboardId, coordinate){
    const container = document.getElementById(UIgameboardId)

    const gridItem = document.createElement("div")
    gridItem.classList.add("gridItem")
    gridItem.setAttribute("data-coordinate", coordinate);
    
    container.appendChild(gridItem);
    
    return gridItem;
}

//Game board object responsible for the grid labels
function gridLabelItem(UIgameboardId, id, value){
    const container = document.getElementById(UIgameboardId)

    const gridItem = document.createElement("div")
    gridItem.classList.add("gridLabelItem")
    gridItem.textContent = value;
    
    container.appendChild(gridItem);
    
    return gridLabelItem;
}






function DOMController(){
    let P1, P2;
    let activePlayer;

    //Factory to create a board
    function createBoard(gameboard, gameboardID, onCellClick){
        const gameboardArray = gameboard.createBoard()

        const letterLabels = ["","A","B","C","D","E","F","G","H","I","J"]
        const numberLabels = ["1","2","3","4","5","6","7","8","9","10"]
        let j = 0;

        //Letter labels on the top of grid
        for (let l = 0; l < letterLabels.length; l++){
            gridLabelItem(gameboardID,"gridLabel",letterLabels[l])
        }

        //Letter labels and grid
        for (let i = 0; i < gameboardArray.length; i++){
            
            if(i % 10 === 0){
               gridLabelItem(gameboardID,"gridLabel",numberLabels[j]) //number labels 
               gridItem(gameboardID, gameboardArray[i]) 
               j++; 
               
            }else{
                gridItem(gameboardID, gameboardArray[i])
                
            }
        }

        //Event listeners for Grid items
        const Cells = document.querySelectorAll(`#${gameboardID} .gridItem[data-coordinate]`);
        
        Cells.forEach(cell => {
            cell.addEventListener("click", () => {
                let coordinate = cell.getAttribute("data-coordinate")
                console.log("Sending coordinate: " + coordinate)
                console.log("Sending gameboard: ", gameboard)
                console.log("playerGameboardID: " + gameboardID)

                onCellClick(coordinate, gameboard,  gameboardID)
            })
        })
        return gameboard;
    }


    function onCellClick(coordinate, gameboard, gameboardID) {
        playRound(coordinate, gameboard, gameboardID);
    }


    function P1Player(){
        const P1Player = player();
        let gameboardID = "playergameboard";
        const gameboard = P1Player.board;

      return {
        gameboardID: gameboardID,
        gameboard: gameboard
        };

    }

    function P2Computer(){
        const P2Computer = computer();
        let gameboardID = "computergameboard";
        const gameboard = P2Computer.board;

            // Create all possible coordinates for the opponent's board
        const availableCoordinates = [];
        const letters = ["A","B","C","D","E","F","G","H","I","J"];
        for (let l of letters) {
            for (let n = 1; n <= 10; n++) {
                availableCoordinates.push(l + n);
            }
        }

        return {
        gameboardID,
        gameboard,
        availableCoordinates
        };
    }



    



    function getRndCoordinate(){
        const min = 65
        const max = 74

        const RndCharcode = Math.floor(Math.random() * (max-min +1) ) + min
        const Rndletter = String.fromCharCode(RndCharcode)

        const RdnNumber = Math.floor(Math.random() * 10) + 1;
        
        return Rndletter + RdnNumber;
    }

    function RndDirection(){
        let no = Math.floor(Math.random() * 2)

        if(no == 0){
            return "horizontal"
        }else{
            return "vertical"
        }
    }


    //Setting Ships (COORDINATES GO OUT OF BOUND. NEED TO CHECK ID VALIDATION WORKS)
    function setShips(playerBoard, playerGameboardID){
        
        const shipData = playerBoard.shipData    

        shipData.forEach(ship => {
            let placed = false;
            while (!placed) {
                try{
                    let randomCoordinate = getRndCoordinate()
                    let direction = RndDirection()

                    // console.log("Ship: ", ship.name)
                    playerBoard.placeShip(ship.name, randomCoordinate, direction)

                    placed = true;

                }catch(error) {
                    console.log("Retrying:", error.message);
                }
            }
        });

        const shipCoordinates = playerBoard.occupiedSquares

        const Cells = document.querySelectorAll(`#${playerGameboardID} .gridItem[data-coordinate]`);
        Cells.forEach(cell => {

            const cellCoordinate = cell.getAttribute("data-coordinate");

            const match = shipCoordinates.find(([coords]) => coords === cellCoordinate);

            if(match){
                const [, ShipObj] = match;
                if(ShipObj.name === "carrier"){
                    cell.style.backgroundColor = "yellow";
                }else if(ShipObj.name === "battleship"){
                    cell.style.backgroundColor = "orange";
                }else if(ShipObj.name === "destroyer"){
                    cell.style.backgroundColor = "red";
                }else if(ShipObj.name === "submarine"){
                    cell.style.backgroundColor = "green";
                }else if(ShipObj.name === "patrolboat"){
                    cell.style.backgroundColor = "blue";
                }
            }


        })
    }
   
    
    //Swtiches players
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === P1 ? P2 : P1;

        if(activePlayer === P2){
            computerTurn()
        }

        console.log("Next move", activePlayer);
    };

    //Gets active player after swtich
    const getActivePlayer = () => activePlayer;


    function playRound(coordinate, playerBoard, playerGameboardID ){
        const shipCoordinates = playerBoard.occupiedSquares
        const gridCell = document.querySelector(`#${playerGameboardID} .gridItem[data-coordinate="${coordinate}"]`);

        if(shipCoordinates.find(([coords]) => coords === coordinate)){
            console.log("ship hit")
            playerBoard.receiveAttack(coordinate)
            gridCell.textContent = "X";
            switchPlayerTurn()
            
            console.log(playerBoard.gameOver())
            if(playerBoard.gameOver() === true){
                return console.log(playerGameboardID + " LOST")
            }    

        }else{
           console.log("missed")
           playerBoard.receiveAttack(coordinate)
           gridCell.textContent = "•"; 
           switchPlayerTurn()
           console.log("missed attach array: ", playerBoard, playerBoard.missedAttacks)
        }

    }





    //Computer player

    function computerTurn(){

        let availableCoordinates = P2.availableCoordinates
        console.log("availableCoordinates", availableCoordinates)

        const RdnNumber = Math.floor(Math.random() * availableCoordinates.length);
        console.log("RdnNumber", RdnNumber)

        let targetcordinate = availableCoordinates[RdnNumber]
        console.log(targetcordinate)
        
        availableCoordinates.splice(RdnNumber, 1);

        playRound(targetcordinate, P1.gameboard, P1.gameboardID)
         
    }









    //Init state of the game
    function init(){
        P1 = P1Player();
        P2 = P2Computer();

        createBoard(P1.gameboard, P1.gameboardID, onCellClick)
        setShips(P1.gameboard,P1.gameboardID)

        createBoard(P2.gameboard, P2.gameboardID, onCellClick)
        setShips(P2.gameboard,P2.gameboardID)

        activePlayer = P1; // Set starting player

        return {P1, P2}
    }


    // Expose public methods and data
    return { init, setShips, playRound};



}



export default DOMController;
