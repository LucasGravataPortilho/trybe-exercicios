const container = document.getElementById('pai');

const newDiv = document.createElement('div');

newDiv.className = 'irmãoDoElemento';

container.appendChild(newDiv);

// --------------------------------------

const container2 = document.getElementById('elementoOndeVoceEsta');

const newSon = document.createElement('div');

newSon.className = 'terceiroFilhoDoElemento';

container2.appendChild(newSon);
newSon.innerText = 'Eu sou o terceiro filho';

// ----------------------------------------

const container3 = document.getElementById('primeiroFilhoDoFilho');

const newSon2 = document.createElement('div');

newSon2.className = 'primeiroBisneto';

container3.appendChild(newSon2);
newSon2.innerText = 'Eu sou o primeiro bisneto!';

// ----------------------------------------

console.log(container3);





