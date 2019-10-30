#!/usr/bin/env node
import readlineSync from 'readline-sync';
// const readlineSync = require('readline-sync');

const sayHello = () => {
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello ${actual}!`);
};

export default sayHello;
