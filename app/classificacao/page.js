export default function Classificacao() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-spfc-red mb-6">Classificação do Brasileirão</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse bg-white shadow rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Posição</th>
              <th className="px-4 py-2 border">Time</th>
              <th className="px-4 py-2 border">Pontos</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-bold text-spfc-red">
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">São Paulo</td>
              <td className="border px-4 py-2">18</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">Palmeiras</td>
              <td className="border px-4 py-2">21</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">Flamengo</td>
              <td className="border px-4 py-2">20</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-500">*Exemplo estático. Em breve: atualização automática!</p>
    </div>
  );
}


export default function Classificacao() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Classificação</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Posição</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2">Pontos</th>
              <th className="px-4 py-2">Jogos</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2 font-bold">1</td>
              <td className="px-4 py-2 flex items-center">
                <img src="/spfc-logo.png" alt="SPFC" className="w-6 h-6 mr-2" />
                São Paulo FC
              </td>
              <td className="px-4 py-2 text-center">25</td>
              <td className="px-4 py-2 text-center">10</td>
            </tr>
            {/* Adicione mais times aqui */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
