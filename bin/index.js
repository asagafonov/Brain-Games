import readlineSync from 'readline-sync';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  const askForName = readlineSync.question('May I have your name? ');
  const greetUser = `Hello, ${askForName}!`;
  console.log(greetUser);
};

export default brainGames;
