import { MovieListType } from "../utils/types";

import MovieCard from "./MovieCard";

const MovieList: React.FC<MovieListType> = ({ title, movies }) => {
  return (
    <div className="p-6">
      <h1 className="text-lg font-extrabold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-4">
          {movies?.map(
            (movie) =>
              movie.poster_path && (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              )
          )}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
