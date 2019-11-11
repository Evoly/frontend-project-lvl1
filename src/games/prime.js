import { getRandom, engine } from '..';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const game = () => {
  const roundQuestion = getRandom(40000, 500000);
  const rightAnswer = isPrime(roundQuestion) ? 'yes' : 'no';
  return [roundQuestion, rightAnswer];
};

export default () => engine(rules, game);
