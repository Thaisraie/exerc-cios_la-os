const leia = require('readline-sync');

let nome, idade, primeiraDoacao;

nome = leia.question("\nDigite o nome do doador: ");
idade = leia.questionInt("\nDigite a idade do doador: ");
primeiraDoacao = leia.keyInYN("\nPrimeira doacao de sangue? ");


if (idade >= 18 && idade <= 69){
    if(idade >= 60 && idade <= 69){
       if(primeiraDoacao === true) {
        console.log("\n" + nome,"não está apto(a) para doar sangue!");
       }
       else {
        console.log("\n" + nome,"está apto(a) para doar sangue!");
       }
    }
    else {
        console.log("\n" + nome,"está apto(a) para doar sangue!");
    }
    } else {
        console.log("\n" + nome,"não apto(a) para doar sangue!");
   } 






