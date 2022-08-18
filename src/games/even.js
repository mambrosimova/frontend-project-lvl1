import readlineSync from 'readline-sync';
// приветствие

export  const runEven= () =>{
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
        let rightanswer;
        let wronganswer;
        // функция возвращает да или нет
            if ( RN % 2 === 0) {
                rightanswer = 'yes';
                wronganswer ='no';
            } 
            if ( RN % 2 !== 0) {
                rightanswer = 'no';
                wronganswer ='yes';
            }
        //console.log (rightanswer);
        //console.log (wronganswer);

        //задали вопрос и получили ответ на него
        console.log('Question'+':'+RN);
        const answer = readlineSync.question('Your answer ' +':');
        //сравнение ответов
         
            if (rightanswer === answer) {
                 console. log ( 'Correct!');
            } else {
                console. log (answer +' is wrong answer ;(. Correct answer was ' + rightanswer);
                return;
            }

    

    }//end cycle 

console.log ('Congratulations,'+ name + '!');

}// end main function




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
    
