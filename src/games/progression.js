import { getRandom, engine } from '..';

const rules = 'What number is missing in the progression?';

const getList = () => {
  const list = [getRandom(1, 50)];
  const step = getRandom(1, 10);
  const listLength = 10;
  for (let i = 0; i < listLength - 1; i += 1) {
    list.push(list[i] + step);
  }
  return list;
};

const game = () => {
  const list = getList();
  const hiddenIndex = getRandom(0, 9);
  const rightAnswer = list[hiddenIndex];
  list[hiddenIndex] = '..';
  const roundQuestion = list.join(' ');

  return [roundQuestion, rightAnswer.toString()];
};

export default () => engine(rules, game);
