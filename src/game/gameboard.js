import ship from "./ship.js";

// Factory function to create a gameboard
function gameboard(){

    // Array holding all ship instances on this board
    let ships = []
    // Array holding all occupied coordinates and reference to the ship object and hit status
    let occupiedSquares = []

    // Generate a 10x10 board with coordinates A1 - J10
    function createBoard() {
        let board = [];

        for (let i = 1; i <= 10; i++){           // Rows 1-10
            for (let j = 0; j <= 9; j++){        // Columns A-J
                let letter = String.fromCharCode(65 + j) // 'A' → 65, etc.
                board.push(letter + i);                 // e.g., "A1", "B3"
            }
        };
        return board;
    }

    // Generate an array of coordinates for a ship based on size and direction
    function generateCoordinates(size, coordinate, direction){
        let temporaryArray = [];
        
        for (let i = 0; i < size; i++){
            if(direction === "horizontal"){
                // Move right along the same row
                let coordLetter = coordinate.slice(0,1).charCodeAt(0)
                let nextLetter = String.fromCharCode(coordLetter + i)
                temporaryArray.push(nextLetter + coordinate.slice(1))
            } else {
                // Move down along the same column
                let nextCoordinate = Number(coordinate.slice(1)) + i
                temporaryArray.push(coordinate.slice(0,1) + nextCoordinate)
            }                
        }  
        return temporaryArray;        
    }

    // Validate that the generated coordinates are within the board and not overlapping
    function validateCoordinates(array){
        for (let i = 0; i < array.length; i++){
            let letter = array[i].slice(0,1).charCodeAt(0); // Column as ASCII code
            let number = array[i].slice(1);                 // Row number

            if(letter > 74 || number > 10){ // Column > 'J' or row > 10
                throw Error(array[i] + " Out of bounds")
            } else if(occupiedSquares.some(([coords]) => coords === array[i])) {
                // Check for overlap with existing ships
                throw Error(array[i] + " is occupied")
            }
        }  
    }

    // Save ship coordinates to the board
    // Third element 'false' tracks whether coordinate has been hit
    function commitCoordinates(tempCoords, ship){
        for (let i = 0; i < tempCoords.length; i++){ 
            occupiedSquares.push([tempCoords[i], ship, false])
        }
    }

    // Predefined ship types and sizes
    const shipData = [
        {name: "carrier", size: 5},
        {name: "battleship", size: 4},
        {name: "destroyer", size: 3},
        {name: "submarine", size: 3},
        {name: "patrolboat", size: 2},
    ]
    
    // Place a ship on the board
    function placeShip(shipName, coordinate, direction) {

        // Find the ship data by name
        const shipObj = shipData.find(ship => ship.name == shipName)
        const shipSize = shipObj.size;

        // Create a new ship instance
        let newShip = ship(shipSize, shipName);

        // Generate coordinates and validate
        let tempcoords = generateCoordinates(shipSize, coordinate, direction)
        validateCoordinates(tempcoords)

        // Save the coordinates to the board
        commitCoordinates(tempcoords, newShip)
        ships.push(newShip) // Keep track of ship for game-over check
    }
    
    // Array keeping track of missed shots
    let missedAttacks = [];

    // Handle an attack at a coordinate
    function receiveAttack(coordinate) {
        // Skip if this coordinate was already missed
        if (missedAttacks.includes(coordinate)) {
            return;
        }

        // Check if coordinate hits a ship
        for (let i = 0; i < occupiedSquares.length; i++) {
            if (coordinate === occupiedSquares[i][0]) {
                // Prevent hitting the same coordinate twice
                if (occupiedSquares[i][2]) return;

                // Register hit on the ship and mark coordinate as hit
                occupiedSquares[i][1].hit();
                occupiedSquares[i][2] = true;
                return;
            }
        }

        // If no ship, mark as missed
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
        shipData,
        occupiedSquares,
        missedAttacks,
    };
}

export default gameboard;
