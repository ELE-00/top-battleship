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


    let shipCoordnates = []

    function placeShip(shipNo, coordinate, direction) {

        function shipCoords(size){

            for (let i = 0; i < size; i++){
                //A1
                let nextCoordinate = Number(coordinate.slice(1)) + i
                shipCoordnates.push(coordinate.slice(0,1) + nextCoordinate)
                
            }
            return shipCoordnates

        }

        if(shipNo === 1){
            const carrier = new ship(5)
            shipCoords(5)

        }else if(shipNo === 2){
            const battleship = new ship(4)
            shipCoords(4) 

        }else if(shipNo === 3){
            const destroyer = new ship(3)   
            shipCoords(3)

        }else if(shipNo === 4){
            const submarine = new ship(3)
            shipCoords(3)

        }else if(shipNo === 5){
            const patrolBoat = new ship(2)
            shipCoords(2) 
        }
    
    return shipCoordnates
    }
    







    function receiveAttack(coordinate){
        

    }


    return {createBoard, placeShip };
}

export default gameboard;
