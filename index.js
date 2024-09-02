var pjson = require("./package.json");

function countReversePolishNotation(str) {
  try {
    console.log(`Hello, current version is ${pjson.version}`);
    const stack = [];
    const splittedInputs = str.split(" ");
    splittedInputs.forEach((splittedInput) => {
      const int = Number.parseInt(splittedInput);
      if (int || int === 0) {
        stack.push(int);
      } else {
        const operand1 = stack.pop();
        const operand2 = stack.pop();

        if (splittedInput === "*") {
          stack.push(operand1 * operand2);
        } else if (splittedInput === "+") {
          stack.push(operand1 + operand2);
        } else if (splittedInput === "/") {
          stack.push(operand2 / operand1);
        } else if (splittedInput === "-") {
          stack.push(operand2 - operand1);
        }
      }
    });

    if (stack.length !== 1) {
      throw new "Someting wrong with input string"();
    }

    return stack[0];
  } catch (e) {
    console.error(e);
  }
}

module.exports = countReversePolishNotation;
