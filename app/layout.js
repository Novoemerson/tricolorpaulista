import "../styles/globals.css";
import Head from "next/head";
import Image from "next/image";

export const metadata = {
  title: "Tricolor Paulista - Notícias do São Paulo FC",
  description: "Notícias do São Paulo, próximos jogos, resultados e mais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Outras meta tags... */}
      </head>
      <body className="home bg-gray-50 min-h-screen text-gray-900">
        {/* Cabeçalho fixo */}
        <header className="bg-red-700 text-white p-4 shadow-md fixed top-0 w-full z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Image 
                src="/spfc-logo.png" 
                width={40} 
                height={40} 
                alt="SPFC" 
                className="rounded"
              />
              <span className="ml-2 text-xl font-bold">Tricolor Paulista</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-yellow-300">Notícias</a>
              <a href="/classificacao" className="hover:text-yellow-300">Classificação</a>
              <a href="/calendario" className="hover:text-yellow-300">Calendário</a>
              <a href="/forum" className="hover:text-yellow-300">Fórum</a>
            </nav>
          </div>
        </header>

        {/* Conteúdo principal */}
        <main className="pt-20 pb-10"> {/* Espaço para o cabeçalho fixo */}
          {children}
        </main>
      </body>
    </html>
  );
}
