import generateRandomNumberInRange from '../utils/utils.js';
import { runEngine, numberOfRounds } from '../index.js';

const operators = ['+', '-', '*'];

const generateOperator = () => {
  const index = generateRandomNumberInRange(0, operators.length);
  return operators[index];
};

const calculate = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = num1 + num2;
  }
  return result;
};

const generateGameData = (limit) => {
  const data = [];
  for (let i = 0; i < limit; i += 1) {
    const firstNumber = generateRandomNumberInRange(1, 100);
    const secondNumber = generateRandomNumberInRange(1, 100);
    const operator = generateOperator();
    const equation = `${firstNumber} ${operator} ${secondNumber}`;
    const solution = String(calculate(firstNumber, secondNumber, operator));
    data.push([equation, solution]);
  }
  return data;
};

const description = 'What is the result of the following expression?';
const gameData = generateGameData(numberOfRounds);

const brainCalc = () => runEngine(description, gameData);
export default brainCalc;
