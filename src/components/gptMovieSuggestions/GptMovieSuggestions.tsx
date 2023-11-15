import { useSelector } from "react-redux";
import MovieList from "../common/MovieList";
import { RootState } from "../../redux/store";
import lang from "../../utils/languageConstants";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector(
    (store: RootState) => store.gpt
  );
  const langKey = useSelector((store: RootState) => store.config.lang);
  if (!movieNames) {
    return (
      <div className="flex justify-center mt-5">
        <div className="text-white bg-slate-600 p-4 font-extrabold font-medium ">
          {lang[langKey].gptSearchExample}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
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
