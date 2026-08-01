/* Hinário — JavaScript da aplicação (sem dependências externas).
   Exibe os hinos e controla a navegação por número (123) e ordem alfabética (ABC). */
(function () {
  'use strict';

  var conteudo = document.getElementById('conteudoSelecionado');
  var hinosEl = document.getElementById('hinos');
  var numerosEl = document.getElementById('numerosHinos');
  var abcEl = document.getElementById('selecaoABC');

  // Snapshot dos hinos e índice dos blocos (@NNN@)
  var todosHinosHtml = hinosEl ? hinosEl.innerHTML : '';
  var blocos = [];
  if (hinosEl) {
    blocos = Array.prototype.slice.call(hinosEl.querySelectorAll('.bloco'));
  }

  function esconder(el) {
    if (el) { el.classList.add('escondido'); }
  }

  function mostrar(el) {
    if (el) { el.classList.remove('escondido'); }
  }

  function voltarAoTopo() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function mostrarTodos() {
    esconder(numerosEl);
    esconder(abcEl);
    conteudo.innerHTML = todosHinosHtml;
    voltarAoTopo();
  }

  function mostrarGradeNumeros() {
    conteudo.innerHTML = '';
    esconder(abcEl);
    mostrar(numerosEl);
    voltarAoTopo();
  }

  function mostrarGradeABC() {
    conteudo.innerHTML = '';
    esconder(numerosEl);
    mostrar(abcEl);
    voltarAoTopo();
  }

  function mostrarHino(id) {
    var bloco = null;
    for (var i = 0; i < blocos.length; i++) {
      var marcador = blocos[i].querySelector('.idHino');
      if (marcador && marcador.textContent.trim() === id) {
        bloco = blocos[i];
        break;
      }
    }
    if (!bloco) {
      // Referência órfã no conteúdo original (ex.: @305@ sem bloco): feedback visível
      conteudo.innerHTML = '<p class="sem-js">Este hino não está disponível neste aplicativo.</p>';
      return;
    }

    esconder(numerosEl);
    esconder(abcEl);
    conteudo.innerHTML = '';
    conteudo.appendChild(bloco.cloneNode(true));
    voltarAoTopo();
  }

  // Navegação principal
  document.getElementById('titulo').addEventListener('click', function (e) {
    e.preventDefault();
    mostrarTodos();
  });
  document.getElementById('seleciona123').addEventListener('click', function (e) {
    e.preventDefault();
    mostrarGradeNumeros();
  });
  document.getElementById('selecionaABC').addEventListener('click', function (e) {
    e.preventDefault();
    mostrarGradeABC();
  });

  // Delegação de cliques — funciona também em conteúdo clonado
  document.addEventListener('click', function (e) {
    var alvo = e.target && e.target.closest ? e.target.closest('button') : null;
    if (!alvo) { return; }

    if (alvo.classList.contains('btnNumber')) {
      e.preventDefault();
      mostrarHino('@' + alvo.textContent.trim() + '@');
      return;
    }

    if (alvo.classList.contains('abcButton')) {
      e.preventDefault();
      var letra = alvo.textContent.trim();
      var lista = document.getElementById('myDIV' + letra);
      esconder(abcEl);
      conteudo.innerHTML = '';
      if (lista) { conteudo.innerHTML = lista.innerHTML; }
      voltarAoTopo();
      return;
    }

    if (alvo.classList.contains('hinoBtn')) {
      e.preventDefault();
      var id = alvo.getAttribute('data-id');
      if (id === '@Todos@') {
        mostrarTodos();
      } else {
        mostrarHino(id);
      }
    }
  });

  // Estado inicial: mostra todos os hinos
  mostrarTodos();
})();
