const imagens = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg"
    // adicione mais nomes conforme necessário
  ];
  
  const gallery = document.getElementById("gallery");
  
  imagens.forEach(nome => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `
      <img src="public/${nome}" alt="Foto de casamento">
      <a href="public/${nome}" download>
        <button class="download-btn">⬇️ Baixar</button>
      </a>
    `;
    gallery.appendChild(item);
  });
  
  function baixarTudo() {
    alert("Para baixar todas as imagens, crie um arquivo .zip manualmente ou implemente backend para isso.");
    // Alternativa: window.location.href = "public/fotos_casamento.zip";
  }
  