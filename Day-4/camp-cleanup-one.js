let fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8", flag: "r" })
  .toString()
  .trim()
  .split("\n")
  .map((ele) => ele.split(",").map((item) => item.split("-").map(Number)));

const doesFullyContain = (item) => {
  let [a, b] = item;

  if (a[0] <= b[0] && a[1] >= b[1]) {
    return 1;
  } else if (b[0] <= a[0] && b[1] >= a[1]) {
    return 1;
  }
  return 0;
};

let result = input.reduce((acc, ele) => {
  return acc + doesFullyContain(ele);
}, 0);

console.log(result);
