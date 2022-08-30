function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let decemberDays = document.querySelector('#days');

  for (let index2 = 0; index2 < decemberDaysList.length; index2 += 1) {
    const dias = decemberDaysList[index2];
    const listaDias = document.createElement('li');
    listaDias.innerHTML = dias;
    listaDias.className = 'day';

    if(listaDias.innerText.includes('24') || listaDias.innerText.includes('25') || listaDias.innerText.includes('31')) {
        listaDias.classList.add('holiday');
    }

    if(listaDias.innerText == '4' || listaDias.innerText == '11' || listaDias.innerText =='18' || listaDias.innerText =='25') {
        listaDias.classList.add('friday');
    }

    decemberDays.appendChild(listaDias);
  };

// ---------------------------------------------------

function criarFeriado() {
    let botaoPai = document.getElementsByClassName('buttons-container')[0];
    let botao = document.createElement('button');
    botao.innerText = 'Feriados';
    botao.id = 'btn-holiday';
    botaoPai.appendChild(botao);
}

criarFeriado();

// ---------------------------------------------------

window.onload = function () {

  const botaoFeriados = document.getElementById('btn-holiday');
  const cores = document.querySelectorAll('.holiday');
  console.log(cores);


  botaoFeriados.addEventListener('click', function() {
    for(let i = 0; i < cores.length; i += 1) {
      let elemento = cores[i];
      elemento.style.backgroundColor = 'red';
    }
  
  }) 

}

// ------------------------------------------------------





