/* eslint-env mocha */

const chai = require("chai");
const assert = chai.assert;

const testString = "Hello, world!\nThis is a test.";
const testLines = testString.split("\n").length;

const verticalPad = require("./index.js");

describe("return values with 2-line string", () => {
	it("stay the same if padding to same number of lines", () => {
		assert.strictEqual(testString, verticalPad.top(testString, testLines));
		assert.strictEqual(testString, verticalPad.bottom(testString, testLines));
	});
	it("don't stay the same if padding to more lines than string", () => {
	    assert.notStrictEqual(testString, verticalPad.top(testString, testLines + 1));
	    assert.notStrictEqual(testString, verticalPad.bottom(testString, testLines + 1));
	});
	it("return a string", () => {
	    assert.typeOf(verticalPad.top(testString, testLines + 1), "string");
	    assert.typeOf(verticalPad.bottom(testString, testLines + 1), "string");
	});
});