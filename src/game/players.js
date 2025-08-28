
import gameboard from "./gameboard.js";


function player(){
    let board = gameboard()

    return {
        board: board
        }

};


function computer(){
    let board = gameboard()

    return {
        board: board
        }


}

export {player, computer};
