// This technically isn't my first attempt
// It's the first one that worked
const input = $("pre").innerText.trim();

function getIndex(length) {
  for (let i = 0; i < input.length - length; i++) {
    let slice = input.slice(i, i + length);

    if ([ ...new Set([ ...slice ]) ].length === slice.length) {
      return i + length;
    }
  }
}

console.log(getIndex(4));
console.log(getIndex(14));
