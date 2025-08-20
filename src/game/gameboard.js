import ship from "./ship";

// Factory function to create a gameboard
function gameboard(){

    // Create a 10x10 board with coordinates A1 - J10
    function createBoard() {
        let board = [];

        for (let i = 1; i <= 10; i++){           // Rows 1-10
            for (let j = 0; j <= 9; j++){        // Columns A-J
                let letter = String.fromCharCode(65 + j) // Convert 0-9 to ASCII A-J
                board.push(letter + i);                 // Combine letter + number, e.g., "A1"
            }
        };
        return board;
    }

    // Generate an array of coordinates for a ship based on size and direction
    function generateCoordinates(size, coordinate, direction){
        let temporaryArray = [];
        
        for (let i = 0; i < size; i++){
            if(direction === "horizontal"){
                // Horizontal: increment letter (A-J), keep row the same
                let coordLetter = coordinate.slice(0,1).charCodeAt(0)      // 'A' → 65
                let nextLetter = String.fromCharCode(coordLetter + i)       // move right by i
                temporaryArray.push(nextLetter + coordinate.slice(1))       // e.g., "B5"
            } else {
                // Vertical: increment number (1-10), keep column the same
                let nextCoordinate = Number(coordinate.slice(1)) + i
                temporaryArray.push(coordinate.slice(0,1) + nextCoordinate) // e.g., "A6"
            }                
        }  
        return temporaryArray;        
    }

    // Validate coordinates to prevent out-of-bounds or overlapping ships
    function validateCoordinates(array){
        for (let i = 0; i < array.length; i++){
            let letter = array[i].slice(0,1).charCodeAt(0); // Column as ASCII code
            let number = array[i].slice(1);                 // Row number

            if(letter > 75 || number > 10){ // Column > 'J' or row > 10
                throw Error("Out of bounds")
            } else if(occupiedSquares.some(([coords]) => coords === array[i])) {
                // Check if coordinate is already occupied by another ship
                throw Error(array[i] + " is occupied")
            }
        }  
    }

    // Add the ship and its coordinates to the occupiedSquares array
    // The third element 'false' tracks whether the coordinate has been hit
    function commitCoordinates(tempCoords, ship){
        for (let i = 0; i < tempCoords.length; i++){ 
            occupiedSquares.push([tempCoords[i], ship, false])
        }
    }

    // Array holding all ship objects
    let ships = []
    // Array holding all occupied squares with ship references
    let occupiedSquares = []

    // Place a ship on the board
    function placeShip(shipName, coordinate, direction) {

        // Predefined ship types and sizes
        const shipData = [
            {name: "carrier", size: 5},
            {name: "battleship", size: 4},
            {name: "destroyer", size: 3},
            {name: "submarine", size: 3},
            {name: "patrolboat", size: 2},
        ]
     
        // Find the ship data by name
        const shipObj = shipData.find(ship => ship.name == shipName)
        const shipSize = shipObj.size;

        // Create a new ship instance
        let newShip = ship(shipSize);
        // Generate coordinates for the ship based on direction
        let tempcoords = generateCoordinates(shipSize, coordinate, direction)
        // Validate that coordinates are within board and not overlapping
        validateCoordinates(tempcoords)
        // Commit ship coordinates to board
        commitCoordinates(tempcoords, newShip)
        // Keep track of ship instance for later (e.g., game over check)
        ships.push(newShip)
    }
    
    // Array keeping track of missed shots
    let missedAttacks = [];

    // Process an attack on a coordinate
    function receiveAttack(coordinate) {
        // Check if the coordinate was already attacked as a miss
        if (missedAttacks.includes(coordinate)) {
            throw Error("Coordinate already attacked");
        }

        // Check if coordinate hits a ship
        for (let i = 0; i < occupiedSquares.length; i++) {
            if (coordinate === occupiedSquares[i][0]) {
                // Prevent attacking the same ship coordinate twice
                if (occupiedSquares[i][2]) throw Error("Coordinate already attacked");
                // Register hit on the ship
                occupiedSquares[i][1].hit();
                // Mark coordinate as hit
                occupiedSquares[i][2] = true;
                return; // Exit early after successful hit
            }
        }

        // If no ship was found at this coordinate → it's a miss
        missedAttacks.push(coordinate);
    }

    // Check if all ships have been sunk
    function gameOver(){
        return ships.every(ship => ship.isSunk());      
    }

    // Expose public methods and data
    return {
        createBoard,
        placeShip,
        receiveAttack,
        gameOver,
    };
}

export default gameboard;