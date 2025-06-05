export default function NewsCard({ news }) {
  return (
    <article className="bg-white rounded-2xl shadow flex items-center gap-4 p-4 hover:scale-[1.03] hover:shadow-2xl transition-all border border-transparent hover:border-red-100">
      <img
        src={news.image}
        alt={news.title}
        className="w-20 h-20 object-cover rounded-lg shadow-sm"
      />
      <div className="flex-1">
        <span className="block text-xs text-green-700 font-bold mb-1">{news.summary}</span>
        <div className="flex gap-4 text-xs text-gray-500 mb-1">
          <span>{news.visits} visitas</span>
          <span>{news.comments} comentários</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-1">{news.title}</h3>
        <a href={news.link} className="text-red-700 font-bold hover:underline">Leia mais</a>
        <div className="flex gap-4 mt-1 text-sm">
          <span className="flex items-center gap-1">
            <svg width="20" height="20" fill="none" stroke="currentColor" className="inline align-middle text-yellow-600" viewBox="0 0 24 24">
              <path d="M6 21V9a2 2 0 0 1 2-2h5.28a2 2 0 0 1 1.72 1l3.12 5.2a2 2 0 0 1-1.72 3H8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {news.likes}
          </span>
          <span className="flex items-center gap-1">
            <svg width="20" height="20" fill="none" stroke="currentColor" className="inline align-middle text-gray-400" viewBox="0 0 24 24">
              <path d="M18 3v12a2 2 0 0 1-2 2H8.72a2 2 0 0 1-1.72-1L3.88 9.8A2 2 0 0 1 5.6 7h8.4a2 2 0 0 0 2-2V3a2 2 0 0 1 2-2h-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {news.dislikes}
          </span>
          <span className="flex items-center gap-1">
            <svg width="20" height="20" fill="none" stroke="currentColor" className="inline align-middle text-blue-700" viewBox="0 0 24 24">
              <path d="M4 12v1a9 9 0 1 0 9-9h-1m0 0v6m0-6l-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {news.shares}
          </span>
        </div>
      </div>
    </article>
  );
}
