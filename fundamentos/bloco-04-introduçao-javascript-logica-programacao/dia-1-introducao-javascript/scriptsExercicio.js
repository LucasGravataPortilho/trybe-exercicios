//exercicio 1
let a = 10;
let b = 2;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

//exercicio 2
if (a > b) {
    console.log("o valor de a é maior!");
} else {
    console.log("o valor de b é maior!");
}

//exercicio 3
const c = 5;
const d = 12;
const e = 20;

if (c > d && c > e) {
    console.log("c é o maior valor!");
} else if (d > c && d > e) {
    console.log("d é o maior valor!");
} else {
    console.log("e é o maior valor!");
}

//exercicio 4
const f = 3;

if (f > 0) {
    console.log("positivo");
} else if (f < 0) {
    console.log("negativo");
} else {
    console.log("zero");
}

//exercicio 5
const g = 85;
const h = 50;
const i = 45;
const soma = g + h + i;

if (g + h > i && h + i > g && g + i > h && soma === 180) {
    console.log(true);
} else if (soma !== 180) {
    console.log("erro!");
} else {
    console.log(false);
}

//exercicio 6
let peça = "rainha";

switch (peça) {
    case "peao":
        console.log("frente e diagonal");
        break;
    
    case "torre":
        console.log("laterais");
        break;

    case "bispo":
        console.log("diagonais");
        break;

    case "cavalo":
        console.log("em formato de L");
        break;

    case "rainha":
        console.log("em todas as direções");
        break;

    case "rei":
        console.log("em todas as direções, porém um espaço apenas");
        break;

    default:
        console.log("não é uma peça de xadrez!");
}

//exercicio 7
const nota = 81;

if (nota >= 90 && nota <= 100) {
    console.log("A");
} else if (nota < 90 && nota >= 80) {
    console.log("B");
} else if (nota < 80 && nota >= 70) {
    console.log("C");
} else if (nota < 70 && nota >= 60) {
    console.log("D");
} else if (nota < 60 && nota >= 50) {
    console.log("E");
} else if (nota < 50 && nota >= 0) {
    console.log("F");
} else {
    console.log("erro!");
}