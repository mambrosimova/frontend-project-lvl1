#!/usr/bin/env node

//console.log ("Welcome to the Brain Games!");

import {Greating} from '../src/cli.js';
import {RN,RandomQuestion, check} from '../src/brain-even_1game.js';

console.log (Greating());
console.log ('Answer "yes" if the number is even, otherwise answer "no".');
//console.log (RandomQuestion(RN));

console.log(check(RN,RandomQuestion));


//console.log('Your answer ' +':'+ RandomNumberQuestion );
//check(RN, RandomNumberQuestion);

