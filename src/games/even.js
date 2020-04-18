import generateRandomNumberInRange from '../utils/utils.js';
import runEngine from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateGameData = (limit) => {
  const data = [];
  for (let i = 0; i < limit; i += 1) {
    const question = generateRandomNumberInRange(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    data.push([question, answer]);
  }
  return data;
};

const description = 'Answer "yes" if the given number is even, otherwise answer "no".';

const brainEven = () => runEngine(description, generateGameData);
export default brainEven;
