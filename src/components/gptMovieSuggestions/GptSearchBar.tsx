import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import { NO_SUGGESTION } from "../../utils/constants";
import { addGptMovieResult } from "../../redux/slices/gptSlice";
import { RootState } from "../../redux/store";
import useSearchMovie from "../../hooks/useSearchMovie";
import useGptSearch from "../../hooks/useGptSearch";
import { GptSearchBarType } from "../../utils/types";

const GptSearchBar: React.FC<GptSearchBarType> = ({ setLoading }) => {
  const [disableSearch, setSearchDisabled] = useState(true);
  const dispatch = useDispatch();
  const langKey = useSelector((store: RootState) => store.config.lang);
  const searchText = useRef<HTMLInputElement>(null);
  const { searchMovieTMDB } = useSearchMovie();
  const { searchSuggestions } = useGptSearch();

  const handleGptSearchClick = async () => {
    try {
      setLoading(true);
      const gptMovies = await searchSuggestions(searchText?.current?.value!);
      if (
        gptMovies?.[0] &&
        gptMovies?.length === 1 &&
        NO_SUGGESTION.indexOf(gptMovies?.[0]) > -1
      ) {
        throw "No Recommendations";
      }
      const promiseArray = gptMovies?.map((movie: string) =>
        searchMovieTMDB(movie)
      );

      if (promiseArray) {
        const tmdbResults = await Promise.all(promiseArray);
        setLoading(false);
        dispatch(
          addGptMovieResult({
            movieNames: gptMovies,
            movieResults: tmdbResults,
          })
        );
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="pt-[35%] sm:pt-[25%] md:pt-[10%] flex justify-center">
      <form
        className="w-full lg:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <input
          ref={searchText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.target?.value && e.target?.value !== ""
              ? setSearchDisabled(false)
              : setSearchDisabled(true);
          }}
          type="text"
          className=" p-4 m-4 mr-0 col-span-8 focus:outline-none"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-1 m-4 ml-0 mr-0 pr-4 bg-white"
          onClick={() => {
            if (searchText.current) {
              searchText.current.value = "";
              setSearchDisabled(true);
            }
          }}
          type="button"
        >
          ❌
        </button>
        <button
          className={`col-span-3 m-4 py-2 px-4 sm:px-0 ${
            disableSearch ? " cursor-not-allowed" : ""
          }  text-white bg-red-700 rounded-lg`}
          onClick={handleGptSearchClick}
          disabled={disableSearch}
          type="submit"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
