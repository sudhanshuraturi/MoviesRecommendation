import { useSelector } from "react-redux";
import MovieList from "../common/MovieList";
import { RootState } from "../../redux/store";

const SecondaryContainer = () => {
  const movies = useSelector((store: RootState) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="-mt-[15%] relative z-20 no-scrollbar">
        <MovieList title={"nowPlaying"} movies={movies.nowPlayingMovies} />
        <MovieList title={"popular"} movies={movies.popularMovies} />
      </div>
    )
  );
};
export default SecondaryContainer;
