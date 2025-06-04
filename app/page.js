export default function Home() {
  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-spfc-red">Notícia Capa</h1>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <img src="/assets/forum/spfc-palmeiras.jpg" alt="SPFC x Palmeiras" className="w-full md:w-1/2 object-cover h-64" />
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-2">São Paulo vence clássico e sobe na tabela!</h2>
            <p className="mb-4">
              O Tricolor Paulista mostrou força no Morumbi, vencendo o Palmeiras em um jogo eletrizante...
            </p>
            <a href="#" className="text-spfc-red hover:underline font-medium">Leia mais</a>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Últimas Notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4 shadow">
            <h3 className="font-semibold text-lg mb-2">SPFC estreia na Libertadores</h3>
            <p className="mb-2">O São Paulo inicia sua campanha na Libertadores em busca do tetra...</p>
            <a href="#" className="text-spfc-red hover:underline">Leia mais</a>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 shadow">
            <h3 className="font-semibold text-lg mb-2">Novo reforço é anunciado</h3>
            <p className="mb-2">O clube confirmou a contratação do atacante destaque do Paulistão...</p>
            <a href="#" className="text-spfc-red hover:underline">Leia mais</a>
          </div>
        </div>
      </section>
    </div>
  );
}
