import "../styles/globals.css";
import Head from "next/head";

export const metadata = {
  title: "Tricolor Paulista - Notícias do São Paulo FC, resultados e próximos jogos",
  description: "Notícias do São Paulo, próximos jogos, resultados, vídeos, elenco e tudo sobre o Tricolor Paulista.",
  openGraph: {
    title: "Tricolor Paulista - Notícias do São Paulo FC, resultados e próximos jogos",
    description: "Notícias do São Paulo, próximos jogos, resultados, vídeos, elenco e tudo sobre o Tricolor Paulista.",
    url: "https://www.tricolorpaulista.com.br/",
    siteName: "Tricolor Paulista",
    images: [
      {
        url: "https://tricolorpaulista.vercel.app/images/", // Troque por sua imagem
        width: 1200,
        height: 600,
        alt: "Tricolor Paulista logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TricolorPaulista",
    creator: "@TricolorPaulista",
    title: "Tricolor Paulista - Notícias do São Paulo FC, resultados e próximos jogos",
    description: "Notícias do São Paulo, próximos jogos, resultados, vídeos, elenco e tudo sobre o Tricolor Paulista.",
    images: [
      "https://tricolorpaulista.vercel.app/images/"
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://api.meutimao.com.br/img/ico/chrome-touch-icon-152x152.png"/>
        <link rel="apple-touch-icon-precomposed" sizes="180x180" href="https://api.meutimao.com.br/img/ico/chrome-touch-icon-180x180.png"/>
        <meta name="msapplication-TileImage" content="https://api.meutimao.com.br/img/ico/apple-touch-144x144.png"/>
        <meta name="msapplication-TileColor" content="#000000"/>
        <link rel="manifest" href="/manifest.json?v=65"/>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
        <link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/ginkglnlpcgmjafipbkpfoimoaoabami" />
        <link rel="image_src" href="https://tricolorpaulista.vercel.app/images/" />
        <meta property="fb:app_id" content="169492406456685" />
        <meta property="fb:pages" content="306026178972" />
        <meta property="og:image" content="https://tricolorpaulista.vercel.app/images/" />
        <meta property="og:image:secure_url" content="https://tricolorpaulista.vercel.app/images/" />
        <meta property="og:image:url" content="https://tricolorpaulista.vercel.app/images/" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="600"/>
        <meta property="article:publisher" content="Tricolor Paulista"/>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tricolor Paulista"/>
        <meta property="og:title" content="Tricolor Paulista - Notícias do São Paulo FC, resultados e próximos jogos" />
        <meta property="og:description" content="Notícias do São Paulo, próximos jogos, resultados, vídeos, elenco e tudo sobre o Tricolor Paulista." />
        <meta property="og:url" content="https://www.tricolorpaulista.com.br/" />
        <meta property="twitter:account_id" content="4503599627804636" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:creator" content="@TricolorPaulista"/>
        <meta name="twitter:site" content="@TricolorPaulista"/>
        <meta name="twitter:title" content="Tricolor Paulista - Notícias do São Paulo FC, resultados e próximos jogos"/>
        <meta name="twitter:description" content="Notícias do São Paulo, próximos jogos, resultados, vídeos, elenco e tudo sobre o Tricolor Paulista."/>
        <meta name="twitter:image" content="https://tricolorpaulista.vercel.app/images/" />
        <meta name="script" content="-index"/>
        <link rel="preload" href="/fontes/cuprum-v14-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fontes/cuprum-v14-latin-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fontes/yanone-kaffeesatz-v18-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fontes/yanone-kaffeesatz-v18-latin-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <meta name="google-signin-client_id" content="760323263491-l1n6f1nl5bm6m3nh3skpcl3m0vmsns5o.apps.googleusercontent.com"/>
      </head>
      <body className="home bg-gray-50 min-h-screen text-gray-900">
        {children}
      </body>
    </html>
  );
}


<body className="home bg-gray-50 min-h-screen text-gray-900">
  <header className="bg-red-700 text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/spfc-logo.png" width={40} height={40} alt="SPFC" />
        <span className="ml-2 font-bold text-xl">Tricolor Paulista</span>
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-yellow-300">Notícias</a>
        <a href="/classificacao" className="hover:text-yellow-300">Classificação</a>
        <a href="/calendario" className="hover:text-yellow-300">Calendário</a>
        <a href="/forum" className="hover:text-yellow-300">Fórum</a>
      </nav>
    </div>
  </header>
  {children}
</body>
