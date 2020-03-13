import readlineSync from 'readline-sync';
import askForName from './ask-for-name.js';

const generateRandomNumberInRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

const isNumberPrime = (num) => {
  const array = [];
  for (let i = num; i > 0; i -= 1) {
    if (num % i === 0) {
      array.push(i);
    }
  }
  return array.length === 2;
}

const askWhetherIsPrime = () => {
  const randomNumber = generateRandomNumberInRange(1, 100);
  if (isNumberPrime(randomNumber)) {
    if (readlineSync.keyInYN(`Is the number ${randomNumber} prime?`)) {
      console.log('Your answer is "yes" \nCorrect!');
      return true;
    }
    console.log(`Your answer is "no" \n"no" is the wrong answer ;(. Correct answer was "yes" \nLet's try it again, ${askForName}!`);
    return false;
  } else {
    if (readlineSync.keyInYN(`Is the number ${randomNumber} prime?`)) {
      console.log(`Your answer is "yes" \n"yes" is the wrong answer ;(. Correct answer was "no" \nLet's try it again, ${askForName}!`);
      return false;
    }
    console.log('Your answer is "no" \nCorrect!');
    return true;
  }
  return false;
};


const brainPrime = () => {
  console.log('Answer "yes" if the given number is prime. Otherwise answer "no".');
  let iteration = 0;
  while (iteration < 3) {
    const question = askWhetherIsPrime();
    if (question === true) {
      iteration += 1;
      if (iteration === 3) {
        console.log(`Congratulations, ${askForName}! You win!`);
      }
    } else if (question === false) {
      break;
    }
  }
};

export default brainPrime;
