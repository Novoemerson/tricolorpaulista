// Automatiza a organização das notícias
class NewsManager {
    constructor() {
        this.newsList = [];
    }

    addNews(title, content) {
        const newsItem = { title, content, date: new Date() };
        this.newsList.push(newsItem);
        this.displayNews();
    }

    removeOldNews(daysLimit) {
        const now = new Date();
        this.newsList = this.newsList.filter(news => {
            const diffTime = Math.abs(now - news.date);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= daysLimit;
        });
        this.displayNews();
    }

    displayNews() {
        const noticiasDiv = document.getElementById("noticias");
        noticiasDiv.innerHTML = "";
        this.newsList.forEach(noticia => {
            let noticiaItem = document.createElement("div");
            noticiaItem.innerHTML = `<h3>${noticia.title}</h3><p>${noticia.content}</p><small>${noticia.date.toLocaleDateString()}</small>`;
            noticiasDiv.appendChild(noticiaItem);
        });
    }
}

// Inicializa o gerenciador de notícias
const newsManager = new NewsManager();
newsManager.addNews("São Paulo vence clássico!", "O Tricolor Paulista venceu mais um clássico emocionante...");
newsManager.addNews("Novo reforço anunciado!", "São Paulo anuncia nova contratação para a temporada...");

// Remove notícias antigas após 7 dias
setInterval(() => {
    newsManager.removeOldNews(7);
}, 86400000); // Executa a cada 24 horas
