export default function NewsCard({ news }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={news.image} 
        alt={news.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{news.title}</h3>
        <p className="text-gray-600 mb-3">{news.summary}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{news.visits} visitas</span>
          <span>{news.comments} comentários</span>
        </div>
        <a href={news.link} className="mt-3 inline-block text-red-700 font-semibold hover:underline">
          Leia mais
        </a>
      </div>
    </article>
  );
}
