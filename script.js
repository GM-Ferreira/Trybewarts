const login = document.getElementsByClassName('logar');
const usuario = document.querySelector('#email');
const senha = document.querySelector('#password');
const desabilitado = document.getElementById('submit-btn');
const concordo = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const contadorAuto = document.getElementById('counter');
const conteudo = document.querySelector('#evaluation-form');
const rodape = document.querySelector('footer');
const principal = document.getElementsByTagName('main');

function emitirAlert(event) {
  event.preventDefault();
  if (senha.value === '123456' && usuario.value === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else { alert('Email ou senha inválidos.'); }
}

login[0].addEventListener('click', emitirAlert);

desabilitado.disabled = true;

function abilitar() {
  desabilitado.disabled = false;
}
concordo.addEventListener('click', abilitar);

function contar() {
  let contador = 500;
  contador -= (textArea.value.length);
  contadorAuto.innerText = contador;
}

textArea.addEventListener('keyup', contar);

contadorAuto.innerText = '500';

function apagarTudo(event) {
  event.preventDefault();
  conteudo.style.display = 'none';
  rodape.style.display = 'flex';
  rodape.style.alignItems = 'flex-end';
  const novo = document.createElement('p');
  novo.innerText = usuario.value;
  principal[0].appendChild(novo);
}

desabilitado.addEventListener('click', apagarTudo);
