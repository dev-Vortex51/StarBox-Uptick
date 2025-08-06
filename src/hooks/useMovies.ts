import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../utils/api";

export const useMovies = () => {
  const { data: movies, isPending } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  return { movies, isPending };
};
