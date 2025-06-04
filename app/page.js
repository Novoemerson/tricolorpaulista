import Image from "next/image";

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
    image: "/images/noticia2.jpg"
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
    image: "/images/noticia3.jpg"
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
    image: "/images/noticia4.jpg"
  }
];

function LikeIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" className="inline mr-1 text-yellow-600" viewBox="0 0 24 24"><path d="M6 21V9a2 2 0 0 1 2-2h5.28a2 2 0 0 1 1.72 1l3.12 5.2a2 2 0 0 1-1.72 3H8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function DislikeIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" className="inline mr-1 text-gray-400" viewBox="0 0 24 24"><path d="M18 3v12a2 2 0 0 1-2 2H8.72a2 2 0 0 1-1.72-1L3.88 9.8A2 2 0 0 1 5.6 7h8.4a2 2 0 0 0 2-2V3a2 2 0 0 1 2-2h-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function ShareIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" className="inline mr-1 text-blue-700" viewBox="0 0 24 24"><path d="M4 12v1a9 9 0 1 0 9-9h-1m0 0v6m0-6l-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Menu fixo */}
      <header className="flex flex-col md:flex-row items-center gap-4 mb-8 sticky top-0 bg-gray-50 z-10 shadow-sm py-3">
        <div className="flex items-center gap-3">
          <Image src="/spfc-logo.png" width={56} height={56} alt="SPFC" className="rounded" />
          <span className="text-4xl font-extrabold text-red-700 leading-tight">Tricolor<br/>Paulista</span>
        </div>
        <nav className="flex-1 md:ml-8">
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-lg font-semibold">
            <li><a href="#" className="hover:text-red-700 transition">Notícias</a></li>
            <li><a href="#" className="hover:text-red-700 transition">Fórum</a></li>
            <li><a href="#" className="hover:text-red-700 transition">Vídeos</a></li>
            <li><a href="#" className="hover:text-red-700 transition">Jogos</a></li>
            <li><a href="#" className="hover:text-red-700 transition">Colunas</a></li>
            <li><a href="#" className="hover:text-red-700 transition">Classificação</a></li>
            <li><a href="#" className="hover:text-red-700 transition">Apostas</a></li>
            <li><a href="#" className="hover:text-red-700 transition">Mais+</a></li>
          </ul>
        </nav>
      </header>

      {/* Destaque + Secundárias */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Card Principal */}
        <article className="col-span-2 bg-white rounded-2xl shadow-xl flex overflow-hidden hover:shadow-2xl transition-shadow relative group min-h-[340px]">
          {/* Imagem com overlay */}
          <div className="w-1/2 relative min-h-[340px] hidden md:block">
            <img
              src="/images/destaque.jpg"
              alt="Destaque"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition"></div>
          </div>
          {/* Conteúdo principal */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100">
            <div className="mb-2 flex gap-6 text-gray-500 text-sm">
              <span>4.1 mil visitas</span>
              <span>49 comentários</span>
            </div>
            <h2 className="text-3xl font-bold mb-3 text-gray-900 leading-snug drop-shadow-lg">
              Corinthians divulga lista de relacionados com três ausências e uma novidade contra o Racing
            </h2>
            <p className="text-gray-700 mb-4">
              Maycon dominado a bola em treino. O Corinthians se prepara para enfrentar o Racing...
            </p>
            <a href="#" className="text-red-700 font-semibold hover:underline transition">Leia mais</a>
            <div className="flex gap-6 text-md mt-6">
              <span className="flex items-center gap-1"><LikeIcon /> 55</span>
              <span className="flex items-center gap-1"><DislikeIcon /> 7</span>
              <span className="flex items-center gap-1"><ShareIcon /> 7 compartilhamentos</span>
            </div>
          </div>
        </article>
        {/* Notícias secundárias */}
        <div className="flex flex-col gap-6">
          {secondaryNews.map(news => (
            <article key={news.id} className="bg-white rounded-xl shadow hover:shadow-2xl transition-shadow flex flex-row items-center p-4 gap-4 group">
              <img
                src={news.image}
                alt={news.title}
                className="w-16 h-16 object-cover rounded-lg shadow-sm hidden md:block"
              />
              <div className="flex-1">
                <span className="block text-xs text-green-700 font-semibold mb-1">{news.summary}</span>
                <div className="flex gap-4 text-xs text-gray-500 mb-1">
                  <span>{news.visits} visitas</span>
                  <span>{news.comments} comentários</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{news.title}</h3>
                <a href="#" className="text-red-700 font-semibold hover:underline">Leia mais</a>
                <div className="flex gap-4 mt-2 text-sm">
                  <span className="flex items-center gap-1"><LikeIcon /> {news.likes}</span>
                  <span className="flex items-center gap-1"><DislikeIcon /> {news.dislikes}</span>
                  <span className="flex items-center gap-1"><ShareIcon /> {news.shares} compartilhamentos</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
