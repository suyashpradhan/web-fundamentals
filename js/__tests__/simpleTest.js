/** @format */

// Todo
// 1. Simple Conditions testing

const { sum, subtract } = require('../../global');

let result, expected;

result = sum(2, 4);
expected = 6;
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(2, 4);
expected = -2;
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected}`);
}
