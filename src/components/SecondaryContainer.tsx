import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState } from "../redux/store";

const SecondaryContainer = () => {
  const movies = useSelector((store: RootState) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="-mt-[15%] relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
    )
  );
};
export default SecondaryContainer;
