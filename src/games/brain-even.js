import { generateRandomNumberInRange } from '../utils/utils.js';
import runEngine from '../index.js';

const randomNumber = () => generateRandomNumberInRange(1, 100);

const isEven = (num) => {
  return num % 2 === 0;
};

const returnEvenOrNot = (num) => {
  return isEven(num) ? 'yes' : 'no';
};

const createArray = (limit) => {
  const array = [];
  let iteration = 0;
  while (iteration < limit) {
    const equation = randomNumber();
    const solution = returnEvenOrNot(equation);
    array.push([equation, solution]);
    iteration += 1;
  }
  return array;
};

const gameRounds = 3;
const description = 'Answer "yes" if the given number is even, otherwise answer "no".';
const gameData = createArray(gameRounds);

const brainEven = () => runEngine(description, gameData, gameRounds);
export default brainEven;
