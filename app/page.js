import Image from "next/image";
import NewsCard from "@/components/NewsCard";
import ForumSection from "@/components/ForumSection";

// Ícones SVG
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
  title: "SAF no São Paulo? Casares admite que é 'tendência' e revela 'plano mundial' até 2030",
  summary: "Disse“A SAF não é um milagre, mas acredito que o melhor modelo é algo que priorize a gestão do futebol”, iniciou.",
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

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      {/* Menu fixo com sombra */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Image src="/spfc-logo.png" width={100} height={100} alt="SPFC" className="rounded" />
            <span className="text-2xl font-extrabold text-red-700 leading-tight">Tricolor<br/>Paulista</span>
          </div>
        </div>
      </header>

      {/* Espaço para o menu fixo */}
      <div className="h-[78px]"></div>

      {/* Grid principal com destaque e secundárias */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
        {/* Card de destaque */}
        <article className="col-span-2 relative rounded-3xl overflow-hidden min-h-[340px] shadow-xl group flex flex-col justify-end">
          <Image
            src={mainNews.image}
            alt="Destaque"
            fill
            className="object-cover object-center absolute inset-0 z-0"
            style={{ filter: 'brightness(0.88)' }}
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

        {/* Cards secundários */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryNews.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </section>

      {/* Seção do Fórum */}
      <ForumSection />
    </div>
  );
}
