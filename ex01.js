const leia = require('readline-sync');

let numA, numB, numC;

numA = leia.questionInt("\nDigite o numero A: ");
numB = leia.questionInt("\nDigite o numero B: ");
numC = leia.questionInt("\nDigite o numero C: ");

if (numA + numB > numC){
    console.log("\nA soma de A + B é maior do que C! ");
} else if (numA + numB < numC){
    console.log("\nA soma de A + B é menor do que C!");
} else
    console.log("\nA Soma de A + B é igual a C! ");




