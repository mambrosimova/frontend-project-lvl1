import readlineSync from 'readline-sync';
import {runLogic} from '../index.js';
import {getRandomNumber} from '../utils.js';

// получить правильный ответ
const getRightAnswer = (number1, number2)=> {
    const arrayOper = ['+' , '-', '*'];//задание массива операций
    let randomOper= arrayOper[Math.floor(Math.random() * (arrayOper.length))];
    let rightAnswer;
        if (randomOper === '+'){
            rightAnswer=number1+number2;
        }
        if (randomOper === '-'){
            rightAnswer=number1-number2;
        }
        if (randomOper === '*'){
            rightAnswer= number1*number2;
        }
return rightAnswer;

}

//получить мат операцию для вопроса
 const getOper= (rightAnswer, number1, number2) => {
    let oper;
    if (rightAnswer / number2 === number1) {
       oper ='*';
    }
    if (rightAnswer-number2 === number1) {
      oper ='+';
    }
    if (rightAnswer+number2 === number1) {
       oper='-';
    }
return oper;

 }



//нужно сгенерить массив из 3х массивов на 3 раунда [question, rightAnswer]
const getRounds =()=> {
    const rounds=[];//задали пустой массив для 3х раундов
    const n=3;
    for ( let i=1;i<=n; i++) {
    const round=[];// свободный массив для одного раунда [question, rightAnswer]
    let number1= getRandomNumber();
    let number2=getRandomNumber();
    let rightAnswer = getRightAnswer(number1, number2);
    let oper = getOper(rightAnswer, number1, number2);

    const question =(`${number1} ${oper} ${number2}`);// интерполяция вопроса
    
    round[0]=question;
    round[1]=rightAnswer;
    rounds.push(round);
    }
    return rounds;
    
    }


export const calc =()=>{

const discription = 'What is the result of the expression?';
runLogic(discription, getRounds());

}