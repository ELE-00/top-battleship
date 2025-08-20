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

  it("ssecond coordinarte of carrier is B1", () => {
    const game = gameboard(); 
    const coordinateArray = game.placeShip("carrier","A1","horizontal");
    expect(coordinateArray[1][0]).toBe("B1");
  });

  it("last coordinarte of carrier is E1", () => {
    const game = gameboard(); 
    const coordinateArray = game.placeShip("carrier","A1","horizontal");
    expect(coordinateArray[4][0]).toBe("E1");
  });

  it("gives an out of bounds error", () => {
    const game = gameboard();
    expect(() => {
      game.placeShip("carrier", "J8", "horizontal"); // should go past K
    }).toThrow("Out of bounds");
  });


});


describe("game mechanics", () => {
  it("returns 2 if the ship is hit twice", () => {
    const game = gameboard();
    game.placeShip("carrier", "A1", "horizontal")

    expect(game.receiveAttack("E1")).toBe("1");
  });


  /*it("shipSunk return false if the carrier is hit once", () => {
  const game = gameboard();
  game.placeShip("carrier", "A1", "horizontal")
  expect(game.receiveAttack("A1")).toBe(false);
  });

  /*  it("shipSunk return false if the carrier is twice once", () => {
  const game = gameboard();
  game.placeShip("carrier", "A1", "horizontal")
  expect(game.receiveAttack("B1")).toBe(false);
  });
  */

});