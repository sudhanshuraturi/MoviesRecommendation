import { useSelector } from "react-redux";
import MovieList from "../common/MovieList";
import { RootState } from "../../redux/store";
import lang from "../../utils/languageConstants";
import { useDispatch } from "react-redux";
import { clearGptMovieResult } from "../../redux/slices/gptSlice";
import { GptMovieSuggestionsType } from "../../utils/types";
import { LOADING_TEXT } from "../../utils/constants";

const GptMovieSuggestions: React.FC<GptMovieSuggestionsType> = ({
  loading,
}) => {
  const { movieResults, movieNames } = useSelector(
    (store: RootState) => store.gpt
  );
  const dispatch = useDispatch();
  const langKey = useSelector((store: RootState) => store.config.lang);
  if (!movieNames) {
    return (
      <div className="flex justify-center mt-5">
        <div className="text-white bg-slate-600 p-4 font-medium ">
          {loading ? LOADING_TEXT : lang[langKey].gptSearchExample}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div className="flex justify-between bg-slate-600 p-4">
        <h1 className="text-2xl font-bold">Suggestions</h1>
        <button
          className="text-white text-2xl"
          onClick={() => dispatch(clearGptMovieResult())}
        >
          ❎
        </button>
      </div>
      <div>
        {movieResults &&
          movieNames.map((movieName: string, index: number) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
