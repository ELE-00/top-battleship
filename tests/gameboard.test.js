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
    const coordinateArray = game.placeShip("carrier","A1");
    expect(coordinateArray.length).toBe(5);
  });

  it("gives an out of bounds error", () => {
    const game = gameboard();
    expect(() => {
      game.placeShip("carrier", "J8", "horizontal"); // should go past K
    }).toThrow("Out of bounds");
  });

});
