const leia = require('readline-sync');

let num1, num2;
let operacao;

console.log("\nDigite o 1º número: ");
num1 = leia.questionFloat();
console.log("Digite o 2º número: ");
num2 = leia.questionFloat();

console.log("\nDigite a operação para calcular os 2 números: ")
console.log("\n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão")
console.log("\nOperação: ");

operacao = leia.questionInt();

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

switch(operacao){
    case 1:
        console.log(`\n${num1} + ${num2} = ${soma.toFixed(2)}`);
        break;
    case 2:
        console.log(`\n${num1} + ${num2} = ${subtracao.toFixed(2)}`);
        break;
    case 3:
        console.log(`\n${num1} * ${num2} = ${multiplicacao.toFixed(2)}`);
        break;
    case 4:
        console.log(`\n${num1} / ${num2} = ${divisao.toFixed(2)}`);
        break;            
}
