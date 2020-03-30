import generateRandomNumberInRange from '../utils/generate-random-number.js';
import runEngine from '../index.js';

const randomNumber = () => generateRandomNumberInRange(1, 100);

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const returnEvenOrNot = (num) => {
  if (isEven(num)) {
    return 'yes';
  }
  return 'no';
};

const createArray = (limit) => {
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

const rules = 'Answer "yes" if the given number is even, otherwise answer "no".';
const array = createArray(3);

const brainEven = () => runEngine(rules, array);
export default brainEven;
