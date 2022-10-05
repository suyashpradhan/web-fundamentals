/** @format */

// Todo
// Create an assertion test function

const { sum, subtract } = require('../../global');

// Globally Declared Variables
let result, expected;

// Assertion Function
function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error(`${result} is not equal to ${expected}`);
			} else {
				console.log(`Tests passed with value: ${actual}`);
			}
		},
	};
}

// Testing Sum Function
result = sum(2, 4);
expected = 6;
expect(result).toBe(expected);

// Testing Subtract Function
result = subtract(2, 4);
expected = -2;
expect(result).toBe(expected);
