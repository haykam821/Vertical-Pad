function padTop(string, lines) {
	const needed = lines - string.split("\n").length;
	return "\n".repeat(needed) + string;
}
function padBottom(string, lines) {
	const needed = lines - string.split("\n").length;
	return string + "\n".repeat(needed);
}

module.exports = {
	top: padTop,
	bottom: padBottom,
};