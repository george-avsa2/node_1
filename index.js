var pjson = require("./package.json");

console.log(`Hello, current version is ${pjson.version}`);

function countReversePolishNotation(str) {
  const stack = [];
  const lolkek = str.split(" ");
  lolkek.forEach((lol) => {
    const int = Number.parseInt(lol);
    if (int || int === 0) {
      stack.push(int);
    } else {
      const operand1 = stack.pop();
      const operand2 = stack.pop();

      if (lol === "*") {
        stack.push(operand1 * operand2);
      } else if (lol === "+") {
        stack.push(operand1 + operand2);
      } else if (lol === "/") {
        stack.push(operand2 / operand1);
      } else if (lol === "-") {
        stack.push(operand2 - operand1);
      }
    }
  });
  console.log(stack);
}

module.exports = countReversePolishNotation;
