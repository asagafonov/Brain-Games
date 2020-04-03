import { generateRandomNumberInRange } from '../utils/utils.js';
import { runEngine, numberOfRounds } from '../index.js';

const getGCD = (num1, num2) => {
  let firstNumber = num1;
  let secondNumber = num2;
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

const generateGameData = (limit) => {
  const array = [];
  let iteration = 0;
  while (iteration < limit) {
    const firstNumber = generateRandomNumberInRange(1, 100);
    const secondNumber = generateRandomNumberInRange(1, 100);
    const equation = `${firstNumber} ${secondNumber}`;
    const solution = String(getGCD(firstNumber, secondNumber));
    array.push([equation, solution]);
    iteration += 1;
  }
  return array;
};

const description = 'Find the greatest common divisor of the given numbers.';
const gameData = generateGameData(numberOfRounds);

const brainGCD = () => runEngine(description, gameData, numberOfRounds);
export default brainGCD;
