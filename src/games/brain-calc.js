import { generateRandomNumberInRange } from '../utils/utils.js';
import runEngine from '../index.js';

const operators = ['+', '-', '*'];
const operatorIndex = () => generateRandomNumberInRange(0, operators.length);

const generateOperator = () => {
  const index = operatorIndex();
  return operators[index];
};

const generateNumbers = () => {
  const equation = [];
  const firstOperand = generateRandomNumberInRange(1, 100);
  const secondOperand = generateRandomNumberInRange(1, 100);
  equation.push(firstOperand, secondOperand);
  return equation;
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
      result = String(firstOperand - secondOperand);
      break;
    case '*':
      result = String(firstOperand * secondOperand);
      break;
    default:
      result = String(firstOperand + secondOperand);
  }
  return result;
};

const createArray = (limit) => {
  const array = [];
  let iteration = 0;
  while (iteration < limit) {
    const numbers = generateNumbers();
    const operator = generateOperator()
    const equation = generateEquation(numbers, operator);
    const solution = solveEquation(numbers, operator);
    array.push([equation, solution]);
    iteration += 1;
  }
  return array;
};

const gameRounds = 3;
const rules = 'What is the result of the following expression?';
const array = createArray(gameRounds);

const brainCalc = () => runEngine(rules, array, gameRounds);
export default brainCalc;
