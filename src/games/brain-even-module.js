import runEngine from '../index.js';

const generateRandomNumberInRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

const randomNumber = () => generateRandomNumberInRange(1, 100);

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const createArray = (limit) => {
  const array = [];
  let iteration = 0;
  while (iteration < limit) {
    let equation = randomNumber();
    let solution = isEven(equation);
    array.push([equation, solution]);
    iteration += 1;
  }
  return array;
};

const rules = 'Answer "yes" if the given number is even, otherwise answer "no".'
const array = createArray(3);

const brainEven = runEngine(rules, array);
export default brainEven;
