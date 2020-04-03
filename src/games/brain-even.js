import { generateRandomNumberInRange } from '../utils/utils.js';
import { runEngine, numberOfRounds } from '../index.js';

const randomNumber = () => generateRandomNumberInRange(1, 100);

const isEven = (num) => num % 2 === 0;

const returnEvenOrNot = (num) => (isEven(num) ? 'yes' : 'no');

const generateGameData = (limit) => {
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

const description = 'Answer "yes" if the given number is even, otherwise answer "no".';
const gameData = generateGameData(numberOfRounds);

const brainEven = () => runEngine(description, gameData, numberOfRounds);
export default brainEven;
