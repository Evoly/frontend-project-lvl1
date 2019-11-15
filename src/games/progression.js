import { getRandom, makeGame } from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;
const start = getRandom(1, 50);
const step = getRandom(1, 10);

const makeProgression = () => {
  const progression = [start];
  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
};

const generateRound = () => {
  const progression = makeProgression();
  const hiddenIndex = getRandom(0, (progressionLength - 1));
  const rightAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const roundQuestion = progression.join(' ');

  return [roundQuestion, rightAnswer.toString()];
};

export default () => makeGame(gameDescription, generateRound);
