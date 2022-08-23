// https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

const arr = [1, 2, 3, 4, 5];
const arr2 = [7, 69, 2, 221, 8974];

const result1 = "10 14";
const result2 = "299 9271";

export const miniMaxSum = (arr: number[]): any => {
  const sortArr = arr.sort((a, b) => a - b);
  let minSum = 0;
  let maxSum = 0;
  for (let i = 1; i < sortArr.length; i++) {
    maxSum += sortArr[i];
  }
  for (let i = 0; i < sortArr.length - 1; i++) {
    minSum += sortArr[i];
  }
  console.info(`${minSum} ${maxSum}`);
};

miniMaxSum(arr);
