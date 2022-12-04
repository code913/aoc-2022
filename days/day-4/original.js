// Get the input
const input = $("pre").innerText.trim().split("\n");

let part1 = 0, part2 = 0;

for (pair of input) {
  let [ elf1Min, elf1Max, elf2Min, elf2Max ] = pair.split(/[-,]/g).map(x => +x);

  // Pretty self-explanatory
  part1 += (elf1Min <= elf2Min && elf1Max >= elf2Max) || (elf2Min <= elf1Min && elf2Max >= elf1Max);
 
  // Check by seeing if they don't overlap, then negating the result
  // Way easier than directly checking for overlap
  part2 += !(elf1Max < elf2Min || elf2Max < elf1Min);
};

console.log(part1, part2);
