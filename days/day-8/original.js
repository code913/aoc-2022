const input = $("pre").innerText.trim().split("\n").map(row => row.split("").map(Number));

let
	part1 = 2 * input[0].length + 2 * input.length - 4,
	part2 = 0;

for (let y = 1; y < (input.length - 1); y++) {
  for (let x = 1; x < (input[0].length - 1); x++) {
    const
    	curTree = input[y][x],
			directions = [
        input.slice(0, y).map(row => row[x]).reverse(),
        input[y].slice(x + 1),
        input.slice(y + 1).map(row => row[x]),
        input[y].slice(0, x).reverse(),
      ],
      visible = Math.min(...directions.map(d => Math.max(...d))) < curTree,
      scenicSource = directions.map(d => (d.findIndex(tree => tree >= curTree) + 1) || d.length).reduce((a, c) => a * c);
    if (visible) part1++;
    if (part2 <= scenicSource) part2 = scenicSource;
  }
}

console.log(part1, part2);
