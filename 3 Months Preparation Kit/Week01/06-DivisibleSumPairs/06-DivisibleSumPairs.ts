//https://www.hackerrank.com/challenges/three-month-preparation-kit-divisible-sum-pairs/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

/* Complete the 'divisibleSumPairs' function below.
*
* The function is expected to return an INTEGER.
* The function accepts following parameters:
    *  1. INTEGER n
*  2. INTEGER k
  3. INTEGER_ARRAY ar */


function divisibleSumPairs(n, k, ar) {
    // Write your code here

    let count = 0;
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {

            if ((ar[i] + ar[j]) % k === 0) {
                count += 1;
            }
        }
    }
    return count;



}