import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const runEngine = (description, generateData) => {
  console.log();
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const data = generateData(numberOfRounds);
  for (let i = 0; i < data.length; i += 1) {
    const [equation, solution] = data[i];
    const userAnswer = readlineSync.question(`Question: ${equation} `);
    if (userAnswer === solution) {
      console.log(`Your answer is "${userAnswer}"`);
      console.log('Correct!');
    } else {
      console.log(`Your answer is "${userAnswer}"`);
      console.log(`"${userAnswer}" is the wrong answer ;(. Correct answer was "${solution}"`);
      console.log(`Let's try it again, ${userName}!`);
      console.log();
      return;
    }
  }
  console.log(`Congratulations, ${userName}! You win!`);
  console.log();
};

export default runEngine;
