document.addEventListener("DOMContentLoaded", function () {
    const noticias = [
        { titulo: "São Paulo vence clássico!", conteudo: "O Tricolor Paulista venceu mais um clássico emocionante..." },
        { titulo: "Novo reforço anunciado!", conteudo: "São Paulo anuncia nova contratação para a temporada..." }
    ];

    const noticiasDiv = document.getElementById("noticias");
    noticias.forEach(noticia => {
        let noticiaItem = document.createElement("div");
        noticiaItem.innerHTML = `<h3>${noticia.titulo}</h3><p>${noticia.conteudo}</p>`;
        noticiasDiv.appendChild(noticiaItem);
    });
});
