import readlineSync from 'readline-sync';

const greetUser = console.log('\nWelcome to the Brain Games!');
const askForName = readlineSync.question('May I have your name? ');
const sayHello = (name) => console.log(`Hello, ${name}!`);

const explainRules = () => {
  console.log('There are 5 games available in the Brain Games bundle. \nThe rules are simple: answer 3 questions in a row to win.\n\n1. Type "brain-calc" to test your basic math skills\n2. Type "brain-even" to play the odd/even game\n3. Type "brain-gcd" to find the greatest common divisor\n4. Type "brain-progression" to guess the missing number in a progression\n5. Type "brain-prime" to guess whether the given number is prime\n\nHave fun!\n');
};

const launchBrainGame = (rules, equation = generateEquation(), solution = findSolution(equation)) => {
  console.log(rules);
  let iteration = 0;
  while (iteration < 3) {
    const userAnswer = readlineSync.question(`Question: ${equation} `);
    if (userAnswer === solution) {
      iteration += 1;
      console.log(`Your answer is ${userAnswer} \nCorrect!`);
      equation = generateEquation();
      solution = findSolution(equation);
      if (iteration === 3) {
        console.log(`Congratulations, ${askForName}! You win!\n`);
      }
    } else {
      console.log(`Your answer is ${userAnswer} \n${userAnswer} is the wrong answer ;(. Correct answer was ${solution} \nLet's try it again, ${askForName}!\n`);
      break;
    }
  }
};
