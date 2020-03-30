import generateRandomNumberInRange from '../utils/generate-random-number.js';
import { runEngine } from '../index.js';

const generateProgressionOfTen = (starter, difference) => {
  const array = [];
  const maximum = starter + (difference * 10);
  for (let i = starter; i < maximum; i += difference) {
    array.push(i);
  }
  return array;
};

const hideDigit = (arr) => {
  const array = [...arr];
  const hiddenDigitIndex = generateRandomNumberInRange(0, 10);
  array[hiddenDigitIndex] = '..';
  return array;
};

const createArray = (limit) => {
  const array = [];
  let iteration = 0;
  while (iteration < limit) {
    const progressionStarter = generateRandomNumberInRange(1, 100);
    const progressionDifference = generateRandomNumberInRange(1, 11);
    const progression = generateProgressionOfTen(progressionStarter, progressionDifference);
    const hiddenProgression = hideDigit(progression);
    const hiddenProgressionToString = hiddenProgression.join(' ');
    const correctAnswer = String(progression[hiddenProgression.indexOf('..')]);
    array.push([hiddenProgressionToString, correctAnswer]);
    iteration += 1;
  }
  return array;
};

const rules = 'What number is missing in the progression?';
const array = createArray(3);

const brainProgression = () => runEngine(rules, array);
export default brainProgression;
