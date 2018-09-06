function top(string, lines = 5) {
	const needed = lines - string.split("\n").length;
	if (needed < 0) {
		// We can't pad it, so let's just keep it the same.
		return string;
	} else {
		return "\n".repeat(needed) + string;
	}
}
function bottom(string, lines = 5) {
	const needed = lines - string.split("\n").length;
	if (needed < 0) {
		// The same thing happens here.
		return string;
	} else {
		return string + "\n".repeat(needed);
	}
}
function middle(string, lines = 5) {
	const linesTop = Math.min(lines / 2);
	const linesBottom = Math.max(lines / 2);
	
	const strLines = string.split("\n").length
	
	const needed = lines - strLines;
	const neededTop = linesTop - Math.max(strLines / 2);
	const neededBottom = linesBottom - Math.min(strLines / 2);
	
	if (needed < 0) {
		// It happens again here.
		return string;
	} else {
		return "\n".repeat(neededTop) + string + "\n".repeat(neededBottom);
	}
}

module.exports = {
	bottom,
	middle,
	top,
};
