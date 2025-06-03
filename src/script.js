// ADICIONE ESTA FUNÇÃO NO INÍCIO DO ARQUIVO
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || 
           (navigator.userAgent.indexOf('IEMobile') !== -1) ||
           (window.innerWidth <= 768);
}

document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile (mantenha este)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // ADICIONE ESTA VERIFICAÇÃO
    if (isMobileDevice()) {
        // Comportamentos específicos para mobile
        document.querySelectorAll('.forum-container').forEach(el => {
            el.style.display = 'block';
        });
    }

    // Restante do seu código original...
    loadNews();
    loadStandings();
    loadMatches();
    
    // Inicialize o fórum (versão única)
    initForum();
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
    // ADICIONE ESTA VERIFICAÇÃO
    if (isMobileDevice()) {
        console.log("Executando versão mobile do fórum");
        // Comportamentos específicos para mobile
        document.body.classList.add('mobile-view');
        return; // Sai da função para não executar os comportamentos de desktop
    }

    console.log("Executando versão desktop do fórum");
    // Restante do código original da initForum()...
    // Efeito Parallax no Header
    const forumHeader = document.querySelector('.forum-header');
    // ... manter o resto do código original ...
}            
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




    
    // Efeito de digitação no título (opcional)
    const forumTitle = document.querySelector('.forum-header h2');
    if (forumTitle) {
        const originalText = forumTitle.textContent;
        forumTitle.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                forumTitle.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }
});

// DEBUG INIT
console.log("INICIANDO DEBUG:");
console.log("Largura:", window.innerWidth);
console.log("Mobile?", window.innerWidth <= 768);

// FORÇAR LAYOUT MOBILE SE NECESSÁRIO
if (window.innerWidth <= 768) {
  console.log("APLICANDO LAYOUT MOBILE");
  document.querySelectorAll('.forum-container').forEach(el => {
    el.style.display = 'block';
  });
}
