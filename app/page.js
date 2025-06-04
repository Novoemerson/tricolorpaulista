import Image from "next/image";

export default function Home() {
  return (
    <div id="content" className="max-w-5xl mx-auto py-6 px-2">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between mb-6 px-4">
        <div className="flex items-center mb-2 md:mb-0">
          <Image src="/spfc-logo.png" width={48} height={48} alt="SPFC" className="mr-2" />
          <h1 className="text-3xl md:text-4xl font-bold text-red-700">Tricolor Paulista</h1>
        </div>
        <nav>
          <ul className="flex flex-wrap gap-4 text-lg font-semibold text-gray-800">
            <li><a href="/" className="hover:text-red-700">Notícias</a></li>
            <li><a href="/forum" className="hover:text-red-700">Fórum</a></li>
            <li><a href="/videos" className="hover:text-red-700">Vídeos</a></li>
            <li><a href="/jogos" className="hover:text-red-700">Jogos</a></li>
            <li><a href="/colunas" className="hover:text-red-700">Colunas</a></li>
            <li><a href="/classificacao" className="hover:text-red-700">Classificação</a></li>
            <li><a href="/apostas" className="hover:text-red-700">Apostas</a></li>
            <li><a href="/mais" className="hover:text-red-700">Mais+</a></li>
          </ul>
        </nav>
      </header>

      {/* Mosaico de notícias */}
      <section id="mosaico" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Destaque principal */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <img
            src="https://cdn.meutimao.com.br/_upload/_crop/fw/941/fotos-do-corinthians/w941/2025/05/13/maycon_dominado_a_bola_em_treino_do_corinthians_1kdm.jpg"
            alt="Maycon no treino"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6 flex flex-col justify-center flex-1">
            <div className="flex gap-4 mb-2 text-sm text-gray-500">
              <span>4.1 mil visitas</span>
              <span>49 comentários</span>
            </div>
            <h2 className="text-2xl font-bold mb-1 text-gray-900">
              Corinthians divulga lista de relacionados com três ausências e uma novidade contra o Racing
            </h2>
            <p className="mb-4 text-gray-700">
              Maycon dominado a bola em treino. O Corinthians se prepara para enfrentar o Racing...
            </p>
            <a href="#" className="text-red-700 hover:underline font-semibold">Leia mais</a>
            {/* Interações */}
            <div className="flex gap-4 mt-2 text-sm">
              <span className="flex items-center gap-1"><b>👍</b> 55</span>
              <span className="flex items-center gap-1"><b>👎</b> 7</span>
              <span className="flex items-center gap-1"><b>🔗</b> 7 compartilhamentos</span>
            </div>
          </div>
        </article>

        {/* Outros Destaques */}
        <div className="flex flex-col gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="bg-white rounded-xl shadow overflow-hidden flex">
              <img
                src={`https://cdn.meutimao.com.br/_upload/_crop/fw/460/fotos-do-corinthians/w941/2025/05/0${i+9}/raniele_com_a_bola_durante_treino_do_corinthians_sj9s.jpg`}
                alt="Notícia secundária"
                className="w-40 h-32 object-cover"
              />
              <div className="p-4 flex-1">
                <div className="flex gap-4 mb-1 text-sm text-gray-500">
                  <span>{i*1000} visitas</span>
                  <span>{i*10} comentários</span>
                </div>
                <h3 className="font-bold text-lg mb-1">Notícia destaque {i+1}</h3>
                <a href="#" className="text-red-700 hover:underline font-semibold">Leia mais</a>
                <div className="flex gap-3 mt-2 text-xs">
                  <span>👍 {i*12}</span>
                  <span>👎 {i*3}</span>
                  <span>🔗 {i*2} compartilhamentos</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Últimas notícias */}
      <section id="ultimas_noticias_lista" className="mt-14">
        <h3 className="text-2xl font-bold mb-4">Últimas notícias</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <article key={i} className="bg-gray-50 rounded-lg shadow p-4 hover:shadow-lg transition-all">
              <h4 className="font-bold text-base mb-1">Notícia rápida {i}</h4>
              <p className="text-gray-700 text-sm mb-2">Resumo da notícia {i} sobre o São Paulo...</p>
              <a href="#" className="text-red-700 hover:underline text-sm font-medium">Leia mais</a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
