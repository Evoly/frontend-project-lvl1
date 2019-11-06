import * as common from '..';

const divisor = (a, b) => {
  if (a === b) return a;
  if (a === 0 || b === 0) return (a + b);
  const c = (a > b) ? b : a;
  const d = (a > b) ? (a % b) : (b % a);
  return divisor(c, d);
};

const game = (n) => {
  if (n < 1) {
    common.endGame();
    return;
  }
  const numOne = common.getRandom(1, 50);
  const numTwo = common.getRandom(1, 50);
  const question = `Question: ${numOne} ${numTwo}`;
  console.log(question);
  const answer = parseInt(common.getAnswer(), 10);
  const div = divisor(numOne, numTwo);
  const result = (answer === div) ? 1 : 0;
  if (result < 1) {
    common.wrongAnswer(answer, div);
    return;
  }
  common.rightAnswer();
  /*eslint-disable */
  return game(n - 1); // QUESTION: linter ?
  /* eslint-enable */
};

const startGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.\n';
  common.sayHello(rules);
  game(common.numberOfTry);
};

export default startGame;
