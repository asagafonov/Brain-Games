import generateRandomNumberInRange from '../utils/utils.js';
import { runEngine, numberOfRounds } from '../index.js';

const sayEvenOrNot = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateGameData = (limit) => {
  const data = [];
  for (let i = 0; i < limit; i += 1) {
    const question = generateRandomNumberInRange(1, 100);
    const answer = sayEvenOrNot(question);
    data.push([question, answer]);
  }
  return data;
};

const description = 'Answer "yes" if the given number is even, otherwise answer "no".';
const gameData = generateGameData(numberOfRounds);

const brainEven = () => runEngine(description, gameData);
export default brainEven;
