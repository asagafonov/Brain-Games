import readlineSync from 'readline-sync';

const greetUser = () => readlineSync.question('May I have your name? ');
const explainRules = () => console.log('There are 5 games available in the Brain Games bundle. \nThe rules are simple: answer 3 questions in a row to win.\n\n1. Type "brain-calc" to test your basic math skills\n2. Type "brain-even" to play the odd/even game\n3. Type "brain-gcd" to find the greatest common divisor\n4. Type "brain-progression" to guess the missing number in a progression\n5. Type "brain-prime" to guess whether the given number is prime\n\nHave fun!\n');

const generateRandomNumberInRange = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

const getTwoNumbers = () => {
  const result = [];
  const firstNumber = generateRandomNumberInRange(1, 100);
  const secondNumber = generateRandomNumberInRange(1, 100);
  result.push(firstNumber, secondNumber);
  return result;
};

export {
  greetUser,
  explainRules,
  getTwoNumbers,
  generateRandomNumberInRange,
};
