// //exercicios de fixação de objetos
// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: { 
//         golden: 2,
//         silver: 3,
//      },
//      bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
// };

// console.log(player.name);
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player['age'] + ' anos de idade');
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');
// console.log('A jogadora possui ' + player['medals']['golden'] + ' medalhas de ouro e ' + player['medals']['silver'] + ' medalhas de prata');

// //exercicios de fixação de for/in
// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let key in names) {
//     console.log("Olá " + names[key]);
//   };

//   let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (let index in car) {
//     console.log(index, car[index]);
//   };

  //exercicios de prática
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

//   console.log("Bem vinda, " + info.personagem);
//   console.log(info);

//   for(let index in info) {
//     console.log(index);
//   }

//   for(let index in info) {
//     console.log(info[index]);
//   }

function ambos(a, b) {
    if (a === b) {
        console.log('Ambos recorrentes')
    } else {
        console.log('erro!')
    }
}

console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
ambos(info.recorrente, info2.recorrente);