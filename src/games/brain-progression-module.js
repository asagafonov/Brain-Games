import runEngine from '../index.js';

const generateRandomNumberInRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

const generateProgressionOfTen = () => {
  const array = [];
  const starter = generateRandomNumberInRange(1, 100);
  const difference = generateRandomNumberInRange(1, 11);
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
    const progression = generateProgressionOfTen();
    const hiddenProgression = hideDigit(progression);
    const hiddenProgressionToString = hiddenProgression.join(' ');
    const correctAnswer = String(progression[hiddenProgression.indexOf('..')]);
    array.push([hiddenProgressionToString, correctAnswer]);
    iteration += 1;
  }
  return array;
};

const rules = 'What number is missing in the progression?'
const array = createArray(3);

const brainProgression = runEngine(rules, array);
export default brainProgression;
