import ship from "./ship";


function gameboard(){

    //Create board
    function createBoard() {
        let board = [];

        for (let i = 1; i <= 10; i++){
            for (let j = 0; j <= 9; j++){
                let letter = String.fromCharCode(65 + j)
                board.push(letter + i);
            }
        };
      return board;
    }


    let shipCoordinates = []

    function generateCoordinates(size, coordinate, direction){
        let temporaryArray = []
        
        for (let i = 0; i < size; i++){
            if(direction === "horizontal"){
                //Slices the coordinate to string and number, converts string to number, add i and converts back to string
                let coordLetter = coordinate.slice(0,1).charCodeAt(0)
                let nextLetter =  String.fromCharCode(coordLetter + i)
                temporaryArray.push(nextLetter + coordinate.slice(1))

            }else {
                //Slices the coordinate to string and number, adds i to the number and stores it in the array
                let nextCoordinate = Number(coordinate.slice(1)) + i
                temporaryArray.push(coordinate.slice(0,1) + nextCoordinate)
            }                
        }  
        return temporaryArray        
    }
    

    function validateCoordinates(array){

        //Checks on temporary array
        for (let i = 0; i < array.length; i++){
            let letter = array[i].slice(0,1).charCodeAt(0);
            let number = array[i].slice(1);

            if(letter > 75 || number > 10){
                throw Error("Out of bounds")
            }else if(shipCoordinates.some(([coords]) => coords === array[i])){
                throw Error(array[i] + " is occupied")
            }
        }
        return array;    
    }


    function commitCoordinates(tempCoords, ship){
        for (let i = 0; i < tempCoords.length; i++){ 
        shipCoordinates.push([tempCoords[i],ship])
        }
    }




    function placeShip(shipName, coordinate, direction) {

        const shipData = [
            {name: "carrier", size: 5},
            {name: "battleship", size: 4},
            {name: "destroyer", size: 3},
            {name: "submarine", size: 3},
            {name: "patrolboat", size: 2},
        ]
     
        const shipObj = shipData.find(ship => ship.name == shipName)
        const shipSize = shipObj.size;

        let newShip = new ship(shipSize);
        let tempcoords = generateCoordinates(shipSize, coordinate, direction)
        validateCoordinates(tempcoords)
        commitCoordinates(tempcoords, newShip)

        return shipCoordinates //return nothing for prod version
    }
    

    function receiveAttack(coordinate){

    }


    return {createBoard, placeShip };
}

export default gameboard;

//TASK LIST
//1. Create board - DONE
//2. Place ship function - DONE
//3. GenerateCoordinates for each ship placement - DONE
//4. Coordinate validation to prevent out of bounds andship overlap - DONE

//5. receiveAttack - PENDING
//6. track of missed attacks - PENDING
//7. report whether or not all of their ships have been sunk
