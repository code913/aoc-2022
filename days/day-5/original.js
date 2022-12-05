// Today's puzzle was pretty easy, so I'll let you
// figure this code out on your own ;)

// Get the input
const
	input = $("pre").innerText,
	gap = 1;
	stackWidth = 3;
	totalWidth = stackWidth + gap;

let [ stacks, instructions ] = input.split("\n\n");
stacks = stacks.split("\n").slice(0, -1);

let highestStackNum = (stacks[0].length + gap) / totalWidth;
{
	let _stacks = [];
	for (let i = 0; i < highestStackNum; i++) {
		let start = i * totalWidth;
		_stacks.push(stacks.map(row => row.slice(start, start + stackWidth).match(/\w/)?.[0]).filter(s => s));
	}

	stacks = _stacks;
}

const output = (reverse) => {
	let copy = [ ...stacks ];
	for (let [, amount, from, to] of instructions.matchAll(/(?<amount>\d+) from (?<from>\d+) to (?<to>\d+)/g)) {
		[ from, to ] = [ from - 1, to - 1 ];

		let slice = copy[from].slice(0, amount)
		if (reverse) slice = slice.reverse();
		[ copy[from], copy[to] ] = [ copy[from].slice(amount), slice.concat(copy[to]) ];
	}

	return copy.map(stack => stack[0]).join("");
}

console.log(
	// Part 1
	output(true),
  // Part 2
	output(false)
);
