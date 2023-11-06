import { useSelector } from "react-redux";
import MovieList from "../common/MovieList";
import { RootState } from "../../redux/store";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector(
    (store: RootState) => store.gpt
  );
  if (!movieNames) return null;

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
