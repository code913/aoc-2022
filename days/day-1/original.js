// Get the input
const input = $("pre").innerText.split("\n\n").map(elf => elf.split("\n").reduce((a, c) => a + (+c), 0))

// Part one
console.log(Math.max(...input));

// Part 2
input.sort((a, b) => b - a).slice(0, 3).reduce((a, c) => a + c);
