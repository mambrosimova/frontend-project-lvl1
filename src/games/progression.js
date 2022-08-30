import runLogic from '../index.js';
import { getRandomNumberNdimemsion, randomPlaceArray } from '../utils.js';

const getProgression = () => {
  const start = getRandomNumberNdimemsion(100);// задали начало
  const step = getRandomNumberNdimemsion(10);// задали шаг арифметич прогрессии
  const result = [];// создали пустой массив
  // задание рандомной длины массива от 5-10 чисел
  const resultlength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  for (let i = 0; i <= resultlength - 1; i += 1) {
    result.push(start + i * step);
  }
  return result;// заполнили массив
};

const getRounds = () => {
  const rounds = [];// задали пустой массив для 3х раундов
  const n = 3;
  for (let i = 1; i <= n; i += 1) {
    const round = [];// свободный массив для одного раунда [question, rightAnswer]
    const progression = getProgression();// наша прогрессия в массиве
    const radndomI = randomPlaceArray(progression);
    const rightAnswer = progression[radndomI];// правильный ответ
    const stringrightAnswer = String(rightAnswer);
    const question = progression;
    question[radndomI] = '..';// ряд с пропусками
    const stringquestion = question.join(' ');
    round[0] = stringquestion;
    round[1] = stringrightAnswer;
    // console.log (round);
    // const stringround = round.join(' ');//переводим массив в стороку
    // console.log (stringround);
    rounds.push(round);// собрали раунд
  }// end of cycle
  return rounds;
};// end getRounds

const runProgression = () => {
  const discription = 'What number is missing in the progression?';
  runLogic(discription, getRounds());
};
export default runProgression;
