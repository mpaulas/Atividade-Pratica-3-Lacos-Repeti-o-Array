import * as readlineSync from 'readline-sync';

let somaPositivo: number = 0;
let numero: number;

do{
    numero = parseInt(readlineSync.question(`Digite um numero: `));

    if(numero > 0){
        somaPositivo += numero;
    }
} while (numero !== 0);

console.log(`A soma dos números positivos é: ${somaPositivo}`);