import { jest } from "@jest/globals";
import { plusMinus } from "./3mPK-W01-01_PlusMinus";
describe("Tests", () => {
  test("print specific ratios for given array", () => {
    const testArr = [-4, 3, -9, 0, 4, 1];
    // const output = [0.375, 0.375, 0.25];
    const test = plusMinus(testArr);
    console.log(test);
    expect(true).toBe(false);
  });
});

// const testArr2 = [1, 2, 3, -1, -2, -3, 0, 0];
// const output = [0.375, 0.375, 0.25];