import readlineSync from 'readline-sync';
import {runLogic} from '../index.js';
import {getRandomNumberNdimemsion,randomPlaceArray} from '../utils.js';

const getProgression =() => {
    let start=getRandomNumberNdimemsion(100);//задали начало
    let step=getRandomNumberNdimemsion(10);//задали шаг арифметич прогрессии
    const result=[];// создали пустой массив
    let resultlength=Math.floor(Math.random() * (10- 5 + 1)) + 5; //задание рандомной длины массива от 5-10 чисел
 for (let i=0; i<=resultlength-1; i++) {
    result.push(start+i*step);
 }
 return result;// заполнили массив

}


const getRounds =()=> {
    const rounds=[];//задали пустой массив для 3х раундов
    const n=3;
    for ( let i=1;i<=n; i++) {
        const round=[];// свободный массив для одного раунда [question, rightAnswer]
        const progression=getProgression();//наша прогрессия в массиве
        let radndomI=randomPlaceArray(progression);
        let rightAnswer=progression[radndomI];//правильный ответ
        const question = progression;
        question[radndomI]='..';//ряд с пропусками
        const stringquestion = question.join(' ');
        round[0]=stringquestion;
        round[1]=rightAnswer;
        //console.log (round);
        //const stringround = round.join(' ');//переводим массив в стороку
        //console.log (stringround);
        rounds.push(round);//собрали раунд
        }//end of cycle 
        return rounds;
        }//end getRounds




export const runProgression = () => {
    const discription= 'What number is missing in the progression?';
    runLogic(discription, getRounds());
}

