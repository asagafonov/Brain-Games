import readlineSync from 'readline-sync';

/* Functions of general use */
const greetUser = console.log('\nWelcome to the Brain Games!');
const askForName = readlineSync.question('May I have your name? ');
const sayHello = (name) => console.log(`Hello, ${name}!`);

const explainRules = () => {
  console.log('There are 5 games available in the Brain Games bundle. \nThe rules are simple: answer 3 questions in a row to win.\n\n1. Type "brain-calc" to test your basic math skills\n2. Type "brain-even" to play the odd/even game\n3. Type "brain-gcd" to find the greatest common divisor\n4. Type "brain-progression" to guess the missing number in a progression\n5. Type "brain-prime" to guess whether the given number is prime\n\nHave fun!\n');
};

const generateRandomNumberInRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};


/* brain-calc.js */

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

const generateRandomEquation = () => {
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
    return String(firstOperand + secondOperand);
  } if (operator === '-') {
    return String(firstOperand - secondOperand);
  }
  return String(firstOperand * secondOperand);
};

/* brain-prime.js */

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

/* brain-progression.js */

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


/* brain-gcd.js */

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
  return String(result);
};

/* brain-even.js */

const generateNumber = () => generateRandomNumberInRange(1, 100);

const isEven = (eq) => {
  const equation = eq;
  if (equation % 2 === 0) {
    return 'yes';
  }
  return 'no';
};


/* exports */


export {
  greetUser,
  askForName,
  sayHello,
  explainRules,
  generateRandomNumberInRange,
  generateOperator,
  generateRandomEquation,
  solveEquation,
  isNumberPrime,
  returnPrimeOrNot,
  generateProgressionOfTen,
  hideDigit,
  getTwoNumbers,
  getAnswer,
  isEven,
  generateNumber,
};
