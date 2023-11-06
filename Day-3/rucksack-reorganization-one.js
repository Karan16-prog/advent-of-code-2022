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

  for (const char of input) {
    let compartmentOne = char.slice(0, char.length / 2).trim();
    let compartmentTwo = char.slice(char.length / 2, char.length).trim();

    for (let i = 0; i < compartmentOne.length; i++) {
      if (compartmentTwo.includes(compartmentOne[i])) {
        if (compartmentOne[i].toLowerCase() == compartmentOne[i]) {
          prioritySum += prioritySmallLetter(compartmentOne[i]);
        } else {
          prioritySum += priorityCapitalLetter(compartmentOne[i]);
        }

        break;
      }
    }
  }

  console.log(prioritySum);
});
