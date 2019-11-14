import { getRandom, makeGame } from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const roundQuestion = getRandom(1, 50);
  const rightAnswer = isPrime(roundQuestion) ? 'yes' : 'no';
  return [roundQuestion, rightAnswer];
};

export default () => makeGame(gameDescription, generateRound);
