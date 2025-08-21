
import gameboard from "./gameboard.js";


function player(playerName){
    let board = gameboard()

    return {
        name: playerName,
        board: board
        }

};


function computer(){
    let board = gameboard()

    return {
        name: "computer",
        board: board
        }


}

export {player, computer};
