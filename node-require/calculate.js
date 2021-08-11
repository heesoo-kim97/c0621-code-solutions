const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const firstNum = parseInt(process.argv[2]);
const operator = process.argv[3];
const secondNum = parseInt(process.argv[4]);

if (operator === 'plus') {
  console.log('Added value is: ', add(firstNum, secondNum));
} else if (operator === 'minus') {
  console.log('Subtracted value is: ', subtract(firstNum, secondNum));
} else if (operator === 'times') {
  console.log('Multiplied value is: ', multiply(firstNum, secondNum));
} else if (operator === 'over') {
  console.log('Subtracted value is: ', divide(firstNum, secondNum));
}
