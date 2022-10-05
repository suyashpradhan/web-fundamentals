/** @format */

const { sum, subtract } = require('../../global');

test('sums function adds 2 values', () => {
	const result = sum(2, 4);
	const expected = 6;
	expect(result).toBe(expected);
});

test('subtract function subtracts 2 values', () => {
	const result = subtract(2, 4);
	const expected = -2;
	expect(result).toBe(expected);
});

function test(title, callback) {
	try {
		callback();
		console.log(`PASS: ${title}`);
	} catch (error) {
		console.error(`FAILED: ${title}`);
		console.log(error);
	}
}

function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error(`${result} is not equal to ${expected}`);
			}
		},
	};
}
