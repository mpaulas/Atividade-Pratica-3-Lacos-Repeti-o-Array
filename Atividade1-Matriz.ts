import * as readlineSync from 'readline-sync';

let matriz: number[][] = [];

for (let i = 0; i < 3; i++){
    matriz[i] = [];
    for (let j = 0; j < 3; j++){
        matriz[i][j] = parseInt(readlineSync.question(`Digite o elemento [${i}] [${j}] da matriz: `));
    }
}

let diagonalP: number [] = [];
let diagonalS: number [] = [];
let somaDiagonalP: number = 0;
let somaDiagonalS: number = 0;

for (let i = 0; i < 3; i++) {
    diagonalP.push(matriz[i][i]);
    somaDiagonalP += matriz[i][i];

    diagonalS.push(matriz[i][2 - i]);
    somaDiagonalS += matriz[i][2 - i];
}

console.log('Elementos da Diagonal Principal: ');
console.log(diagonalP.join(' '));

console.log('Elementos da Diagonal Secundária: ');
console.log(diagonalS.join(' '));

console.log('Soma dos Elementos da Diagonal Principal: ');
console.log(somaDiagonalP);

console.log('Soma dos Elementos da Diagonal Secundária: ');
console.log(somaDiagonalS);