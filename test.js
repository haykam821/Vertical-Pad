/* eslint-env mocha */

const chai = require("chai");
const assert = chai.assert;

const testString = "Hello, world!\nThis is a test.";
const verticalPad = require("./index.js");

describe("the function", () => {
	it("stay the same if padding to 0", () => {
		assert.strictEqual(testString, verticalPad(testString, 0));
	});
});