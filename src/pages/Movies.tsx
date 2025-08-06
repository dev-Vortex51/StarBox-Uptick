import MovieCard from "../components/MovieCard";
import { useMovies } from "../hooks/useMovies";
import type { Movie } from "../types";

const Movies = () => {
  const { movies, isPending } = useMovies();

  if (isPending) return <p className='text-center mt-10'>Loading movies...</p>;

  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4'>
      {movies?.map((movie: Movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </main>
  );
};

export default Movies;
