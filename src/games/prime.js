import generateRandomNumberInRange from '../utils/utils.js';
import { runEngine, numberOfRounds } from '../index.js';

const randomNumber = () => generateRandomNumberInRange(1, 100);

const isNumberPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const returnPrimeOrNot = (num) => (isNumberPrime(num) ? 'yes' : 'no');

const generateGameData = (limit) => {
  const data = [];
  for (let i = 0; i < limit; i += 1) {
    const equation = randomNumber();
    const solution = returnPrimeOrNot(equation);
    data.push([equation, solution]);
  }
  return data;
};

const description = 'Answer "yes" if the given number is prime. Otherwise answer "no".';
const gameData = generateGameData(numberOfRounds);

const brainPrime = () => runEngine(description, gameData);
export default brainPrime;
