// Get the input
// The left compartment is a array because strings don't have find method
const baseInput = $("pre").innerText.split("\n").filter(Boolean);

// Part 1
const
	input = baseInput.map(s => [ [ ...s.slice(0, s.length / 2) ], s.slice(s.length / 2) ]),
	arrayGenerator = length => [ ...Array(length).keys() ];
	// "a".charCodeAt(0) === 97
	// "A".charCodeAt(0) === 65
	priorityGenerator = start => arrayGenerator(26).map(i => String.fromCharCode(i + start))
	priorities = priorityGenerator(97).concat(priorityGenerator(65))

console.log(input.reduce((acc, [ leftComp, rightComp ]) => (
	acc
	+ priorities.indexOf(leftComp.find(c => rightComp.includes(c)))
	+ 1
), 0));

// Part 2
const chunkedInput = arrayGenerator(baseInput.length / 3).map(i => baseInput.slice(i * 3, (i + 1) * 3))
console.log(chunkedInput.reduce((acc, [ elf, ...rest ]) => (
	acc + priorities.indexOf([ ...elf ].find(s => rest.every(elf2 => elf2.includes(s)))) + 1
), 0));
