import Image from "next/image";

export default function ForumSection() {
  const featuredTopics = [
    {
      id: 1,
      title: "Essa reforma do estatuto tem meu total APOIO!",
      votes: 72,
      comments: 13,
      views: 828,
      image: "/images/forum/estatuto.jpg"
    },
    {
      id: 2,
      title: "Revolução tricolor",
      votes: 45,
      comments: 9,
      views: 526,
      image: "/images/forum/revolucao.jpg"
    },
    // Adicione mais tópicos conforme necessário
  ];

  const popularTopics = [
    {
      id: 1,
      title: "Ah, mas o Calleri vai embora por conta da turbulência",
      lastReply: "2 minutos",
      replies: 20,
      views: 1746
    },
    // Adicione mais tópicos populares
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-spfc-red/5 to-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho do Fórum */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black italic text-spfc-red mb-4">
            <span className="text-black">//</span> FÓRUM DO TRICOLOR <span className="text-black">//</span>
          </h2>
          <p className="text-lg text-gray-600">Onde a paixão pelo São Paulo FC se encontra</p>
        </div>

        {/* Tópicos em Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredTopics.map(topic => (
            <div key={topic.id} className="bg-white rounded-xl shadow-spfc overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold text-xl">{topic.title}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full w-12 h-12 flex flex-col items-center justify-center shadow-lg">
                  <span className="font-bold text-spfc-red">{topic.votes}</span>
                  <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                    {topic.comments}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    {topic.views}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tópicos Populares */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-spfc-red text-white px-6 py-4">
            <h3 className="text-xl font-bold flex items-center">
              <svg className="w-6 h-6 mr-2 text-spfc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
              </svg>
              TÓPICOS POPULARES
            </h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {popularTopics.map(topic => (
              <div key={topic.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs text-gray-500 font-semibold">ÚLTIMA RESPOSTA {topic.lastReply}</span>
                    <div className="flex gap-4 items-center my-2">
                      <span className="font-bold text-lg text-spfc-red">{topic.replies}</span>
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                      </svg>
                      <span className="text-sm text-gray-600">{topic.views} visualizações</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{topic.title}</h4>
                  </div>
                  <button className="text-spfc-red hover:text-spfc-dark-red">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
            <a href="#" className="text-sm font-bold text-spfc-red hover:underline">
              VER TODOS OS TÓPICOS
            </a>
            <button className="bg-spfc-red text-white px-4 py-2 rounded-lg hover:bg-spfc-dark-red transition-colors font-bold">
              NOVO TÓPICO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
