function padTop(string, lines = 5) {
	const needed = lines - string.split("\n").length;
	if (needed < 0) {
		// We can't pad it, so let's just keep it the same.
		return string;
	} else {
		return "\n".repeat(needed) + string;
	}
}
function padBottom(string, lines = 5) {
	const needed = lines - string.split("\n").length;
	if (needed < 0) {
		// The same thing happens here.
		return string;
	} else {
		return string + "\n".repeat(needed);
	}
}

module.exports = {
	bottom: padBottom,
	top: padTop,
};
