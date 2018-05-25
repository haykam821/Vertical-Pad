/* eslint-env mocha */

const chai = require("chai");
const assert = chai.assert;

const testString = "Hello, world!\nThis is a test.";
const verticalPad = require("./index.js");

describe("return values with 2-line string", () => {
	it("stay the same if padding to 0", () => {
		assert.strictEqual(testString, verticalPad.top(testString, 0));
		assert.strictEqual(testString, verticalPad.bottom(testString, 0));
	});
	it("stay the same if padding to 1", () => {
	    assert.strictEqual(testString, verticalPad.top(testString, 1));
	    assert.strictEqual(testString, verticalPad.bottom(testString, 1));
	});
	it("don't stay the same if padding to longer value than string", () => {
	    assert.notStrictEqual(testString, verticalPad.top(testString, 3));
	    assert.notStrictEqual(testString, verticalPad.bottom(testString, 3));
	});
});