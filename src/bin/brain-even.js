#!/usr/bin/env node
/*eslint-disable */
import * as tallk from '..'; // QUESTION: from '..' ?
/* eslint-enable */

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const name = tallk.sayHello();

const checkEven = (num) => {
  if (num % 2 !== 0) return false;
  return true;
};

const numberOfTry = 3;

const game = (n) => {
  if (n < 1) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const num = Math.floor(Math.random() * 100);
  console.log(`Question: ${num}`);
  const answer = tallk.getAnswer();
  const even = checkEven(num) ? 'yes' : 'no';
  const result = (answer === even) ? 1 : 0;
  if (result < 1) {
    console.log(`${name} '${answer}' is wrong answer ;(. Correct answer was '${even}'.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  /*eslint-disable */
  return game(n - 1); // QUESTION: linter ?
  /* eslint-enable */
};

game(numberOfTry);
