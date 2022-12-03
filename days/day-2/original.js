// Get the input
// 0 - Rock; 1 - Paper; 2 - Scissors
// The filter is needed because there's a new line at the end of the pre
input = $("pre").innerText.replace(/[ABCXYZ]/g, m => "ABCXYZ".indexOf(m) % 3).split("\n").map(string => string.split(" ")).filter(s => s?.length > 1);

// Part 1
// Difference between elf's move is a number from -2 to +2
// This array takes the winner index as the number plus 2 (since arrays
// start at 0) and returns the points for the winner
resultPoints = (({ elf, draw, you }) => [ elf, you, draw, elf, you ])({ elf: 0, draw: 3, you: 6 }); // 0 for lose, 3 for draw, 6 for win

console.log(input.reduce((acc, [ elfMove, yourMove ]) => (
	acc
	+ resultPoints[elfMove - yourMove + 2]
	+ (+yourMove) + 1 // shape points; adding 1 because shape points start at 1, this starts at 0
), 0));

// Part 2
// 0 - Lose; 1 - Draw; 2 - Win
// I'll let you figure out how this part works
console.log(input.reduce((acc, [ elfMove, intendedResult ]) => (
	acc
	+ intendedResult * 3 // result already given, no need to get from array
	+ ((elfMove + intendedResult + 2) % 3) + 1 // shape points
), 0));
