'use strict';

/**
 *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
 *   Print three lines:
 *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
 *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
 *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
 *
 *	Parameter(s):
 *   secondInteger - The string representation of an integer.
 *   secondDecimal - The string representation of a floating-point number.
 *   secondString - A string consisting of one or more space-separated words.
 **/
export function performOperation(secondInteger, secondDecimal, secondString) {
	// Declare a variable named 'firstInteger' and initialize with integer value 4.
	const firstInteger = 4;

	// Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
	const firstDecimal = 4.0;

	// Declare a variable named 'firstString' and initialize with the string "HackerRank".
	const firstString = 'HackerRank ';


	const integerResult = firstInteger+Number(secondInteger)

		console.log(integerResult)
	// Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.

	const decimalResult = firstDecimal+Number(secondDecimal)

	console.log(decimalResult)

	// Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.

	const stringResult = firstString.concat(secondString)

	// console.log(firstString+secondString)
	console.log(stringResult)
	// Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.

	return {integerResult, decimalResult, stringResult}

}

performOperation(12, 4.32, "is the best place to learn and practice coding!")

