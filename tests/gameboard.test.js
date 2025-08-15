import {describe, test, it, expect} from "vitest";
import gameboard from "../src/game/gameboard";


describe("createBoard", () => {
  it("should have an array of 100 boxes", () => {
    const game = gameboard(); // returns object with createBoard
    const board = game.createBoard();
    expect(board.length).toBe(100);
  });

  it("y axis should be a letter", () => {
    const game = gameboard(); // returns object with createBoard
    const board = game.createBoard();
    expect(board[0]).toBe("A1");
  });


});

describe("shipcoord", () => {
  it("should have an array of 5 coords", () => {
    const game = gameboard(); 
    const coordinateArray = game.placeShip(1,"A1");
    expect(coordinateArray.length).toBe(5);
  });

  it("second coord should be a2", () => {
    const game = gameboard();
    const coordinateArray = game.placeShip(1,"A1");
    expect(coordinateArray[3]).toBe("A4");
  });


});
