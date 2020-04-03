import { generateRandomNumberInRange } from '../utils/utils.js';
import runEngine from '../index.js';

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

const returnPrimeOrNot = (num) => {
  const equation = num;
  if (isNumberPrime(equation)) {
    return 'yes';
  }
  return 'no';
};

const createArray = (limit) => {
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

const gameRounds = 3;
const description = 'Answer "yes" if the given number is prime. Otherwise answer "no".';
const gameData = createArray(gameRounds);

const brainPrime = () => runEngine(description, gameData, gameRounds);
export default brainPrime;
