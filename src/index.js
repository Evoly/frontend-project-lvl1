import readlineSync from 'readline-sync';

const roundsCount = 3;

export const makeGame = (gameDescription, generateRound) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);
  const name = readlineSync.question('\nMay I have your name? ', { defaultInput: 'Stranger' });
  console.log(`Hello, ${name}!\n`);

  const iter = (n) => {
    if (n < 1) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const [roundQuestion, correctAnswer] = generateRound();
    //  console.log('roundQuestion', roundQuestion, 'correctAnswer', correctAnswer);
    console.log(`Question: ${roundQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      iter(n - 1);
    } else {
      console.log(`${name} '${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  return iter(roundsCount);
};

export const getRandom = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);
