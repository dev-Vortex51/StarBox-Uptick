import type { Movie } from "../types";
import { filmPosters } from "../utils/helpers";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({
  movie: { title, release_date, opening_crawl },
}: MovieCardProps) => {
  const poster = filmPosters[title] || "/posters/default.jpg";

  return (
    <div className='relative aspect-[2/3] overflow-hidden rounded-lg shadow-lg hover:transform hover:scale-[0.95] transition-transform duration-200 cursor-pointer'>
      <img src={poster} alt={title} className='w-full h-full object-cover' />
      <div className='absolute top-0 w-full h-full z-50 bg-black/50 text-white p-4 flex flex-col justify-end'>
        <h1 className='text-xl font-bold mb-2'>{title}</h1>
        <h2 className='text-sm mb-2'>
          Release Year: {release_date.split("-")[0]}
        </h2>
        <p className='text-xs line-clamp-3'>{opening_crawl}</p>
        <button className='mt-3   p-2 rounded-full text-bold hover:transform hover:translate-x-2 bg-blue-800 transition-transform duration-200 inline cursor-pointer'>
          More info &rarr;
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
