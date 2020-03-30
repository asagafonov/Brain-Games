import generateRandomNumberInRange from '../non-game-modules/utils.js';
import { runEngine } from '../index.js';

const getTwoNumbers = () => {
  const firstNumber = generateRandomNumberInRange(1, 100);
  const secondNumber = generateRandomNumberInRange(1, 100);
  const result = `${firstNumber} ${secondNumber}`;
  return result;
};

const getAnswer = (string) => {
  const numArray = string.split(' ');
  let firstNumber = Number(numArray[0]);
  let secondNumber = Number(numArray[1]);
  if (secondNumber > firstNumber) {
    [firstNumber, secondNumber] = [secondNumber, firstNumber];
  }
  let result;
  for (let i = secondNumber; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      result = i;
      break;
    }
  }
  return String(result);
};

const createArray = (limit) => {
  const array = [];
  let iteration = 0;
  while (iteration < limit) {
    const equation = getTwoNumbers();
    const solution = getAnswer(equation);
    array.push([equation, solution]);
    iteration += 1;
  }
  return array;
};

const rules = 'Find the greatest common divisor of the given numbers.';
const array = createArray(3);

const brainGCD = () => runEngine(rules, array);
export default brainGCD;
