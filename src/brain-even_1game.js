import readlineSync from 'readline-sync';
// приветствие

export  const even= () =>{
    // приветствие
    console.log ("Welcome to the Brain Games!");
    //знакомство
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    //правила игры
    console.log ('Answer "yes" if the number is even, otherwise answer "no".');

    //цикл игры:    
    // получить вопрос и ответ правильный ( 2 перемнных)
    //задать вопрос и получить ответ игрока
    //сравнение ответов 
    let n=2;//кол-во попыток 3
    for (let i=0; i<=n ; i++) {
        let RN = Math.round(Math.random()*100);// задание рандомного числа -вопрос получили
        const rightanswer = (RN)=>{// функция возвращает да или нет
            if ( RN % 2 === 0) {
                return 'yes';
            } 
            if ( RN % 2 !== 0) {
                return 'no';
            }
        }
        console.log(rightanswer(RN));
        //задали вопрос и получили ответ на него
        console.log('Question'+':'+RN);
        const answer = readlineSync.question('Your answer ' +':');
        //сравнение ответов
         
        const check = (rightanswer, answer) =>{
            if (rightanswer = answer) {
                 console. log ( 'Correct!');
            } else {
                console. log (answer +' is wrong answer ;(. Correct answer was');
            }

        }
        check(rightanswer, answer);

    }//end cycle 

console.log ('Congratulations,'+ name + '!');

}// end main function



//задание рандомного числа
export let RN = Math.round(Math.random()*100);

//задание вопрос с рандомным числом и ответом да или нет
export const RandomQuestion= (RN) => {
    console.log('Question'+':'+RN);
    const answer = readlineSync.question('Your answer ' +':');
    }

//export const Rquestion === answer ;

// пишу функцию check, которая должна сравнивать ответ и RN и говорить, правда или нет.
//export const check = (RN, Rquestion) =>{
    //let n=2;// кол-во попыток
   // for (let i=0 ; i <=n; i++) {
    //if (RN % 2 == 0 && Rquestion ==='yes' || RN % 2 !== 0 && Rquestion ==='no') {
        //console.log('Correct!');
        //let RN = Math.round(Math.random()*100);

      // else{
           // let opposite;
               // if (RandomQuestion === 'yes'){
                //opposite === 'no';
                //} else {
                //opposite ==='yes';
                
    //console.log (RandomQuestion +'is wrong answer ;(. Correct answer was'+opposite);
    //break ;
    //}

//end cycle
//console.log ('Congratulations,'+ name + '!');
//}//end check function
//приветствие
//знакомство
//описаниеигры 
//игровой цикл 
    //получить вопрос и ответ правильный ( 2 перемнных)
    //задать вопрос и получить ответ игрока
    //сравнение ответов 
    
