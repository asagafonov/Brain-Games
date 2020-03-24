import launchBrainGame from '../index.js';

const generateRandomNumberInRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

const randomNumber = generateRandomNumberInRange(1, 100);

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const equation = randomNumber;
const solution = isEven(equation);

export default brainCalc = launchBrainGame('rules', equation, solution);
