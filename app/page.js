import Image from "next/image";

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
            <Image src="/spfc-logo.png" width={100} height={100} alt="SPFC" className="rounded" />
            <span className="text-2xl font-extrabold text-red-700 leading-tight">Tricolor<br/>Paulista</span>
          </div>
 
        </div>
      </header>

      {/* Espaço para o menu fixo */}
      <div className="h-[78px]"></div>

      {/* Grid principal com destaque e secundárias */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
        {/* Card de destaque com imagem de fundo e overlay */}
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

<section className="bg-gray-50 py-10 mt-16 border-t border-gray-200">
  <div className="max-w-6xl mx-auto px-4">
    {/* Título do fórum */}
    <h2 className="text-center text-4xl font-black italic text-gray-900 mb-12 tracking-tight">
      <span className="text-red-700">//</span> FÓRUM DO TRICOLOR <span className="text-red-700">//</span>
    </h2>

    {/* Principais tópicos em destaque */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      {/* Exemplo de tópico em destaque */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src="/images/topico1.jpg"
            alt="Reforma do estatuto"
            className="w-36 h-36 object-cover rounded-full border-4 border-red-700 shadow-lg"
          />
          {/* Votos e ícone */}
          <div className="absolute -top-4 -right-4 bg-white rounded-full flex flex-col items-center px-2 py-1 shadow">
            <span className="font-bold text-red-700 text-lg">72</span>
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M7 11V5a5 5 0 1 1 10 0v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 11h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V11z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="text-center mt-4 font-bold text-lg">
          Essa reforma do estatuto tem meu total APOIO!
        </div>
        <div className="flex justify-center gap-4 mt-2 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20">
              <path d="M18 10c0 4-3 7-8 7S2 14 2 10V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5z"/>
            </svg>
            13
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20">
              <path d="M17 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
              <path d="M3 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"/>
            </svg>
            828
          </span>
        </div>
      </div>

      {/* Repita mais 3 tópicos em destaque, trocando imagem/título/números */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src="/images/topico2.jpg"
            alt="Revolução tricolor"
            className="w-36 h-36 object-cover rounded-full border-4 border-red-700 shadow-lg"
          />
          <div className="absolute -top-4 -right-4 bg-white rounded-full flex flex-col items-center px-2 py-1 shadow">
            <span className="font-bold text-red-700 text-lg">45</span>
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {/* mesmo ícone */}
              <path d="M7 11V5a5 5 0 1 1 10 0v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 11h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V11z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="text-center mt-4 font-bold text-lg">
          Revolução tricolor
        </div>
        <div className="flex justify-center gap-4 mt-2 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20">
              <path d="M18 10c0 4-3 7-8 7S2 14 2 10V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5z"/>
            </svg>
            9
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20">
              <path d="M17 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
              <path d="M3 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"/>
            </svg>
            526
          </span>
        </div>
      </div>
      {/* ...mais tópicos... */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src="/images/topico3.jpg"
            alt="Parem de reclamar"
            className="w-36 h-36 object-cover rounded-full border-4 border-red-700 shadow-lg"
          />
          <div className="absolute -top-4 -right-4 bg-white rounded-full flex flex-col items-center px-2 py-1 shadow">
            <span className="font-bold text-red-700 text-lg">120</span>
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M7 11V5a5 5 0 1 1 10 0v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 11h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V11z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="text-center mt-4 font-bold text-lg">
          Parem de reclamar de quem faz alguma coisa!
        </div>
        <div className="flex justify-center gap-4 mt-2 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20">
              <path d="M18 10c0 4-3 7-8 7S2 14 2 10V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5z"/>
            </svg>
            77
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20">
              <path d="M17 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
              <path d="M3 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"/>
            </svg>
            1.327
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src="/images/topico4.jpg"
            alt="A crise financeira"
            className="w-36 h-36 object-cover rounded-full border-4 border-red-700 shadow-lg"
          />
          <div className="absolute -top-4 -right-4 bg-white rounded-full flex flex-col items-center px-2 py-1 shadow">
            <span className="font-bold text-red-700 text-lg">53</span>
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M7 11V5a5 5 0 1 1 10 0v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 11h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V11z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="text-center mt-4 font-bold text-lg">
          A crise financeira de 1915
        </div>
        <div className="flex justify-center gap-4 mt-2 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20">
              <path d="M18 10c0 4-3 7-8 7S2 14 2 10V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5z"/>
            </svg>
            19
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20">
              <path d="M17 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
              <path d="M3 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"/>
            </svg>
            899
          </span>
        </div>
      </div>
    </div>

    {/* Tópicos populares */}
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <div className="flex items-center mb-3">
        <span className="text-yellow-500 text-2xl font-bold mr-2">+</span>
        <span className="uppercase tracking-wide font-extrabold italic text-gray-700 text-lg">Tópicos Populares</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Exemplo de tópico popular */}
        <div>
          <div className="text-xs text-gray-500 font-semibold mb-1">ÚLTIMA RESPOSTA 2 MINUTOS</div>
          <div className="flex gap-2 items-center mb-1">
            <span className="font-bold text-sm text-gray-700">20</span>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 20 20"><path d="M18 10c0 4-3 7-8 7S2 14 2 10V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5z"/></svg>
            <span className="text-xs text-gray-600">1.746</span>
          </div>
          <div className="text-base font-semibold text-gray-900">Ah, mas o Calleri vai embora por conta da turbulência</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 font-semibold mb-1">ÚLTIMA RESPOSTA 3 MINUTOS</div>
          <div className="flex gap-2 items-center mb-1">
            <span className="font-bold text-sm text-gray-700">17</span>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 20 20"><path d="M18 10c0 4-3 7-8 7S2 14 2 10V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5z"/></svg>
            <span className="text-xs text-gray-600">905</span>
          </div>
          <div className="text-base font-semibold text-gray-900">O nome dos dirigentes do SPFC parece elenco da praça é nossa kkk</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 font-semibold mb-1">ÚLTIMA RESPOSTA 34 MINUTOS</div>
          <div className="flex gap-2 items-center mb-1">
            <span className="font-bold text-sm text-gray-700">5</span>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 20 20"><path d="M18 10c0 4-3 7-8 7S2 14 2 10V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5z"/></svg>
            <span className="text-xs text-gray-600">484</span>
          </div>
          <div className="text-base font-semibold text-gray-900">100% com a Independente! Mudança no estatuto já!</div>
        </div>
      </div>
      {/* Links para criar/ver todos */}
      <div className="flex justify-end mt-6 gap-6">
        <a href="#" className="uppercase text-sm font-bold text-red-700 hover:underline">Criar novo tópico +</a>
        <a href="#" className="uppercase text-sm font-bold text-gray-600 hover:underline">Ver todos os tópicos</a>
      </div>
    </div>
  </div>
</section>
        </div>
  );
}



import NewsCard from "@/components/NewsCard";

// ... no seu código, substitua as notícias secundárias por:
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {secondaryNews.map(news => (
    <NewsCard key={news.id} news={news} />
  ))}
</div>



import { news } from '@/data/news'



import ForumSection from "@/components/ForumSection";

// Dentro do seu componente Home:
export default function Home() {
  return (
    <div>
      {/* Seu conteúdo existente... */}
      <ForumSection />
    </div>
  );
}
