export default function ForumSection() {
  return (
    <section className="bg-gray-50 py-10 mt-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl font-black italic text-gray-900 mb-12 tracking-tight">
          <span className="text-red-700">//</span> FÓRUM DO TRICOLOR <span className="text-red-700">//</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Exemplo de tópico em destaque */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src="/images/topico1.jpg"
                alt="Reforma do estatuto"
                className="w-36 h-36 object-cover rounded-full border-4 border-red-700 shadow-lg"
              />
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

          {/* Adicione mais tópicos conforme necessário */}
        </div>

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
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                  <path d="M18 10c0 4-3 7-8 7S2 14 2 10V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5z"/>
                </svg>
                <span className="text-xs text-gray-600">1.746</span>
              </div>
              <div className="text-base font-semibold text-gray-900">Ah, mas o Calleri vai embora por conta da turbulência</div>
            </div>
            {/* Adicione mais tópicos populares */}
          </div>
          
          <div className="flex justify-end mt-6 gap-6">
            <a href="#" className="uppercase text-sm font-bold text-red-700 hover:underline">Criar novo tópico +</a>
            <a href="#" className="uppercase text-sm font-bold text-gray-600 hover:underline">Ver todos os tópicos</a>
          </div>
        </div>
      </div>
    </section>
  );
}
