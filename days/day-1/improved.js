// Sort it first so Math.max
// is not required
//
// Tip by a discord user with the id of 739497344780992564
// I wish I could type their username

// Get the input
const input = $("pre").innerText.split("\n\n").map(elf => elf.split("\n").reduce((a, c) => a + (+c), 0))

// And sort (mutates the array)

input.sort((a, b) => b - a);

// Part one
console.log(input[0]);

// Part 2
input.slice(0, 3).reduce((a, c) => a + c);
