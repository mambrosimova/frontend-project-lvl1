import readlineSync from 'readline-sync';
import {runLogic} from '../index.js';
import {getRandomNumber} from '../utils.js';

const check = (question) =>{
    let rightAnswer;
        // функция возвращает да или нет
            if ( question % 2 === 0) {
                rightAnswer = 'yes';
            } 
            if ( question % 2 !== 0) {
                rightAnswer = 'no';
            }
return rightAnswer;
}



// функция получения массива раундов      
const getRounds =()=> {
    const rounds=[];//задали пустой массив для 3х раундов
    const n=3;
    for ( let i=1;i<=n; i++) {
    const round=[];// свободный массив для одного раунда [question, rightAnswer]
    let question=getRandomNumber(); //задание рандомного числа -вопрос получили
    let rightAnswer= check (question);
    round[0]=question;
    round[1]=rightAnswer;
    rounds.push(round);
    }
    return rounds;
}



export  const runEven= () =>{
    const discription='Answer "yes" if the number is even, otherwise answer "no".';
    runLogic(discription, getRounds());
}

  