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
const quickNews = [
  { id: 1, title: "Notícia rápida 1", summary: "Resumo da notícia 1 sobre o São Paulo..." },
  { id: 2, title: "Notícia rápida 2", summary: "Resumo da notícia 2 sobre o São Paulo..." },
  { id: 3, title: "Notícia rápida 3", summary: "Resumo da notícia 3 sobre o São Paulo..." }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <div className="flex items-center gap-3">
          <Image src="/spfc-logo.png" width={56} height={56} alt="SPFC" className="rounded" />
          <span className="text-4xl font-extrabold text-red-700 leading-tight">Tricolor<br/>Paulista</span>
        </div>
        <nav className="flex-1 md:ml-8">
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-lg font-semibold">
            <li><a href="#" className="hover:text-red-700">Notícias</a></li>
            <li><a href="#" className="hover:text-red-700">Fórum</a></li>
            <li><a href="#" className="hover:text-red-700">Vídeos</a></li>
            <li><a href="#" className="hover:text-red-700">Jogos</a></li>
            <li><a href="#" className="hover:text-red-700">Colunas</a></li>
            <li><a href="#" className="hover:text-red-700">Classificação</a></li>
            <li><a href="#" className="hover:text-red-700">Apostas</a></li>
            <li><a href="#" className="hover:text-red-700">Mais+</a></li>
          </ul>
        </nav>
      </header>

      {/* Destaque + Secundárias */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Card Principal */}
        <article className="col-span-2 bg-white rounded-2xl shadow-xl flex overflow-hidden hover:shadow-2xl transition-shadow">
          <div className="w-1/2 relative min-h-[320px] hidden md:block">
            <Image
              src="/images/destaque.jpg"
              alt="Destaque"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay degrade sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/30"></div>
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <div className="flex gap-6 text-gray-500 text-sm mb-1">
                <span>4.1 mil visitas</span>
                <span>49 comentários</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 leading-snug">
                Corinthians divulga lista de relacionados com três ausências e uma novidade contra o Racing
              </h2>
              <p className="text-gray-700 mb-4">
                Maycon dominado a bola em treino. O Corinthians se prepara para enfrentar o Racing...
              </p>
              <a href="#" className="text-red-700 font-semibold hover:underline">Leia mais</a>
            </div>
            <div className="flex gap-6 text-md mt-6">
              <span className="flex items-center gap-1 text-yellow-600">👍 55</span>
              <span className="flex items-center gap-1 text-gray-400">👎 7</span>
              <span className="flex items-center gap-1 text-blue-700">🔗 7 compartilhamentos</span>
            </div>
          </div>
        </article>
        {/* Notícias secundárias */}
        <div className="flex flex-col gap-4">
          {secondaryNews.map(news => (
            <article key={news.id} className="bg-white rounded-xl shadow group hover:shadow-2xl transition-shadow flex flex-col p-4">
              <div className="flex-1">
                <span className="block text-xs text-green-700 font-semibold mb-1">{news.summary}</span>
                <div className="flex gap-4 text-xs text-gray-500 mb-1">
                  <span>{news.visits} visitas</span>
                  <span>{news.comments} comentários</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{news.title}</h3>
                <a href="#" className="text-red-700 font-semibold hover:underline">Leia mais</a>
              </div>
              <div className="flex gap-4 mt-2 text-sm">
                <span className="flex items-center gap-1 text-yellow-600">👍 {news.likes}</span>
                <span className="flex items-center gap-1 text-gray-400">👎 {news.dislikes}</span>
                <span className="flex items-center gap-1 text-blue-700">🔗 {news.shares} compartilhamentos</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Últimas notícias */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Últimas notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickNews.map(news => (
            <article key={news.id} className="bg-white rounded-xl shadow p-4 hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-base mb-1">{news.title}</h4>
              <p className="text-gray-700 mb-2">{news.summary}</p>
              <a href="#" className="text-red-700 text-sm font-semibold hover:underline">Leia mais</a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
