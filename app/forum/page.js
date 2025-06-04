export default function Forum() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-spfc-red mb-6">Fórum Tricolor</h1>
      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="font-semibold text-lg">Qual o melhor jogador do SPFC em 2025?</h2>
          <p>Participe da discussão e vote no seu favorito!</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="font-semibold text-lg">Próximo jogo: expectativas?</h2>
          <p>Deixe seu palpite para o próximo clássico no Morumbi.</p>
        </div>
      </div>
    </div>
  );
}
