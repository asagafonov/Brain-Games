import readlineSync from 'readline-sync';

const greetUser = () => readlineSync.question('May I have your name? ');

export default greetUser;
