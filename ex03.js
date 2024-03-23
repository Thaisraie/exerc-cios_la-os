    const leia = require('readline-sync');

let quantidade;
let opcao;
let cachorroQuente = 10;
let xSalada = 15;
let xBancon = 18;
let bauru = 12;
let refri = 8;
let sucoLaranja = 13;

console.log("### ### ### MENU ### ### ###");
console.log("\n1 - Cachorro Quente: R$10,00 \n2 - X-Salada: R$15,00 \n3 - X-Bacon: R$18,00 \n4 - Bauru: R$12,00 \n5 - Refrigerante: R$8,00 \n6 - Suco de laranja: R$13,00 ");

console.log("\nCódigo do Produto: ");
opcao = leia.questionInt();
console.log("\nQuantidade: ");
quantidade = leia.questionInt();


switch(opcao){
    case 1:
        console.log("\nProduto: Cachorro Quente \nValor total: R$ " + cachorroQuente * quantidade);
        break;
    case 2:
        console.log("\nProduto: X-Salada \nValor total: R$ " + xSalada * quantidade);
        break;
    case 3:
        console.log("\nProduto: X-Bacon \nValor total: R$ " + xBancon * quantidade);
        break;
    case 4:
        console.log("\nProduto: Bauru \nValor total: R$ " + bauru * quantidade);
        break;
    case 5:
        console.log("\nProduto: Refrigerante \nValor total: R$ " + refri * quantidade);
        break;
    case 6:
        console.log("\nProduto: Suco de laranja \nValor total: R$ " + sucoLaranja * quantidade);
        break;
    default:
        console.log("\nOpção inválida!");
}

