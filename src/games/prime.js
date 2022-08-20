import readlineSync from 'readline-sync';
import {runLogic} from '../index.js';
import {getRandomNumberNdimemsion} from '../utils.js';

// функция, которая проверяет просто чило или нет /вернет да или нет
 const checkPrime=(number) =>{
    if (number<2) {
        return 'no';
    }
    for (let i=2; i<= number/2 ; i++) {
        if (number%i === 0) {
            return 'no';
        }   
    }
    return 'yes';
    }


const getRounds =()=> {
    const rounds=[];//задали пустой массив для 3х раундов
    const n=3;
    for ( let i=1;i<=n; i++) {
        const round=[];// свободный массив для одного раунда [question, rightAnswer]
        let number= getRandomNumberNdimemsion(100);
        let rightAnswer=checkPrime(number);// получили правильный ответ
        const question = number;
       
        round[0]=question;
        round[1]=rightAnswer;
        rounds.push(round);
        }//end of cycle 
        return rounds;
        }//end getRounds


export const runPrime = () => {
    const discription='Answer "yes" if given number is prime. Otherwise answer "no".';
    runLogic(discription, getRounds());

}