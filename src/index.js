import askForName from './games/ask-for-name.js';

const brainGames = () => {
  const name = askForName;
  const greetUser = `Hello, ${name}!`;
  console.log(greetUser);
};

export default brainGames;
