import {player, computer} from "./players.js";
import gameboard from "./gameboard.js";

// Create a single grid cell in the DOM
function gridItem(UIgameboardId, coordinate){
    const container = document.getElementById(UIgameboardId)

    const gridItem = document.createElement("div")
    gridItem.classList.add("gridItem")
    gridItem.setAttribute("data-coordinate", coordinate);
    
    container.appendChild(gridItem);
    
    return gridItem;
}

// Create a label for the grid (letters/numbers)
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

    // Generate the full grid for a player/computer
    function createBoard(gameboard, gameboardID){
        const gameboardArray = gameboard.createBoard()

        const letterLabels = ["","A","B","C","D","E","F","G","H","I","J"]
        const numberLabels = ["1","2","3","4","5","6","7","8","9","10"]
        let j = 0;

        // Top letter labels
        for (let l = 0; l < letterLabels.length; l++){
            gridLabelItem(gameboardID,"gridLabel",letterLabels[l])
        }

        // Number labels + grid cells
        for (let i = 0; i < gameboardArray.length; i++){
            if(i % 10 === 0){
               gridLabelItem(gameboardID,"gridLabel",numberLabels[j])
               gridItem(gameboardID, gameboardArray[i]) 
               j++; 
            }else{
                gridItem(gameboardID, gameboardArray[i])
            }
        }

        return gameboard;
    }

    // Create player object
    function P1Player(){
        const P1Player = player();
        let gameboardID = "playergameboard";
        const gameboard = P1Player.board;

      return {
        gameboardID: gameboardID,
        gameboard: gameboard
        };
    }

    // Create computer object and generate all possible attack coordinates
    function P2Computer(){
        const P2Computer = computer();
        let gameboardID = "computergameboard";
        const gameboard = P2Computer.board;

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

    // Random coordinate generator for ship placement
    function getRndCoordinate(){
        const min = 65
        const max = 74
        const RndCharcode = Math.floor(Math.random() * (max-min +1) ) + min
        const Rndletter = String.fromCharCode(RndCharcode)
        const RdnNumber = Math.floor(Math.random() * 10) + 1;
        return Rndletter + RdnNumber;
    }

    // Random direction for ships
    function RndDirection(){
        return Math.random() < 0.5 ? "horizontal" : "vertical";
    }

    // Place ships on a board with random coordinates
    function setShips(playerBoard, playerGameboardID){
        const shipData = playerBoard.shipData    

        shipData.forEach(ship => {
            let placed = false;
            while (!placed) {
                try{
                    let randomCoordinate = getRndCoordinate()
                    let direction = RndDirection()
                    playerBoard.placeShip(ship.name, randomCoordinate, direction)
                    placed = true;
                }catch(error) {
                    console.log("Retrying:", error.message);
                }
            }
        });

        // Optionally show ship positions for the player
        const shipCoordinates = playerBoard.occupiedSquares
        if(playerGameboardID === "playergameboard"){
            const Cells = document.querySelectorAll(`#${playerGameboardID} .gridItem[data-coordinate]`);
            Cells.forEach(cell => {
                const cellCoordinate = cell.getAttribute("data-coordinate");
                const match = shipCoordinates.find(([coords]) => coords === cellCoordinate);

                if(match){
                    const [, ShipObj] = match;
                    if(ShipObj.name === "carrier") cell.style.backgroundColor = "#FFF59D";
                    else if(ShipObj.name === "battleship") cell.style.backgroundColor = "#fcc372ff";
                    else if(ShipObj.name === "destroyer") cell.style.backgroundColor = "#FF8A80";
                    else if(ShipObj.name === "submarine") cell.style.backgroundColor = "#A5D6A7";
                    else if(ShipObj.name === "patrolboat") cell.style.backgroundColor = "#90CAF9";
                }
            })    
        }
    }

    // Switch active player and handle computer turn
    const switchPlayerTurn = () => {
        const display = document.getElementById("display");

        activePlayer = activePlayer === P1 ? P2 : P1;

        if (activePlayer === P2) {
            display.textContent = "Computer's turn";
            setTimeout(computerTurn, 500); // slight delay for computer
        } else {
            display.textContent = "Your turn";
        }

        console.log("Next move: ", activePlayer.gameboardID);
    };

    // Handle a single round (player or computer)
    function playRound(coordinate, playerBoard, playerGameboardID ){
        const display = document.getElementById("display");
        const shipCoordinates = playerBoard.occupiedSquares
        const gridCell = document.querySelector(`#${playerGameboardID} .gridItem[data-coordinate="${coordinate}"]`);

        if (shipCoordinates.find(([coords]) => coords === coordinate)) {
            console.log("ship hit");
            playerBoard.receiveAttack(coordinate);
            gridCell.textContent = "X";
            gridCell.style.pointerEvents = "none";

            if (playerBoard.gameOver() === true) {
                let loserName = playerGameboardID === "playergameboard" ? "Player" : "Computer";
                display.style.color = "red";
                display.style.fontSize = "20px";
                display.textContent = `${loserName} lost!`;

                // Disable all cells after game over
                const allCells = document.querySelectorAll(
                    "#playergameboard .gridItem, #computergameboard .gridItem"
                );
                allCells.forEach((cell) => (cell.style.pointerEvents = "none"));
                return;
            }

            switchPlayerTurn(); 

        }else{
           console.log("missed")
           playerBoard.receiveAttack(coordinate)
           gridCell.textContent = "•"; 
           gridCell.style.pointerEvents = "none";
           switchPlayerTurn()
           console.log("missed attack array: ", playerBoard, playerBoard.missedAttacks)
        }
    }

    // Computer chooses a random available coordinate
    function computerTurn(){
        let availableCoordinates = P2.availableCoordinates
        const RdnNumber = Math.floor(Math.random() * availableCoordinates.length);
        let targetcordinate = availableCoordinates[RdnNumber]
        availableCoordinates.splice(RdnNumber, 1); // remove coordinate from list
        playRound(targetcordinate, P1.gameboard, P1.gameboardID)
    }

    // Initialize game state and setup grids
    function init(){
        P1 = P1Player();
        P2 = P2Computer();

        createBoard(P1.gameboard, P1.gameboardID)
        createBoard(P2.gameboard, P2.gameboardID)
        
        const startBtn = document.getElementById("start-game");
        startBtn.addEventListener("click", () => {
            setShips(P1.gameboard,P1.gameboardID)
            setShips(P2.gameboard,P2.gameboardID)

            const display = document.getElementById("display");
            display.textContent = "Your turn";
            activePlayer = P1; // starting player

            // Add click events for enemy grid
            const Cells = document.querySelectorAll(`#${P2.gameboardID} .gridItem[data-coordinate]`);
            Cells.forEach(cell => {
                cell.addEventListener("click", () => {
                    let coordinate = cell.getAttribute("data-coordinate")
                    playRound(coordinate, P2.gameboard,  P2.gameboardID)
                })
            })   
        })

        return {P1, P2}
    }
    
    // Expose public methods
    return { init, setShips, playRound };
}

export default DOMController;
