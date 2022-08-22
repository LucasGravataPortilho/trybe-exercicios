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