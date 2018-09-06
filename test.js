/* eslint-env mocha */

const chai = require("chai");
const assert = chai.assert;

const testLineData = [
	"Hello, world!",
	"Welcome,\nnew galaxy!",
	"This\nis\nmulti-line",
	"This\nhas\nfour\nlines!",
	"Wow,\nthat\nis\nmany\nlines!",
];

const verticalPad = require("./index.js");

testLineData.forEach((item, index) => {
	const testString = item;
	const testLines = item.split("\n").length;

	describe(`return values with ${testLines}-line string`, () => {
		it("stay the same if padding to same number of lines", () => {
			assert.strictEqual(testString, verticalPad.top(testString, testLines));
			assert.strictEqual(testString, verticalPad.bottom(testString, testLines));
		});
		it("don't stay the same if padding to more lines than string", () => {
			assert.notStrictEqual(testString, verticalPad.top(testString, testLines + 1));
			assert.notStrictEqual(testString, verticalPad.bottom(testString, testLines + 1));
		});
	});
});

const fiveLines = "\n\n\n\n";

const genericPadTop = verticalPad.top("");
const genericPadBottom = verticalPad.top("");

describe("other", () => {
	it("return a string", () => {
		assert.typeOf(genericPadTop, "string");
		assert.typeOf(genericPadBottom, "string");
	});
	it("default to padding 5 lines", () => {
		assert.strictEqual(genericPadTop, fiveLines);
		assert.strictEqual(genericPadBottom, fiveLines);
	});
});
