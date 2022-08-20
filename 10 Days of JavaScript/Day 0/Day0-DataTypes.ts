'use strict';

// https://www.hackerrank.com/challenges/js10-hello-world/problem?isFullScreen=true

export const performOperation = (secondInteger:number, secondDecimal:number, secondString:string) => {
	const firstInteger = 4;
	const firstDecimal = 4.0;
	const firstString = 'HackerRank ';
	const integerResult = firstInteger+Number(secondInteger)
	const decimalResult = firstDecimal+Number(secondDecimal)
	const stringResult = firstString.concat(secondString)
	return {integerResult, decimalResult, stringResult}
}



