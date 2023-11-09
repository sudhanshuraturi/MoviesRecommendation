import { useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import { LanguageTranslations, MovieListType } from "../../utils/types";

import MovieCard from "./MovieCard";
import { RootState } from "../../redux/store";

const MovieList: React.FC<MovieListType> = ({ title, movies }) => {
  const langKey = useSelector((store: RootState) => store.config.lang);
  return (
    <div className="p-6">
      <h1 className="text-lg font-extrabold py-4 text-white">
        {lang[langKey][title]}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-4">
          {movies?.map(
            (movie) =>
              movie.poster_path && (
                <MovieCard
                  key={movie.id}
                  posterPath={movie.poster_path}
                  movieId={movie.id}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
