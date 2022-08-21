import { jest } from "@jest/globals";
import {plusMinus} from "./3mPK-W01-01_PlusMinus";
describe("3 Months Preparation Kit - Week01 - 01-PlusMinus", () => {
  it("print specific ratios for given array testCase1", () => {
    const testArr = [-4, 3, -9, 0, 4, 1];
    const output = [0.375, 0.375, 0.25];

    expect(plusMinus(testArr)).toEqual(output);
  });

  it.todo("print specific ratios for given array testCase2")
const testArr2 = [1, 2, 3, -1, -2, -3, 0, 0];
const output = [0.375, 0.375, 0.25];
    const test = plusMinus(testArr2);

});

