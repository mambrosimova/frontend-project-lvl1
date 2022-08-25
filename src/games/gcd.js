import readlineSync from 'readline-sync';
import {runLogic} from '../index.js';
import {getRandomNumber} from '../utils.js';

//функция для определения НОД
const calcGCD =(number1,number2) => {
         let min;
        let max;
        if( number1>number2){
             min=number2;
            max=number1;
        } else { 
                min=number1 ;
                max=number2;
                }
        for (let GCD=min; GCD>=1; GCD--) {
                if(max%GCD===0 && min%GCD===0) {
                 return GCD;
                     }
            }
        }

// функция получения массива раундов      
const getRounds =()=> {
        const rounds=[];//задали пустой массив для 3х раундов
        const n=3;
        for ( let i=1;i<=n; i++) {
        const round=[];// свободный массив для одного раунда [question, rightAnswer]
        let number1= getRandomNumber();
        let number2=getRandomNumber();
    
    
        let rightAnswer=calcGCD(number1, number2);// правильный ответ
        const question=(`${number1} ${number2}`);// ответ 
                
        round[0]=question;
        round[1]=rightAnswer;
        rounds.push(round);
        }//end of cycle 
        return rounds;
        }//end getRounds


export const getGreatestCommonDevision = () => {

    const discription='Find the greatest common divisor of given numbers';
    runLogic(discription, getRounds());
}