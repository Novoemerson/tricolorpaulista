import Image from "next/image";

// Ícones SVG modernos
function LikeIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" className="inline align-middle text-yellow-600" viewBox="0 0 24 24"><path d="M6 21V9a2 2 0 0 1 2-2h5.28a2 2 0 0 1 1.72 1l3.12 5.2a2 2 0 0 1-1.72 3H8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function DislikeIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" className="inline align-middle text-gray-400" viewBox="0 0 24 24"><path d="M18 3v12a2 2 0 0 1-2 2H8.72a2 2 0 0 1-1.72-1L3.88 9.8A2 2 0 0 1 5.6 7h8.4a2 2 0 0 0 2-2V3a2 2 0 0 1 2-2h-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function ShareIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" className="inline align-middle text-blue-700" viewBox="0 0 24 24"><path d="M4 12v1a9 9 0 1 0 9-9h-1m0 0v6m0-6l-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}

// Dados fictícios para exemplo
const mainNews = {
  title: "Corinthians divulga lista de relacionados com três ausências e uma novidade contra o Racing",
  summary: "Maycon dominado a bola em treino. O Corinthians se prepara para enfrentar o Racing...",
  image: "/images/destaque.jpg",
  visits: "4.1 mil",
  comments: 49,
  likes: 55,
  dislikes: 7,
  shares: 7,
  link: "#"
};

const secondaryNews = [
  {
    id: 2,
    title: "Notícia destaque 2",
    visits: 1000,
    comments: 10,
    likes: 12,
    dislikes: 3,
    shares: 2,
    summary: "Notícia secundária",
    image: "/images/noticia2.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Notícia destaque 3",
    visits: 2000,
    comments: 20,
    likes: 24,
    dislikes: 6,
    shares: 4,
    summary: "Notícia secundária",
    image: "/images/noticia3.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "Notícia destaque 4",
    visits: 3000,
    comments: 30,
    likes: 36,
    dislikes: 9,
    shares: 6,
    summary: "Notícia secundária",
    image: "/images/noticia4.jpg",
    link: "#"
  }
];

const quickNews = [
  { id: 1, title: "Notícia rápida 1", summary: "Resumo da notícia 1 sobre o São Paulo..." },
  { id: 2, title: "Notícia rápida 2", summary: "Resumo da notícia 2 sobre o São Paulo..." },
  { id: 3, title: "Notícia rápida 3", summary: "Resumo da notícia 3 sobre o São Paulo..." }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50">

      {/* Menu fixo com sombra */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Image src="/spfc-logo.png" width={48} height={48} alt="SPFC" className="rounded" />
            <span className="text-2xl font-extrabold text-red-700 leading-tight">Tricolor<br/>Paulista</span>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-6 text-lg font-bold">
              <li><a href="#" className="hover:text-red-700 transition-colors">Notícias</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Fórum</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Vídeos</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Jogos</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Colunas</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Classificação</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Apostas</a></li>
              <li><a href="#" className="hover:text-red-700 transition-colors">Mais+</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Espaço para o menu fixo */}
      <div className="h-[78px]"></div>

      {/* Grid principal com destaque e secundárias */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
        {/* Card de destaque com imagem de fundo e overlay */}
        <article className="col-span-2 relative rounded-3xl overflow-hidden min-h-[340px] shadow-xl group flex flex-col justify-end">
          <Image
            src={mainNews.image}
            alt="Destaque"
            fill
            className="object-cover object-center absolute inset-0 z-0"
            style={{ filter: 'brightness(0.90)' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
          <div className="relative z-20 px-10 py-8 flex flex-col gap-4 text-white">
            <div className="flex gap-6 text-sm opacity-80">
              <span>{mainNews.visits} visitas</span>
              <span>{mainNews.comments} comentários</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg">{mainNews.title}</h1>
            <p className="text-lg font-medium">{mainNews.summary}</p>
            <a href={mainNews.link} className="text-red-300 font-bold hover:underline">Leia mais</a>
            <div className="flex gap-6 text-lg mt-2">
              <span className="flex items-center gap-1"><LikeIcon /> {mainNews.likes}</span>
              <span className="flex items-center gap-1"><DislikeIcon /> {mainNews.dislikes}</span>
              <span className="flex items-center gap-1"><ShareIcon /> {mainNews.shares} compartilhamentos</span>
            </div>
          </div>
        </article>

        {/* Cards secundários verticais com miniatura e hover */}
        <div className="flex flex-col gap-6">
          {secondaryNews.map(news => (
            <article
              key={news.id}
              className="bg-white rounded-2xl shadow flex items-center gap-4 p-4 hover:scale-[1.03] hover:shadow-2xl transition-all border border-transparent hover:border-red-100"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-20 h-20 object-cover rounded-lg shadow-sm"
              />
              <div className="flex-1">
                <span className="block text-xs text-green-700 font-bold mb-1">{news.summary}</span>
                <div className="flex gap-4 text-xs text-gray-500 mb-1">
                  <span>{news.visits} visitas</span>
                  <span>{news.comments} comentários</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{news.title}</h3>
                <a href={news.link} className="text-red-700 font-bold hover:underline">Leia mais</a>
                <div className="flex gap-4 mt-1 text-sm">
                  <span className="flex items-center gap-1"><LikeIcon /> {news.likes}</span>
                  <span className="flex items-center gap-1"><DislikeIcon /> {news.dislikes}</span>
                  <span className="flex items-center gap-1"><ShareIcon /> {news.shares}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Seção últimas notícias */}
      <section className="mt-10">
        <h2 className="text-2xl font-extrabold mb-4 text-gray-900">Últimas notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickNews.map(news => (
            <article key={news.id} className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-base mb-1 text-gray-900">{news.title}</h4>
              <p className="text-gray-700 mb-2">{news.summary}</p>
              <a href="#" className="text-red-700 text-sm font-semibold hover:underline">Leia mais</a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
