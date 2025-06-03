document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Carregar notícias (simulação)
    function loadNews() {
        const newsGrid = document.querySelector('.grid-container');
        
        // Simulação de dados - na implementação real viria de uma API
        const newsData = [
            {
                title: "São Paulo anuncia renovação com destaque do time",
                excerpt: "Clube renova contrato com jogador por mais três temporadas...",
                category: "Contratações",
                image: "https://via.placeholder.com/400x225",
                time: "10h30",
                comments: "28"
            },
            {
                title: "Técnico analisa preparação para o próximo jogo",
                excerpt: "Treinador fala sobre estratégia para enfrentar o adversário...",
                category: "Entrevista",
                image: "https://via.placeholder.com/400x225",
                time: "09h15",
                comments: "42"
            },
            {
                title: "Promessa da base é relacionada para jogo profissional",
                excerpt: "Jovem jogador pode fazer sua estreia no time principal...",
                category: "Base",
                image: "https://via.placeholder.com/400x225",
                time: "Ontem",
                comments: "15"
            }
        ];
        
        // Limpar grid (se necessário)
        newsGrid.innerHTML = '';
        
        // Adicionar notícias ao grid
        newsData.forEach(news => {
            const newsCard = document.createElement('article');
            newsCard.className = 'news-card';
            
            newsCard.innerHTML = `
                <figure>
                    <img src="${news.image}" alt="${news.title}" class="hover-zoom">
                    <span class="news-category">${news.category}</span>
                </figure>
                <div class="card-content">
                    <h3>${news.title}</h3>
                    <p>${news.excerpt}</p>
                    <div class="news-meta">
                        <span>${news.time}</span>
                        <span>${news.comments} comentários</span>
                    </div>
                </div>
            `;
            
            newsGrid.appendChild(newsCard);
        });
    }
    
    // Carregar classificação (simulação)
    function loadStandings() {
        // Na implementação real, isso viria de uma API
        console.log("Carregando tabela de classificação...");
    }
    
    // Carregar próximos jogos (simulação)
    function loadMatches() {
        // Na implementação real, isso viria de uma API
        console.log("Carregando próximos jogos...");
    }
    
    // Inicializar funções
    loadNews();
    loadStandings();
    loadMatches();
    
    // Efeito parallax
    window.addEventListener('scroll', function() {
        const parallax = document.querySelector('.parallax');
        if (parallax) {
            const scrollPosition = window.pageYOffset;
            parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
    
    // Microinterações para botões
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        });
    });
});

// Funções específicas para o Fórum
function initForum() {
    // Troca de abas
    const abas = document.querySelectorAll('[data-aba]');
    const conteudoAbas = document.querySelectorAll('.aba-forum');
    
    abas.forEach(aba => {
        aba.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove classe ativa de todas as abas
            abas.forEach(a => a.parentElement.classList.remove('ativo'));
            conteudoAbas.forEach(c => c.classList.remove('ativa'));
            
            // Adiciona classe ativa na aba clicada
            this.parentElement.classList.add('ativo');
            const abaAlvo = this.getAttribute('data-aba');
            document.getElementById(abaAlvo).classList.add('ativa');
        });
    });
    
    // Sistema de likes
    const botoesLike = document.querySelectorAll('.bt-like-interno');
    
    botoesLike.forEach(botao => {
        botao.addEventListener('click', function(e) {
            e.preventDefault();
            
            const isLike = this.classList.contains('like-interno');
            const spanContador = this.querySelector('span');
            let contador = parseInt(spanContador.textContent);
            
            // Simulação - na prática seria uma chamada AJAX
            if (this.classList.contains('active')) {
                // Remove o like/dislike
                this.classList.remove('active');
                spanContador.textContent = contador - 1;
            } else {
                // Adiciona o like/dislike
                const outroBotao = this.parentElement.querySelector('.bt-like-interno:not(.' + this.classList[1] + ')');
                
                if (outroBotao.classList.contains('active')) {
                    outroBotao.classList.remove('active');
                    const outroSpan = outroBotao.querySelector('span');
                    outroSpan.textContent = parseInt(outroSpan.textContent) - 1;
                }
                
                this.classList.add('active');
                spanContador.textContent = contador + 1;
            }
        });
    });
    
    // Carregar mais tópicos (scroll infinito)
    window.addEventListener('scroll', function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
            // Simulação de carregamento de mais tópicos
            console.log('Carregar mais tópicos...');
            // Na prática, seria uma chamada AJAX para buscar mais tópicos
        }
    });
}

// Inicializar o fórum quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initForum);
