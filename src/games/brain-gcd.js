import { getTwoNumbers } from '../utils/utils.js';
import runEngine from '../index.js';

const generateEquation = (numbers) => {
  const digits = [...numbers];
  return `${digits[0]} ${digits[1]}`;
};

const getGCD = (numbers) => {
  const digits = [...numbers];
  let [firstNumber, secondNumber] = digits;
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
  return gcd;
};

const createArray = (limit) => {
  const array = [];
  let iteration = 0;
  while (iteration < limit) {
    const numbers = getTwoNumbers();
    const equation = generateEquation(numbers);
    const solution = String(getGCD(numbers));
    array.push([equation, solution]);
    iteration += 1;
  }
  return array;
};

const gameRounds = 3;
const description = 'Find the greatest common divisor of the given numbers.';
const gameData = createArray(gameRounds);

const brainGCD = () => runEngine(description, gameData, gameRounds);
export default brainGCD;
