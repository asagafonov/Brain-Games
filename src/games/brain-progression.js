import { generateRandomNumberInRange } from '../utils/utils.js';
import { runEngine, numberOfRounds } from '../index.js';

const generateProgression = (starter, difference, digitsNumber) => {
  const array = [];
  const maximum = starter + (difference * digitsNumber);
  for (let i = starter; i < maximum; i += difference) {
    array.push(i);
  }
  return array;
};

const hideDigit = (arr, digitsNumber) => {
  const array = [...arr];
  const hiddenDigitIndex = generateRandomNumberInRange(0, digitsNumber);
  array[hiddenDigitIndex] = '..';
  return array;
};

const generateGameData = (limit) => {
  const array = [];
  let iteration = 0;
  while (iteration < limit) {
    const pgrsStart = generateRandomNumberInRange(1, 100);
    const pgrsDiff = generateRandomNumberInRange(1, 11);
    const digitsAmount = 10;
    const progression = generateProgression(pgrsStart, pgrsDiff, digitsAmount);
    const hiddenProgression = hideDigit(progression, digitsAmount);
    const hiddenProgressionToString = hiddenProgression.join(' ');
    const correctAnswer = String(progression[hiddenProgression.indexOf('..')]);
    array.push([hiddenProgressionToString, correctAnswer]);
    iteration += 1;
  }
  return array;
};

const description = 'What number is missing in the progression?';
const gameData = generateGameData(numberOfRounds);

const brainProgression = () => runEngine(description, gameData, numberOfRounds);
export default brainProgression;
