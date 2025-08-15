import {describe, test, it, expect} from "vitest";
import ship from "../src/game/ship";


describe("ship", () => {

    it("if no. of hits equals to shot length, isSunk should return true", () => {
        const myShip = ship(5);
        
        // Simulate hits
        for (let i = 0; i < 5; i++) {
        myShip.hit();
    }
        
        expect(myShip.isSunk()).toBe(true);

    })





})