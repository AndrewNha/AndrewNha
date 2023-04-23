const response = await fetch('index.json');
const data = await response.json();

let noticiaView = '';

for (const noticia of data.noticias) {
  noticiaView += getNoticiaView(noticia);
}

document.querySelector('#noticia-grid').innerHTML = noticiaView;

function getNoticiaView(noticia) {
  return `<div class="col">
  <div class="card">
    <img class ="tamanho" src="${noticia.img}" height="350px" widht="200px">
    <div class="card-body">
      <h5 class="card-title">${noticia.name}</h5>
      <p class="card-text">${noticia.descricao}</p>
    </div>
  </div>
</div>`;
}