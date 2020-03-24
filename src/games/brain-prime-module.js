import launchBrainGame from '../index.js';

const generateRandomNumberInRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

const randomNumber = generateRandomNumberInRange(1, 100);

const isNumberPrime = (num) => {
  const array = [];
  for (let i = num; i > 0; i -= 1) {
    if (num % i === 0) {
      array.push(i);
    }
  }
  return array.length === 2;
};

const returnPrimeOrNot = (num) => {
  const equation = num;
  if (isNumberPrime(equation)) {
    return 'yes';
  }
  return 'no';
};

const equation = randomNumber;
const solution = returnPrimeOrNot(equation);

export default brainCalc = launchBrainGame('rules', equation, solution);
