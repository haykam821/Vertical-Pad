/* eslint-env mocha */

const chai = require("chai");
const assert = chai.assert;

const testLineData = [
	"Hello, world!",
	"This is a test.",
	"It it pretty testy here.",

	"Never gonna give you up",
	"Never gonna let you down",
	"Never gonna run around and desert you",
	"Never gonna make you cry",
	"Never gonna say goodbye",
	"Never gonna tell a lie and hurt you",

	"(Please don't make an issue on GitHub because of this)",
];

const verticalPad = require("./index.js");

for (let testLines = 1; testLines < 11; testLines++) {
	const testString = testLineData.slice(0, testLines).join("\n");

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
}

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