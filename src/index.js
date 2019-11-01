#!/usr/bin/env node
import readlineSync from 'readline-sync';

let name = '';

export const sayHello = (rules) => {
  console.log('Welcome to the Brain Games!');
  if (rules) {
    console.log(rules);
  }
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const endGame = () => {
  console.log(`Congratulations, ${name}!`);
};

export const rightAnswer = () => {
  console.log('Correct!');
};

export const wrongAnswer = (userAnswer, correctAnswer) => {
  console.log(`${name} '${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

export const numberOfTry = 3;

export const getRandom = () => (Math.floor(Math.random() * 50) + 1);
