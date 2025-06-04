import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-red-700 flex items-center px-4 py-2 shadow">
          <img src="/spfc-logo.png" alt="SPFC" className="h-10 mr-2" />
          <span className="text-white font-bold text-2xl tracking-wide">Tricolor Paulista</span>
          <nav className="ml-auto space-x-6">
            <a href="/" className="text-white hover:underline">Início</a>
            <a href="/forum" className="text-white hover:underline">Fórum</a>
            <a href="/classificacao" className="text-white hover:underline">Classificação</a>
            <a href="/calendario" className="text-white hover:underline">Calendário</a>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
