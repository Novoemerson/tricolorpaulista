// Menu Mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Controle do Fórum
function setupForum() {
    const isMobile = window.innerWidth <= 768;
    console.log(`Modo: ${isMobile ? 'MOBILE' : 'DESKTOP'}`);
    
    // Ajusta o layout
    const forumLists = document.querySelectorAll('.topicos-lista');
    forumLists.forEach(list => {
        list.style.display = isMobile ? 'block' : 'grid';
    });
    
    // Ajusta os itens
    const topicItems = document.querySelectorAll('.topico-item');
    topicItems.forEach(item => {
        if (isMobile) {
            item.style.display = 'flex';
            item.style.flexDirection = 'column';
        } else {
            item.style.display = 'grid';
        }
    });
}

// Inicialização
window.addEventListener('load', setupForum);
window.addEventListener('resize', function() {
    setTimeout(setupForum, 100);
});

// Efeitos de hover (apenas desktop)
if (window.innerWidth > 768) {
    document.querySelectorAll('.topico-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        });
    });
}
