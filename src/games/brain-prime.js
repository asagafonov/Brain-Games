import generateRandomNumberInRange from '../utils/utils.js';
import { runEngine, numberOfRounds } from '../index.js';

const randomNumber = () => generateRandomNumberInRange(1, 100);

const isNumberPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const returnPrimeOrNot = (num) => (isNumberPrime(num) ? 'yes' : 'no');

const generateGameData = (limit) => {
  const array = [];
  let iteration = 0;
  while (iteration < limit) {
    const equation = randomNumber();
    const solution = returnPrimeOrNot(equation);
    array.push([equation, solution]);
    iteration += 1;
  }
  return array;
};

const description = 'Answer "yes" if the given number is prime. Otherwise answer "no".';
const gameData = generateGameData(numberOfRounds);

const brainPrime = () => runEngine(description, gameData, numberOfRounds);
export default brainPrime;
