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

/*

const progression = generateProgressionOfTen();
const hiddenProgression = hideDigit(progression);
const hiddenProgressionToString = hiddenProgression.join(' ');
const userAnswer = readlineSync.question(`Question: ${hiddenProgressionToString} `);
const correctAnswer = progression[hiddenProgression.indexOf('..')];

*/
