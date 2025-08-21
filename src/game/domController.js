
/*Psuedocode

import modules - DONE
create a domcontroller - DONE
create a board - DONE
cells clicks and reactions - DONE
game initialization - DONE
creating players - DONE


positioning ships
round logic + board update using two players (marking hits as X and dots as missed)
playing vs computer feature

*/


import {player, computer} from "./players.js";

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


    //Factory to create a board
    function createBoard(playerName, playerGameboardID){
        const player1 = player(playerName);
        const UIgameboardId = playerGameboardID
        const p1gameboard = player1.board.createBoard()

        const letterLabels = ["","A","B","C","D","E","F","G","H","I","J"]
        const numberLabels = ["1","2","3","4","5","6","7","8","9","10"]
        let j = 0;

        //Letter labels on the top of grid
        for (let l = 0; l < letterLabels.length; l++){
            gridLabelItem(UIgameboardId,"gridLabel",letterLabels[l])
        }

        //Letter labels and grid
        for (let i = 0; i < p1gameboard.length; i++){
            
            if(i % 10 === 0){
               gridLabelItem(UIgameboardId,"gridLabel",numberLabels[j]) //number labels 
               gridItem(UIgameboardId, p1gameboard[i]) 
               j++; 
               
            }else{
                gridItem(UIgameboardId, p1gameboard[i])
                
            }
        }

        //Event listeners
 
        const Cells = document.querySelectorAll(`#${playerGameboardID} .gridItem[data-coordinate]`);
        Cells.forEach(cell => {
            cell.addEventListener("click", () => {
                let coordinate = cell.getAttribute("data-coordinate")
                console.log(playerGameboardID + " " + coordinate)
            })
        })

    }

    //Init state of the game
    function init(){
        const player1 = createBoard("Elvin", "player1gameboard")
        const player2 = createBoard("Fira", "player2gameboard")

    }



    // Expose public methods and data
    return { init };
}
export default DOMController;
