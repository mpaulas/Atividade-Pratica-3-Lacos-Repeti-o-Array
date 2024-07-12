import * as readlineSync from 'readline-sync';

let pares: number = 0;
let impares: number = 0;

for(let i = 1; i < 11; i++){
    let numero: number = parseInt(readlineSync.question(`Digite o ${i}º numero: `));

    if(numero % 2 === 0){
        pares++;
    } else {
        impares++;
    }
}

console.log(`Total de números pares: ${pares}`);
console.log(`Total de números impares: ${impares}`);
