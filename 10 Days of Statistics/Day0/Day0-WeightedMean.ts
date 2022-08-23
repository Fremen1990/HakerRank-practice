// https://www.hackerrank.com/challenges/s10-weighted-mean/problem?isFullScreen=true

/*
 * Complete the 'weightedMean' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY X
 *  2. INTEGER_ARRAY W
 */

function weightedMean(X, W) {
    // Write your code here
    let wSum =0;
    let weightSum=0;

    for(let i =0; i<X.length; i++){
        weightSum += W[i]
        wSum += X[i] * W[i]
    }
    const result = (wSum/weightSum).toFixed(1)
    console.log(result)
}