// Menu Mobile
document.querySelector('.menu-toggle')?.addEventListener('click', function() {
  document.querySelector('.nav-menu').classList.toggle('active');
});

// Controle do Fórum
function initForum() {
  // Controle de abas
  const tabs = document.querySelectorAll('.forum-tabs li');
  const contents = document.querySelectorAll('.topicos-lista');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove classe ativa de todas as abas
      tabs.forEach(t => t.classList.remove('active'));
      
      // Adiciona classe ativa na aba clicada
      this.classList.add('active');
      
      // Esconde todos os conteúdos
      contents.forEach(c => c.classList.remove('active-tab'));
      
      // Mostra o conteúdo correspondente
      const tabId = this.getAttribute('data-tab');
      document.getElementById(`${tabId}-tab`).classList.add('active-tab');
    });
  });
  
  // Controle responsivo
  function updateLayout() {
    const isMobile = window.innerWidth <= 768;
    const forumLists = document.querySelectorAll('.topicos-lista');
    
    forumLists.forEach(list => {
      list.style.display = isMobile ? 'block' : 'grid';
    });
  }
  
  window.addEventListener('resize', updateLayout);
  updateLayout();
}

// Inicialização
document.addEventListener('DOMContentLoaded', initForum);
