export default function Home() {
  return (
    <div className="space-y-8">
      {/* Notícia de Capa */}
      <section>
        <h2 className="text-4xl font-bold text-red-700 mb-6">Notícia Capa</h2>
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src="/spfc-palmeiras.jpg" // Coloque a imagem em public/spfc-palmeiras.jpg
            alt="SPFC x Palmeiras"
            className="w-full md:w-1/2 h-64 object-cover"
          />
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
              São Paulo vence clássico e sobe na tabela!
            </h3>
            <p className="text-gray-700 mb-4">
              O Tricolor Paulista mostrou força no Morumbi, vencendo o Palmeiras em um jogo eletrizante...
            </p>
            <a href="#" className="text-red-700 hover:underline font-semibold">Leia mais</a>
          </div>
        </div>
      </section>

      {/* Últimas Notícias */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Últimas Notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow p-6 border-l-4 border-red-700">
            <h4 className="font-bold text-lg mb-1">SPFC estreia na Libertadores</h4>
            <p className="text-gray-700 mb-2">
              O São Paulo inicia sua campanha na Libertadores em busca do tetra...
            </p>
            <a href="#" className="text-red-700 hover:underline font-semibold">Leia mais</a>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow p-6 border-l-4 border-red-700">
            <h4 className="font-bold text-lg mb-1">Novo reforço é anunciado</h4>
            <p className="text-gray-700 mb-2">
              O clube confirmou a contratação do atacante destaque do Paulistão...
            </p>
            <a href="#" className="text-red-700 hover:underline font-semibold">Leia mais</a>
          </div>
        </div>
      </section>
    </div>
  );
}
