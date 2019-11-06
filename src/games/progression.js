import * as common from '..';

const getList = () => {
  const list = [common.getRandom(1, 50)];
  const step = common.getRandom(1, 10);
  const hiddenIndex = common.getRandom(0, 10);
  const listLength = 10;
  for (let i = 0; i < listLength - 1; i += 1) {
    list.push(list[i] + step);
  }
  const answer = list[hiddenIndex];
  list[hiddenIndex] = '..';
  const result = list.join(' ');
  return [result, answer];
};

const game = (n) => {
  if (n < 1) {
    common.endGame();
    return;
  }
  const getListResult = getList();
  const question = `Question: ${getListResult[0]}`;
  console.log(question);
  const answer = parseInt(common.getAnswer(), 10);
  const hiddenNumber = getListResult[1];
  const result = (answer === hiddenNumber) ? 1 : 0;
  if (result < 1) {
    common.wrongAnswer(answer, hiddenNumber);
    return;
  }
  common.rightAnswer();
  /*eslint-disable */
  return game(n - 1); // QUESTION: linter ?
  /* eslint-enable */
};

const startGame = () => {
  const rules = 'What number is missing in the progression?\n';
  common.sayHello(rules);
  game(common.numberOfTry);
};

export default startGame;
