import * as readlineSync from 'readline-sync';

const vetor: number[] = [2,5,1,3,4,9,7,8,10,6];

const numero : number = parseInt(readlineSync.question(`Digite o numero que voce deseja encontrar: `));

let posicao: number = -1;

for(let i = 0; i < vetor.length; i++){
    if(vetor[i] === numero){
        posicao = i;
        break;
    }
}
if(posicao !== -1){
    console.log(`O número ${numero} esta localizado na posição: ${posicao}`);
} else {
    console.log(`O número ${numero} não foi encontrado.`)
}