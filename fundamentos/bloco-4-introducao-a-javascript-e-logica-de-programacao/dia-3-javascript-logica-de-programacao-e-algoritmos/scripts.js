//iniciando a prática
let fatorial = 1;
for (let i = 1; i <= 10; i += 1) {
    fatorial = fatorial * i;
}

console.log(fatorial);
//finalizando exercicio fatorial 10

let word = "tryber";
function reverseString (str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    console.log(joinArray); 
}

reverseString("tryber");
// invertendo string

function reverseUnico (str) {
    console.log(str.split("").reverse().join(""));
}
reverseUnico("pato");
// implementando outra forma de inverter string

let array = ["java", "javacript", "python", "html", "css"];
let maior = array[0];
let menor = array[0];

for (let j = 0; j < array.length; j += 1) {
    let atual = array[j];
    if (atual.length > maior.length) {
        maior = atual;
    }
    
    console.log("a maior palavra agora é: " + maior);
}

console.log(maior);

for (let k = 0; k < array.length; k += 1) {
    let atualMenor = array[k];
    if (atualMenor.length < menor.length) {
        menor = atualMenor;
    }
    
    console.log("a maior palavra agora é: " + menor);
}

console.log(menor);
//finzalizado o exercicio 3 de maior e menor palavra.