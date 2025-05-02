const imagens = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg",
  "foto4.jpg",
  "foto5.jpg"
  // adicione mais se necessário
];

const gallery = document.getElementById("gallery");

imagens.forEach(nome => {
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.innerHTML = `
    <img src="public/${nome}" alt="Foto de casamento" onclick="abrirModal(this)">
    <a href="public/${nome}" download>
      <button class="download-btn">⬇️ Baixar</button>
    </a>
  `;
  gallery.appendChild(item);
});

function abrirModal(imagem) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("imgModal");
  modal.style.display = "block";
  modalImg.src = imagem.src;
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function baixarTudo() {
  alert("Para baixar todas as imagens, crie um arquivo .zip manualmente ou adicione backend.");
  // window.location.href = "public/fotos.zip";
}
