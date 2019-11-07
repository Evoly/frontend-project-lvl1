import readlineSync from 'readline-sync';

let name = '';
const numberOfTry = 3;

export const sayHello = (rules) => {
  console.log('\nWelcome to the Brain Games!');
  if (rules) {
    console.log(rules);
  }
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const checkAnswer = (correctAnswer) => {
  const userAnswer = readlineSync.question('Your answer: ');
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${name} '${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export const engine = (rules, game) => {
  sayHello(rules);

  const iter = (n) => {
    if (n < 1) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const correctAnswer = game();
    const answer = checkAnswer(correctAnswer);
    if (answer) {
      iter(n - 1);
    }
  };
  return iter(numberOfTry);
};

export const getRandom = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);
