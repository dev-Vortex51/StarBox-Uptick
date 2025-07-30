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
    <div className='relative aspect-[2/3] overflow-hidden rounded-lg shadow-lg group cursor-pointer'>
      <img
        src={poster}
        alt={title}
        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
      />

      <div className='absolute inset-0 bg-black/60 text-white p-4 flex flex-col justify-end transition-opacity duration-500 opacity-0 group-hover:opacity-100'>
        <div className='translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
          <h1 className='text-xl font-bold mb-1'>{title}</h1>
          <h2 className='text-sm mb-2'>
            Release Year: {release_date.split("-")[0]}
          </h2>
          <p className='text-xs line-clamp-3'>{opening_crawl}</p>

          <button className='mt-3 p-2 px-4 bg-blue-800 rounded-full font-semibold text-sm transition-transform duration-300 transform group-hover:translate-x-2'>
            More info &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
