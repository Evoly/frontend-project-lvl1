import { getRandom, engine } from '..';

const rules = 'What number is missing in the progression?';

const getList = () => {
  const list = [getRandom(1, 50)];
  const step = getRandom(1, 10);
  const hiddenIndex = getRandom(0, 10);
  const listLength = 10;
  for (let i = 0; i < listLength - 1; i += 1) {
    list.push(list[i] + step);
  }
  const answer = list[hiddenIndex];
  list[hiddenIndex] = '..';
  const result = list.join(' ');
  return [result, answer];
};

const game = () => {
  const getListResult = getList();
  const roundQuestion = `${getListResult[0]}`;
  const rightAnswer = getListResult[1];
  return [roundQuestion, rightAnswer.toString()];
};

export default () => engine(rules, game);
