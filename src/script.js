// Carrega últimas notícias
document.addEventListener('DOMContentLoaded', function() {
    fetchNoticias();
    fetchProximosJogos();
});

async function fetchNoticias() {
    try {
        // Simulação - na implementação real usaria Firebase ou API
        const noticias = [
            { titulo: "São Paulo anuncia novo reforço", resumo: "Clube contrata jogador para setor defensivo...", imagem: "noticia1.jpg" },
            { titulo: "Treino aberto ao público", resumo: "Time fará sessão de treino com presença dos torcedores...", imagem: "noticia2.jpg" },
            { titulo: "Copa do Brasil: datas definidas", resumo: "Confira o calendário completo do Tricolor...", imagem: "noticia3.jpg" }
        ];
        
        const grid = document.querySelector('.news-grid');
        grid.innerHTML = noticias.map(noticia => `
            <article class="card">
                <img src="${noticia.imagem}" alt="${noticia.titulo}" class="hover-zoom">
                <div class="card-content">
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.resumo}</p>
                    <a href="#" class="btn">Leia mais</a>
                </div>
            </article>
        `).join('');
    } catch (error) {
        console.error("Erro ao carregar notícias:", error);
    }
}

async function fetchProximosJogos() {
    // Implementação similar para carregar jogos
}
