import { generateRandomNumberInRange } from '../utils/utils.js';
import { runEngine, numberOfRounds } from '../index.js';

const operators = ['+', '-', '*'];
const operatorIndex = () => generateRandomNumberInRange(0, operators.length);

const generateOperator = () => {
  const index = operatorIndex();
  return operators[index];
};

const solveEquation = (num1, num2, operator) => {
  const firstOperand = num1;
  const secondOperand = num2;
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

const generateGameData = (limit) => {
  const array = [];
  let iteration = 0;
  while (iteration < limit) {
    const firstNumber = generateRandomNumberInRange(1, 100);
    const secondNumber = generateRandomNumberInRange(1, 100);
    const operator = generateOperator();
    const equation = `${firstNumber} ${operator} ${secondNumber}`;
    const solution = String(solveEquation(firstNumber, secondNumber, operator));
    array.push([equation, solution]);
    iteration += 1;
  }
  return array;
};

const description = 'What is the result of the following expression?';
const gameData = generateGameData(numberOfRounds);

const brainCalc = () => runEngine(description, gameData, numberOfRounds);
export default brainCalc;
