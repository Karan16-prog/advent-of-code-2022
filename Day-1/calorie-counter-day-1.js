const fs = require("fs");

fs.readFile("input.txt", (err, inputD) => {
  if (err) throw err;
  let input = inputD.toString().split("\n\n");
  const hash = {};
  let max = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  input.forEach((item, i) => {
    let itemSum = item.split("\n").reduce((acc, ele) => {
      return parseInt(acc) + parseInt(ele);
    }, 0);
    if (itemSum > max[1]) {
      max = [i, itemSum];
    }
    hash[i] = itemSum;
  });

  // Answer to Part One of the question
  console.log(hash[max[0]]);

  // Answer to Part Two of the question
  console.log(
    Object.values(hash)
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((acc, ele) => {
        return acc + ele;
      }, 0)
  );
});
