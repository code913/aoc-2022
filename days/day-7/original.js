const input = $("pre").innerText.trim().split(/\n(?=\$|$)/g);

let fileSystem = new Map(), curDir = [];

for (let i = 0; i < input.length; i++) {
  let [command, ...output] = input[i].slice(2).split("\n"), arg = null;
  [command, arg] = command.split(" ");

  switch (command) {
    case "cd":
      switch (arg) {
        case "/":
          curDir = ["/"];
        break;
        case "..":
          curDir.pop();
        break;
        default:
          curDir.push(arg);
        break;
      }
    break;
    case "ls":
      if (fileSystem.has(curDir.join("/"))) break;
			let dirSize = output.filter(thing => !thing.startsWith("dir")).reduce((a, c) => a + +c.match(/\d+/)[0], 0);
      
      for (let i = 0; i < curDir.length; i++) {
        let dir = curDir.slice(0, i + 1).join("/");
        fileSystem.set(dir, (fileSystem.get(dir) ?? 0) + dirSize);
      }
    break;
  }
}

const sizes = [ ...fileSystem.values() ],
requiredToFree = 30_000_000 - (70_000_000 - fileSystem.get("/"));

console.log(sizes.filter(dirSize => dirSize <= 100000).reduce((a, c) => a + c),
Math.min(...[ ...fileSystem.values() ].filter(size => size >= requiredToFree)));
