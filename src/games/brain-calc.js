import generateRandomNumberInRange from '../utils/generate-random-number.js';
import runEngine from '../index.js';

const operators = ['+', '-', '*'];
const operatorIndex = () => generateRandomNumberInRange(0, operators.length);

const generateOperator = () => {
  const index = operatorIndex();
  return operators[index];
};

const generateRandomEquation = () => {
  const firstOperand = generateRandomNumberInRange(1, 100);
  const secondOperand = generateRandomNumberInRange(1, 100);
  const operator = generateOperator();
  const equation = `${firstOperand} ${operator} ${secondOperand}`;
  return equation;
};

const solveEquation = (string) => {
  const eqToArray = string.split(' ');
  const operator = eqToArray[1];
  const firstOperand = Number(eqToArray[0]);
  const secondOperand = Number(eqToArray[2]);
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
    const equation = generateRandomEquation();
    const solution = solveEquation(equation);
    array.push([equation, solution]);
    iteration += 1;
  }
  return array;
};

const rules = 'What is the result of the following expression?';
const array = createArray(3);

const brainCalc = () => runEngine(rules, array);
export default brainCalc;
