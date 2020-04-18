#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log();
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('There are 5 games available in the Brain Games bundle.');
console.log('The rules are simple: answer 3 questions in a row to win.');
console.log('1. Type "brain-calc" to test your basic math skills.');
console.log('2. Type "brain-even" to play the odd/even game.');
console.log('3. Type "brain-gcd" to find the greatest common divisor.');
console.log('4. Type "brain-progression" to guess the missing number in a progression.');
console.log('5. Type "brain-prime" to guess whether the given number is prime.');
console.log(`Have fun, ${userName}!`);
console.log();
