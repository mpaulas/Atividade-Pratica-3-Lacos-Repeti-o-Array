import * as readlineSync from 'readline-sync';

let menores21: number = 0;
let maiores50: number = 0;

while(true){
    let idade: number = parseInt(readlineSync.question(`Digite uma idade: `));

    if(idade < 0){
        break;
    }
    if(idade < 21){
        menores21++;
    }
    if(idade > 50){
        maiores50++;
    }
}

console.log(`Total pessoas menores de 21 anos: ${menores21}`);
console.log(`Total pessoas maiores de 50 anos: ${maiores50}`);
