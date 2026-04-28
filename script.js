'use strict';

// ============================================================
// DADOS DOS FILMES
// ============================================================
const filmes = [
  {
    id: 1,
    titulo: "The Dark Knight",
    ano: 2008,
    generos: ["Ação", "Suspense"],
    duracao: "2h 32min",
    imdb: "9.0",
    sinopse: "Batman enfrenta o Coringa, um criminoso caótico determinado a mergulhar Gotham City no caos absoluto.",
    diretor: "Christopher Nolan",
    elenco: "Christian Bale, Heath Ledger, Aaron Eckhart",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    corFundo: "#0d0d2b"
  },
  {
    id: 2,
    titulo: "A Origem",
    ano: 2010,
    generos: ["Ficção Científica", "Ação"],
    duracao: "2h 28min",
    imdb: "8.8",
    sinopse: "Um ladrão especializado em roubar segredos do subconsciente recebe a missão impossível de plantar uma ideia.",
    diretor: "Christopher Nolan",
    elenco: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    corFundo: "#0a1520"
  },
  {
    id: 3,
    titulo: "Procurando Nemo",
    ano: 2003,
    generos: ["Animação", "Aventura"],
    duracao: "1h 40min",
    imdb: "8.1",
    sinopse: "Um peixe-palhaço percorre todo o oceano em busca de seu filho Nemo, capturado por um mergulhador.",
    diretor: "Andrew Stanton",
    elenco: "Albert Brooks, Ellen DeGeneres, Alexander Gould",
    poster: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    corFundo: "#002244"
  },
  {
    id: 4,
    titulo: "Um Sonho de Liberdade",
    ano: 1994,
    generos: ["Drama"],
    duracao: "2h 22min",
    imdb: "9.3",
    sinopse: "Dois prisioneiros criam laços ao longo de anos, encontrando conforto e redenção dentro da prisão de Shawshank.",
    diretor: "Frank Darabont",
    elenco: "Tim Robbins, Morgan Freeman, Bob Gunton",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    corFundo: "#1e1000"
  },
  {
    id: 5,
    titulo: "Interestelar",
    ano: 2014,
    generos: ["Ficção Científica", "Aventura"],
    duracao: "2h 49min",
    imdb: "8.7",
    sinopse: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço em busca de um novo lar para a humanidade.",
    diretor: "Christopher Nolan",
    elenco: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    poster: "https://image.tmdb.org/t/p/w500/6ricSDD83BClJsFdGB6x7cM0MFQ.jpg",
    corFundo: "#050518"
  },
  {
    id: 6,
    titulo: "O Poderoso Chefão",
    ano: 1972,
    generos: ["Crime", "Drama"],
    duracao: "2h 55min",
    imdb: "9.2",
    sinopse: "O patriarca de uma poderosa família mafiosa transfere o controle de seu império para seu filho relutante.",
    diretor: "Francis Ford Coppola",
    elenco: "Marlon Brando, Al Pacino, James Caan",
    poster: "https://image.tmdb.org/t/p/w500/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg",
    corFundo: "#150800"
  },
  {
    id: 7,
    titulo: "Matrix",
    ano: 1999,
    generos: ["Ficção Científica", "Ação"],
    duracao: "2h 16min",
    imdb: "8.7",
    sinopse: "Um hacker descobre que a realidade que conhece é uma simulação criada por máquinas e é recrutado para a resistência humana.",
    diretor: "Lilly Wachowski, Lana Wachowski",
    elenco: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    poster: "https://image.tmdb.org/t/p/w500/lDqMDI3xpbB9UQRyeXfei0MXhqb.jpg",
    corFundo: "#001a00"
  },
  {
    id: 8,
    titulo: "Forrest Gump",
    ano: 1994,
    generos: ["Drama", "Romance"],
    duracao: "2h 22min",
    imdb: "8.8",
    sinopse: "Através dos olhos ingênuos de Forrest, acompanhamos décadas da história americana de um jeito único e emocionante.",
    diretor: "Robert Zemeckis",
    elenco: "Tom Hanks, Robin Wright, Gary Sinise",
    poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    corFundo: "#081500"
  },
  {
    id: 9,
    titulo: "O Senhor dos Anéis",
    ano: 2001,
    generos: ["Fantasia", "Aventura"],
    duracao: "3h 28min",
    imdb: "8.8",
    sinopse: "Um jovem hobbit e seus companheiros embarcam em uma épica jornada para destruir o Um Anel e derrotar Sauron.",
    diretor: "Peter Jackson",
    elenco: "Elijah Wood, Ian McKellen, Viggo Mortensen",
    poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    corFundo: "#0a1505"
  },
  {
    id: 10,
    titulo: "Vingadores: Ultimato",
    ano: 2019,
    generos: ["Ação", "Ficção Científica"],
    duracao: "3h 1min",
    imdb: "8.4",
    sinopse: "Os Vingadores remanescentes se unem para uma última tentativa de reverter as ações de Thanos e salvar o universo.",
    diretor: "Anthony e Joe Russo",
    elenco: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    corFundo: "#100518"
  }
];

// ============================================================
// ESTADO
// ============================================================
let generoAtual = 'todos';
let buscaAtual  = '';
let favoritos   = JSON.parse(localStorage.getItem('cinematheus-favs') || '[]');

// ============================================================
// RENDERIZAÇÃO DOS FILTROS
// ============================================================
function renderizarFiltros() {
  const generosSet = new Set();
  filmes.forEach(function(f) { f.generos.forEach(function(g) { generosSet.add(g); }); });
  const lista = ['Todos'].concat(Array.from(generosSet).sort());

  document.getElementById('filtros').innerHTML = lista.map(function(g) {
    var val = g.toLowerCase();
    return '<button class="filtro' + (val === 'todos' ? ' ativo' : '') + '" ' +
           'data-genero="' + val + '" onclick="filtrarPorGenero(\'' + val + '\')">' + g + '</button>';
  }).join('');
}

// ============================================================
// RENDERIZAÇÃO DOS CARDS
// ============================================================
function renderizarFilmes(lista) {
  var vitrine = document.getElementById('vitrine');
  var aviso   = document.getElementById('sem-resultados');

  if (lista.length === 0) {
    vitrine.innerHTML = '';
    aviso.classList.remove('hidden');
    return;
  }

  aviso.classList.add('hidden');
  vitrine.innerHTML = lista.map(criarCardHTML).join('');

  // fade-in ao carregar imagem
  vitrine.querySelectorAll('.card-poster img').forEach(function(img) {
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add('ok');
    } else {
      img.addEventListener('load', function() { img.classList.add('ok'); });
    }
  });
}

function criarCardHTML(f) {
  var fav  = favoritos.indexOf(f.id) !== -1;
  var tags = f.generos.map(function(g) { return '<span class="tag">' + g + '</span>'; }).join('');

  return '<div class="card" onclick="abrirModal(' + f.id + ')">' +
    '<div class="card-poster">' +
      '<img src="' + f.poster + '" alt="' + escapar(f.titulo) + '" ' +
           'onerror="imgFallback(this,\'' + f.corFundo + '\',\'' + escapar(f.titulo) + '\')" />' +
      '<div class="card-overlay"><span class="overlay-btn">Ver Detalhes</span></div>' +
      '<span class="badge-imdb">⭐ ' + f.imdb + '</span>' +
      '<button class="btn-fav' + (fav ? ' favoritado' : '') + '" ' +
              'onclick="toggleFav(event,' + f.id + ')" title="Favoritar">' +
        (fav ? '❤️' : '🤍') +
      '</button>' +
    '</div>' +
    '<div class="card-info">' +
      '<h2>' + f.titulo + '</h2>' +
      '<div class="card-meta"><span>' + f.ano + '</span><span>⏱ ' + f.duracao + '</span></div>' +
      '<div class="tags">' + tags + '</div>' +
      '<p class="sinopse">' + f.sinopse + '</p>' +
    '</div>' +
  '</div>';
}

// ============================================================
// FILTROS E BUSCA
// ============================================================
function filtrarPorGenero(genero) {
  generoAtual = genero;
  document.querySelectorAll('.filtro').forEach(function(btn) {
    btn.classList.toggle('ativo', btn.dataset.genero === genero);
  });
  aplicarFiltros();
}

function filtrarFilmes() {
  buscaAtual = document.getElementById('busca').value.toLowerCase().trim();
  aplicarFiltros();
}

function aplicarFiltros() {
  var resultado = filmes;

  if (generoAtual !== 'todos') {
    resultado = resultado.filter(function(f) {
      return f.generos.some(function(g) { return g.toLowerCase() === generoAtual; });
    });
  }

  if (buscaAtual) {
    resultado = resultado.filter(function(f) {
      return f.titulo.toLowerCase().includes(buscaAtual);
    });
  }

  renderizarFilmes(resultado);
}

// ============================================================
// FAVORITOS
// ============================================================
function toggleFav(event, id) {
  if (event && event.stopPropagation) event.stopPropagation();

  var idx = favoritos.indexOf(id);
  if (idx === -1) {
    favoritos.push(id);
  } else {
    favoritos.splice(idx, 1);
  }

  localStorage.setItem('cinematheus-favs', JSON.stringify(favoritos));
  atualizarContadorFavs();
  aplicarFiltros();
}

function atualizarContadorFavs() {
  var el = document.getElementById('num-favs');
  if (el) el.textContent = favoritos.length;
}

// ============================================================
// MODAL
// ============================================================
function abrirModal(id) {
  var f = filmes.find(function(m) { return m.id === id; });
  if (!f) return;

  var fav  = favoritos.indexOf(f.id) !== -1;
  var tags = f.generos.map(function(g) { return '<span class="tag">' + g + '</span>'; }).join('');

  document.getElementById('modal-corpo').innerHTML =
    '<div class="modal-grid">' +
      '<div class="modal-poster">' +
        '<img src="' + f.poster + '" alt="' + escapar(f.titulo) + '" ' +
             'onerror="imgFallback(this,\'' + f.corFundo + '\',\'' + escapar(f.titulo) + '\')" />' +
      '</div>' +
      '<div class="modal-info">' +
        '<h2>' + f.titulo + ' <span class="modal-ano">(' + f.ano + ')</span></h2>' +
        '<div class="modal-badges">' +
          '<span class="modal-imdb">⭐ ' + f.imdb + ' IMDb</span>' +
          '<span class="modal-dur">⏱ ' + f.duracao + '</span>' +
        '</div>' +
        '<div class="tags">' + tags + '</div>' +
        '<p class="modal-sinopse">' + f.sinopse + '</p>' +
        '<div class="modal-ficha">' +
          '<p><strong>🎬 Diretor:</strong> ' + f.diretor + '</p>' +
          '<p><strong>🎭 Elenco:</strong> ' + f.elenco + '</p>' +
        '</div>' +
        '<button class="btn-fav-modal' + (fav ? ' favoritado' : '') + '" ' +
                'onclick="toggleFavModal(' + f.id + ')">' +
          (fav ? '❤️ Nos Favoritos' : '🤍 Favoritar') +
        '</button>' +
      '</div>' +
    '</div>';

  document.getElementById('modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function toggleFavModal(id) {
  toggleFav(null, id);
  var btn = document.querySelector('.btn-fav-modal');
  if (!btn) return;
  var fav = favoritos.indexOf(id) !== -1;
  btn.textContent = fav ? '❤️ Nos Favoritos' : '🤍 Favoritar';
  btn.classList.toggle('favoritado', fav);
}

function fecharModal() {
  document.getElementById('modal').classList.add('hidden');
  document.body.style.overflow = '';
}

function fecharModalFundo(event) {
  if (event.target === document.getElementById('modal')) fecharModal();
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') fecharModal();
});

// ============================================================
// FALLBACK DE IMAGEM
// ============================================================
function imgFallback(img, corFundo, titulo) {
  img.style.display = 'none';
  var container = img.parentElement;
  container.style.background = 'linear-gradient(145deg, ' + corFundo + ' 0%, #111 100%)';
  var ph = document.createElement('div');
  ph.className = 'img-placeholder';
  ph.innerHTML = '<span class="ph-icon">🎬</span><p class="ph-titulo">' + titulo + '</p>';
  container.appendChild(ph);
}

// ============================================================
// FORMULÁRIO DE CONTATO
// ============================================================
function enviarFormulario(evento) {
  evento.preventDefault();

  var form  = document.getElementById('form-contato');
  var btn   = form.querySelector('.btn-enviar');
  var nome  = document.getElementById('nome').value.trim();
  var email = document.getElementById('email').value.trim();
  var msg   = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !msg) {
    mostrarErro('Preencha todos os campos obrigatórios.');
    return;
  }

  btn.textContent = 'Enviando... ⏳';
  btn.disabled = true;

  var assunto = document.getElementById('assunto').value;

  fetch('https://formsubmit.co/ajax/pereira_matheus374@escola.pr.gov.br', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
      assunto: assunto,
      mensagem: msg,
      _subject: 'Nova mensagem – CineMatheus 🎬',
      _captcha: 'false',
      _template: 'table'
    })
  })
  .then(function(res) { return res.json(); })
  .then(function(data) {
    btn.textContent = 'Enviar Mensagem 🚀';
    btn.disabled = false;

    if (data.success === 'true' || data.success === true) {
      var sucesso = document.getElementById('msg-sucesso');
      sucesso.classList.remove('hidden');
      form.reset();
      setTimeout(function() { sucesso.classList.add('hidden'); }, 7000);
    } else {
      mostrarErro('Algo deu errado. Tente novamente.');
    }
  })
  .catch(function() {
    btn.textContent = 'Enviar Mensagem 🚀';
    btn.disabled = false;
    mostrarErro('Erro de conexão. Verifique sua internet e tente novamente.');
  });
}

function mostrarErro(texto) {
  var el = document.getElementById('msg-erro');
  if (!el) {
    el = document.createElement('div');
    el.id = 'msg-erro';
    el.className = 'msg-erro';
    document.getElementById('form-contato').appendChild(el);
  }
  el.textContent = '❌ ' + texto;
  el.style.display = 'block';
  setTimeout(function() { el.style.display = 'none'; }, 5000);
}

// ============================================================
// UTILITÁRIOS
// ============================================================
function escapar(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('vitrine')) {
    renderizarFiltros();
    renderizarFilmes(filmes);
    atualizarContadorFavs();
  }
  if (document.getElementById('form-contato')) {
    atualizarContadorFavs();
  }
});
