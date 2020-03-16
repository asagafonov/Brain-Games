import readlineSync from 'readline-sync';

//Functions of general use
const greetUser = console.log(`\nWelcome to the Brain Games!`);
const askForName = readlineSync.question('\nMay I have your name? ');
const sayHello = (name) => console.log(`Hello, ${name}!\n`);

const explainRules = () => {
  console.log(`There are 5 games available in the Brain Games bundle. \nThe rules are simple: answer 3 questions in a row to win.\n\n1. Type "brain-calc" to test your basic math skills\n2. Type "brain-even" to play the odd/even game\n3. Type "brain-gcd" to find the greatest common divisor\n4. Type "brain-progression" to guess the missing number in a progression\n5. Type "brain-prime" to guess whether the given number is prime\n\nHave fun!\n`);
};

const generateRandomNumberInRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

const launchBrainGame = (task, equation, solution) => {
  console.log(task);
  let iteration = 0;
  while (iteration < 3) {
    const userAnswer = readlineSync.question(`Question: ${equation} `);
    if (userAnswer === solution) {
      iteration += 1;
      console.log(`Your answer is ${userAnswer} \nCorrect!`);
      if (iteration === 3) {
        console.log(`Congratulations, ${askForName}! You win!\n`);
      }
    } else {
      console.log(`Your answer is ${userAnswer} \n${userAnswer} is the wrong answer ;(. Correct answer was ${solution} \nLet's try it again, ${askForName}!\n`);
      break;
    }
  }
};

//brain-calc.js

const generateOperator = () => {
  const operatorIndex = () => generateRandomNumberInRange(1, 4);
  const operatorInd = operatorIndex();
  if (operatorInd === 1) {
    return '+';
  } if (operatorInd === 2) {
    return '-';
  }
  return '*';
};

const generateEquation = () => {
  const firstOperand = generateRandomNumberInRange(1, 100);
  const secondOperand = generateRandomNumberInRange(1, 100);
  const operator = generateOperator();
  const equation = `${firstOperand} ${operator} ${secondOperand}`;
  return equation;
};

const solveEquation = (string) => {
  const eqArray = string.split(' ');
  const operator = eqArray[1];
  const firstOperand = Number(eqArray[0]);
  const secondOperand = Number(eqArray[2]);
  if (operator === '+') {
    return firstOperand + secondOperand;
  } if (operator === '-') {
    return firstOperand - secondOperand;
  }
  return firstOperand * secondOperand;
};

//brain-prime.js

const isNumberPrime = (num) => {
  const array = [];
  for (let i = num; i > 0; i -= 1) {
    if (num % i === 0) {
      array.push(i);
    }
  }
  return array.length === 2;
};

const askWhetherIsPrime = () => {
  const randomNumber = generateRandomNumberInRange(1, 100);
  if (isNumberPrime(randomNumber)) {
    if (readlineSync.keyInYN(`Is the number ${randomNumber} prime?`)) {
      console.log('Your answer is "yes" \nCorrect!');
      return true;
    }
    console.log(`Your answer is "no" \n"no" is the wrong answer ;(. Correct answer was "yes" \nLet's try it again, ${askForName}!`);
    return false;
  }
  if (!isNumberPrime(randomNumber)) {
    if (readlineSync.keyInYN(`Is the number ${randomNumber} prime?`)) {
      console.log(`Your answer is "yes" \n"yes" is the wrong answer ;(. Correct answer was "no" \nLet's try it again, ${askForName}!`);
      return false;
    }
    console.log('Your answer is "no" \nCorrect!');
    return true;
  }
  return false;
};

//brain-progression.js

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

//brain-gcd.js

const getTwoNumbers = () => {
  const firstNumber = generateRandomNumberInRange(1, 100);
  const secondNumber = generateRandomNumberInRange(1, 100);
  const result = `${firstNumber} ${secondNumber}`;
  return result;
};

const getAnswer = (string) => {
  const numArray = string.split(' ');
  let firstNumber = Number(numArray[0]);
  let secondNumber = Number(numArray[1]);
  if (secondNumber > firstNumber) {
    [firstNumber, secondNumber] = [secondNumber, firstNumber];
  }
  let result;
  for (let i = secondNumber; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      result = i;
      break;
    }
  }
  return result;
};

//brain-even.js

const askWhetherIsEven = () => {
  const randomNumber = generateRandomNumberInRange(1, 100);
  if (randomNumber % 2 === 0) {
    if (readlineSync.keyInYN(`Question: is ${randomNumber} even?`)) {
      console.log('Your answer is "yes" \nCorrect!');
      return true;
    }
    console.log(`Your answer is "no" \n"no" is the wrong answer ;(. Correct answer was "yes" \nLet's try it again, ${askForName}!`);
    return false;
  }
  if (randomNumber % 2 !== 0) {
    if (readlineSync.keyInYN(`Question: is ${randomNumber} even?`)) {
      console.log(`Your answer is "yes" \n"yes" is the wrong answer ;(. Correct answer was "no" \nLet's try it again, ${askForName}!`);
      return false;
    }
    console.log('Your answer is "no" \nCorrect!');
    return true;
  }
  return false;
};

export {greetUser, askForName, sayHello, explainRules, generateRandomNumberInRange, launchBrainGame, generateOperator, generateEquation, solveEquation, isNumberPrime, askWhetherIsPrime, generateProgressionOfTen, hideDigit, getTwoNumbers, getAnswer, askWhetherIsEven};
