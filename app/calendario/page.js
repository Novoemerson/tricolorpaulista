export default function Calendario() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-spfc-red mb-6">Calendário de Jogos</h1>
      <ul className="bg-white rounded-lg shadow divide-y">
        <li className="flex justify-between items-center px-4 py-3">
          <span>08/06 - São Paulo x Corinthians</span>
          <span className="bg-spfc-red text-white px-3 py-1 rounded text-sm">Próximo</span>
        </li>
        <li className="flex justify-between items-center px-4 py-3">
          <span>15/06 - Palmeiras x São Paulo</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">Futuro</span>
        </li>
        <li className="flex justify-between items-center px-4 py-3">
          <span>01/06 - São Paulo 2x1 Santos</span>
          <span className="bg-green-200 text-green-700 px-3 py-1 rounded text-sm">Vitória</span>
        </li>
      </ul>
      <p className="mt-4 text-sm text-gray-500">*Em breve: integração automática com calendário real.</p>
    </div>
  );
}
