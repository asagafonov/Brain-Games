import generateRandomNumberInRange from '../utils/generate-random-number.js';
import runEngine from '../index.js';

const randomNumber = () => generateRandomNumberInRange(1, 100);

const isNumberPrime = (num) => {
  if (num < 1) {
    return false;
  }
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

const createArray = (limit) => {
  const array = [];
  let iteration = 0;
  while (iteration < limit) {
    const equation = randomNumber();
    const solution = returnPrimeOrNot(equation);
    array.push([equation, solution]);
    iteration += 1;
  }
  return array;
};

const rules = 'Answer "yes" if the given number is prime. Otherwise answer "no".';
const array = createArray(3);

const brainPrime = () => runEngine(rules, array);
export default brainPrime;
