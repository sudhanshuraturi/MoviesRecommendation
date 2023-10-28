import { MovieType, PopularMovieType } from "../utils/moviesSlice";
import MovieCard from "./MovieCard";

interface MovieListType {
  title: string;
  movies: MovieType[] | PopularMovieType[] | null;
}

const MovieList: React.FC<MovieListType> = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
