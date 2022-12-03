// Improved it by using a complex regex to do both parts at once
// Also a small tweak to use a function to get the priority
// I would've done regex on the original one if I had known the second part question :/

// Get the input
const
  input = $("pre").innerText, // no need for split, we're gonna use regex
  arrayGenerator = length => [ ...Array(length).keys() ],
	priorityGenerator = start => arrayGenerator(26).map(i => String.fromCharCode(i + start)),
	priorities = priorityGenerator(97).concat(priorityGenerator(65)),
  getPriority = letter => priorities.indexOf(letter) + 1;

let
	part1 = 0,
	part2 = 0;

// I'm not even gonna attempt to explain what this regex does, because you wouldn't understand it
input.replace(new RegExp("(?<=(^|\n)).*?(?<letter>[A-Za-z])(.*\n.*\\k<letter>){2}.*?(?=($|\n))", "g"), (elves, ...rest) => [
  // This part is too simple to do with regex
	(part1 += elves.split("\n").map(elf => getPriority([ ...elf.slice(0, elf.length / 2) ].find(l => elf.slice(elf.length / 2).includes(l)))).reduce((a, c) => a + c)),

	// Last parameter is groups object
	(part2 += getPriority((rest[rest.length - 1].letter))),

	// Next match will ignore empty part and start from former fourth line
	""
][2]);

console.log(part1, part2);

// Regex my beloved :heart:
