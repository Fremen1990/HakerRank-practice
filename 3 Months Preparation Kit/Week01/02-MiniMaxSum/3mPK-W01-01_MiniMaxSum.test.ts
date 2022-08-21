import { miniMaxSum } from "./3mPK-W01-02_MiniMaxSum";

const arr = [1, 2, 3, 4, 5];
const arr2 = [7, 69, 2, 221, 8974];

const result1 = "10 14";
const result2 = "299 9271";

describe("It check if min and max sums are correct", () => {
  it("check min and max sum for input 1 2 3 4 5", () => {
    const testCase = miniMaxSum(arr);
    console.info(testCase);
  });
});
