#!/usr/bin/env node
import readlineSync from 'readline-sync';
// const readlineSync = require('readline-sync');

export const sayHello = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  return name;
};

export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
