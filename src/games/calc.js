import readlineSync from 'readline-sync';
import {runLogic} from '../index.js';
import {getRandomNumber} from '../utils.js';


export const calc =()=>{

const discription = 'What is the result of the expression?';

//нужно сгенерить массив из 3х массивов на 3 раунда [question, rightAnswer]
const getRounds =()=> {
const rounds=[];//задали пустой массив для 3х раундов
const n=3;
for ( let i=1;i<n; i++) {
const round=[];// свободный массив для одного раунда [question, rightAnswer]
let number1= getRandomNumber();
let number2=getRandomNumber();

//ищем правильный ответ
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


//получения мат операции для вопроса игра Калькулятор
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
const question =(`${number1} ${oper} ${number2}`);// интерполяция вопроса

round[0]=question;
round[1]=rightAnswer;
rounds.push(round);
}
return rounds;

}

runLogic(discription, getRounds());

}//end of calc

//export const calc =() => {

//запустили функцию приветствия
//let name=greeting(); 

// вопрос игры 
//console.log ( 'What is the result of the expression?');



//let n=2; // 
//for (let i=0; i<=n ; i++) {
// получить вопрос и ответ правильный ( 2 перемнных)
//let RN1= getRandomNumber();
//let RN2=getRandomNumber();
//let rightanswer=getrightanswer(RN1, RN2);
//let RO=randomoper(RN1,RN2,rightanswer);
//console.log (RN1, RN2,rightanswer,RO);

//задать вопрос и получить ответ игрока
//console.log('Question'+':'+ RN1 + RO + RN2);
//const answer = readlineSync.question('Your answer ' +':');

//сравнение ответов
//if (rightanswer !== answer) {
  //  console.log (answer +' is wrong answer ;(. Correct answer was ' + rightanswer);
//console.log ('Let us try again,' + name+'!');
//return;
//} 
//console. log ( 'Correct!');

//}// конец цикла 

//console.log ('Congratulations,'+ name+ '!');


//}// конец основной функции calc



///rounds=[[question, answer][question, answer][question, answer]]
//generateRound