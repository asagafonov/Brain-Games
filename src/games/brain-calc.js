import { generateRandomNumberInRange, getTwoNumbers } from '../utils/utils.js';
import runEngine from '../index.js';

const operators = ['+', '-', '*'];
const operatorIndex = () => generateRandomNumberInRange(0, operators.length);

const generateOperator = () => {
  const index = operatorIndex();
  return operators[index];
};

const generateEquation = (numbers, operator) => {
  const digits = [...numbers];
  return `${digits[0]} ${operator} ${digits[1]}`;
};

const solveEquation = (numbers, operator) => {
  const digits = [...numbers];
  const firstOperand = digits[0];
  const secondOperand = digits[1];
  let result;
  switch (operator) {
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
      result = firstOperand + secondOperand;
  }
  return result;
};

const createArray = (limit) => {
  const array = [];
  let iteration = 0;
  while (iteration < limit) {
    const numbers = getTwoNumbers();
    const operator = generateOperator();
    const equation = generateEquation(numbers, operator);
    const solution = String(solveEquation(numbers, operator));
    array.push([equation, solution]);
    iteration += 1;
  }
  return array;
};

const gameRounds = 3;
const description = 'What is the result of the following expression?';
const gameData = createArray(gameRounds);

const brainCalc = () => runEngine(description, gameData, gameRounds);
export default brainCalc;
