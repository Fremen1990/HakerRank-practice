// https://www.hackerrank.com/challenges/three-month-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

"use strict";

export const plusMinus = (arr: any): any => {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.forEach((x: any) => {
    if (x < 0) {
      negative++;
    } else if (x > 0) {
      positive++;
    } else if (x === 0) {
      zero++;
    }
  });

  const positiveRatio = (positive / arr.length).toFixed(6);
  const negativeRatio = (negative / arr.length).toFixed(6);
  const zeroRatio = (zero / arr.length).toFixed(6);

  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);

  return [positiveRatio, negativeRatio, zeroRatio];
};
//
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
