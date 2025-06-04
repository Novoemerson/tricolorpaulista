import '../styles/globals.css';

export const metadata = {
  title: "Tricolor Paulista",
  description: "Site do São Paulo Futebol Clube com notícias, fórum, classificação e mais!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-zinc-900 dark:bg-spfc-red dark:text-white min-h-screen">
        <header className="w-full bg-spfc-red text-white py-4 shadow-md">
          <div className="container mx-auto flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <img src="/assets/icons/logo-icon.svg" alt="SPFC" className="h-8 w-8" />
              <span className="font-bold text-xl tracking-tight">Tricolor Paulista</span>
            </div>
            <nav className="space-x-4">
              <a href="/" className="hover:underline">Início</a>
              <a href="/forum" className="hover:underline">Fórum</a>
              <a href="/classificacao" className="hover:underline">Classificação</a>
              <a href="/calendario" className="hover:underline">Calendário</a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
