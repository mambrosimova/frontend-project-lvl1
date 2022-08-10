// файл для записи общей логики всех игр

import readlineSync from 'readline-sync';
// приветствие, имя, приветствие с именем
//
export const greeting= () =>{
    // приветствие
    console.log ("Welcome to the Brain Games!");
    //знакомство
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    return name;
}

//задание рандомого числа от 1-100
export const randomnumber = ()=>{
let a = Math.round(Math.random()*100);
return a;
}  

//задание рандомого числа nго порядка
export const randomnumber2 = (n)=>{//задать n=10 числа от 1-10, задать n=100 от 1-100
    let a = Math.round(Math.random()*n);
    return a;
    }  


//функция получения rightanswer в игре калькулятор
export const getrightanswer= (n,m) => {
const oper = ['+' , '-', '*'];//задание массива операций
let RO = oper[Math.floor(Math.random() * (oper.length))];
let a;
    if (RO === '+'){
        a=n+m;
    }
    if (RO === '-'){
        a=n-m;
    }
    if (RO === '*'){
       a= n*m;
    }
    return a;
}

// функция получения мат операции для вопроса игра Калькулятор
export const randomoper =(a,b,rightanswer) => {
    let result;
     if (rightanswer / b === a) {
        result ='*';
     }
     if (rightanswer-b === a) {
       result ='+';
     }
     if (rightanswer+b === a) {
        result='-';
     }
return result;

}
//функция для определения НОД
export const NOK =(a,b) => {
let min;
let max;
    if( a>b){
        min=b;
        max=a;
    } else { 
        min=a ;
        max=b;
    }
for (let i=min; i>=1; i--) {
    if(max%i===0 && min%i===0) {
        return i;
    }
}
}

export const getprogression =() => {
    let start=randomnumber2(100);//задали начало
    let step=randomnumber2(10);//задали шаг арифметич прогрессии
    const result=[];// создали пустой массив
    let resultlength=Math.floor(Math.random() * (10- 5 + 1)) + 5; //задание рандомной длины массива от 5-10 чисел
 for (let i=0; i<=resultlength-1; i++) {
    result.push(start+i*step);
 }
 return result;// заполнили массив

}

// ф-я , которая возвращает рандомный номер элемента массива
export const randplacearray = (array) =>{
let p = Math.floor(Math.random() * (array.length));
return p;
}

// функция, которая проверяет просто чило или нет /вернет да или нет
export const checkprime=(n) =>{
if (n<2) {
    return 'no';
}
for (let i=2; i<= n/2 ; i++) {
    if (n%i === 0) {
        return 'no';
    }   
}
return 'yes';
}