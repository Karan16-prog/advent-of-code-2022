const fs = require("fs");

const prioritySmallLetter = (str) => {
  return str.charCodeAt(0) - 96;
};

const priorityCapitalLetter = (str) => {
  return str.charCodeAt(0) - 38;
};

fs.readFile("input.txt", (err, inputD) => {
  if (err) return err;
  let input = inputD.toString().trim().split("\n");
  let prioritySum = 0;
  for (let i = 0; i < input.length - 1; i += 3) {
    // WAP to find the common char in three strings
    let elfOne = input[i];
    let elfTwo = input[i + 1];
    let elfThree = input[i + 2];
    for (const str of elfOne) {
      if (elfTwo.includes(str) && elfThree.includes(str)) {
        prioritySum +=
          str.toLowerCase(0) === str
            ? prioritySmallLetter(str)
            : priorityCapitalLetter(str);
        break;
      }
    }
  }

  console.log(prioritySum);
});
