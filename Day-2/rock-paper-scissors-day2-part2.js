const fs = require("fs");

fs.readFile("input.txt", (err, inputD) => {
  if (err) throw err;
  let input = inputD.toString().trim().split("\n");
  const map = new Map();

  for (const s of input) {
    console.log(s);
    if (map.has(s)) {
      let val = map.get(s);
      map.set(s, val + getScore(s)[0]);
    } else {
      let val = getScore(s);
      map.set(s, val[0]);
    }
  }
  let outcome = 0;
  for (const [key, value] of map) {
    outcome += value;
  }

  // day 2 part 2
  console.log(outcome);
});

const getScore = (str) => {
  let [j, k] = str.split(" ");
  switch (j) {
    case "A": // Rock
      if (k === "X") return [0 + 3, "l"];
      else if (k === "Y") return [1 + 3, "d"];
      else if (k === "Z") return [2 + 6, "w"];
    case "B": // Paper
      if (k === "X") return [1 + 0, "l"];
      else if (k === "Y") return [2 + 3, "d"];
      else if (k === "Z") return [3 + 6, "w"];
    case "C": // Scissor
      if (k === "X") return [2 + 0, "l"];
      else if (k === "Y") return [3 + 3, "d"];
      else if (k === "Z") return [1 + 6, "w"];
  }
};
