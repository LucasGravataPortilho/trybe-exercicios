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


  botaoFeriados.addEventListener('click', function() {
    for(let i = 0; i < cores.length; i += 1) {
      let elemento = cores[i];
      if (elemento.style.backgroundColor === 'red') {
        elemento.style.backgroundColor = 'rgb(238,238,238)';
      } else {
        elemento.style.backgroundColor = 'red';
      }
    }
  
  }) 

}

// ----------------------------------------------------

function criarSexta() {
  let botaoPai = document.getElementsByClassName('buttons-container')[0];
  let botaoSexta = document.createElement('button');
  botaoSexta.innerText = 'Sexta-Feira';
  botaoSexta.id = 'btn-friday';
  botaoPai.appendChild(botaoSexta);
}

criarSexta();

// ----------------------------------------------------

const botaoFriday = document.getElementById('btn-friday');
const textoSexta = document.querySelectorAll('.friday');
const sextas = [4, 11, 18, 25];

botaoFriday.addEventListener('click', function() {
  for(let i = 0; i < textoSexta.length; i += 1) {
    let elemento = textoSexta[i];
    if (elemento.innerText === 'Sextou!') {
      elemento.innerHTML = sextas[i];
    } else {
      elemento.innerText = 'Sextou!';
    }
  }
})

// ----------------------------------------------

// function zoomIn() {
//   const allDays = document.querySelector('#days');

//   allDays.addEventListener('mouseover', function(event) {
//     event.target.style.fontSize = '40px';

//   })

// }

// function zoomOut() {
//   const allDays = document.querySelector('#days');

//   allDays.addEventListener('mouseout', function(event) {
//     event.target.style.fontSize = '20px';

//   })
// }

// zoomIn();
// zoomOut();

// ------------------------------------------

function tarefaCalendario(string) {
  let listaTarefas = document.querySelector('.my-tasks');
  let tarefa = document.createElement('span');
  // let tarefa = document.createElement('li');
  tarefa.innerHTML = string;
  listaTarefas.appendChild(tarefa);
}

tarefaCalendario("arrumar o quarto");

// -----------------------------------------

function colorTask(cor) {
  let listaTarefas = document.querySelector('.my-tasks');
  let legenda = document.createElement('div')
  legenda.className = 'task';
  legenda.style.backgroundColor = cor;
  listaTarefas.appendChild(legenda);
}

colorTask('blue');

// -------------------------------------------

function selectTask() {
  let tarefaSelecionada = document.getElementsByClassName('task selected');
  let minhasTarefas = document.querySelector('.task');

  minhasTarefas.addEventListener('click', function(event) {
    if(tarefaSelecionada.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }

  })
}

selectTask();

// ----------------------------------------------

function corNoCalendario() {
  const allDays = document.querySelector('#days');
  let tarefaSelecionada = document.getElementsByClassName('task selected');
  let tarefa = document.querySelector('.task');
  let corDaTarefa = tarefa.style.backgroundColor;

  allDays.addEventListener('click', function(event) {
    let eventTargetColor = event.target.style.color;
    if(tarefaSelecionada.length > 0 && corDaTarefa !== eventTargetColor) {
      let color = tarefaSelecionada[0].style.backgroundColor;
      event.target.style.color = color;
    } else if(corDaTarefa === eventTargetColor) {
      event.target.style.color = 'rgb(119,119,119)';
    }

  })

}

corNoCalendario();

