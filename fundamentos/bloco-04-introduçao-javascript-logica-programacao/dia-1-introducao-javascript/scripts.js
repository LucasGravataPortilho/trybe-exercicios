let age = 20;
let name = "Hulk";
let fullName = "Lucas Gravatá Portilho";
// camelCase (boa prática da programação).

console.log(age);
console.log(name);
console.log(fullName);
// finalizando exercicio da videoaula

// iniciando exercicio do foguete de variáveis.
const myName = "Lucas Portilho";
const birthCity = "Aracaju";
let birthYear = 1995;

console.log(myName);
console.log(birthCity);
console.log(birthYear);
// finalizando exercicio do foguete.

// iniciando tipos primitivos, tipagem dinamica e operações aritmeticas.

// let movie = "Avengers"; //string literal
// let score = 10; //number literal
// let isValid = true; //boolean
// let firstName; //undefined
// let color = null; //redefinição de valor

let salary = 3500;
console.log(salary + salary);

// exercicio de tipos
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
    firstName: "Ana",
    lastName: "Santos",
};
const patientEmail = "ana@email.com";

const base = 5;
let height = 8;
const area = base * height;
const perimeter = (2 * base) + (2 * height);

console.log(area);
console.log(perimeter);
// finalizando tipos primitivos

//iniciando condições if e else
//if - se
//else - senão

let trybe = 16.42;

if (trybe >= 14 && trybe < 14.40) {
    console.log("Esquenta");
}
else if (trybe >= 16.30 && trybe < 17.50) {
    console.log("Aula ao vivo");
}
else if (trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento");
}
else {
    console.log("Fora dos momentos sincronos");
}

const nota = 40;
if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
}
else if (nota >= 60 && nota < 80) {
    console.log("Você está na nossa lista de espera");
}
else {
    console.log("Você foi reprovada(o)");
}
//finalizando exercicios de condicionais

