import { generateRandomNumberInRange } from '../utils/utils.js';
import runEngine from '../index.js';

const getTwoNumbers = () => {
  const result = [];
  const firstNumber = generateRandomNumberInRange(1, 100);
  const secondNumber = generateRandomNumberInRange(1, 100);
  result.push(firstNumber, secondNumber);
  return result;
};

const generateEquation = (numbers) => {
  const digits = [...numbers];
  return `${digits[0]} ${digits[1]}`
};

const getGCD = (numbers) => {
  const digits = [...numbers];
  let firstNumber = digits[0];
  let secondNumber = digits[1];
  if (secondNumber > firstNumber) {
    [firstNumber, secondNumber] = [secondNumber, firstNumber];
  }
  let gcd;
  for (let i = secondNumber; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      gcd = i;
      break;
    }
  }
  return String(gcd);
};

const createArray = (limit) => {
  const array = [];
  let iteration = 0;
  while (iteration < limit) {
    const numbers = getTwoNumbers();
    const equation = generateEquation(numbers);
    const solution = getGCD(numbers);
    array.push([equation, solution]);
    iteration += 1;
  }
  return array;
};

const gameRounds = 3;
const rules = 'Find the greatest common divisor of the given numbers.';
const array = createArray(gameRounds);

const brainGCD = () => runEngine(rules, array, gameRounds);
export default brainGCD;
