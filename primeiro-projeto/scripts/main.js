let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/klein.jpg') {
      minhaImagem.setAttribute ('src','imagens/klein2.jpg');
    } else {
      minhaImagem.setAttribute ('src','imagens/klein.jpg');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Por que o klein sola mais que o kirito, ' + meuNome + '?';
  }

if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Por que o klein sola mais que o kirito, ' + nomeGuardado + '?';
  }

meuBotao.onclick = function() { defineNomeUsuario();
  }