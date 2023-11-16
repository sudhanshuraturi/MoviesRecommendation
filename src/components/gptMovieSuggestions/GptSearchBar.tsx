import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import {
  addGptMovieResult,
  clearGptMovieResult,
} from "../../redux/slices/gptSlice";
import { RootState } from "../../redux/store";
import useSearchMovie from "../../hooks/useSearchMovie";
import useGptSearch from "../../hooks/useGptSearch";
import { GptSearchBarType } from "../../utils/types";

const GptSearchBar: React.FC<GptSearchBarType> = ({ setLoading }) => {
  const [disableSearch, setSearchDisabled] = useState(true);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const langKey = useSelector((store: RootState) => store.config.lang);
  const searchText = useRef<HTMLInputElement>(null);
  const { searchMovieTMDB } = useSearchMovie();
  const { searchSuggestions } = useGptSearch();

  const showNoRecommendation = (str: string) => {
    setErrorMsg(() => str);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 10000);
  };
  const handleGptSearchClick = async () => {
    dispatch(clearGptMovieResult());
    try {
      setLoading(true);
      const gptMovies = await searchSuggestions(searchText?.current?.value!);

      if (
        searchText?.current?.value &&
        gptMovies?.includes(`"${searchText?.current?.value}"`)
      ) {
        showNoRecommendation(gptMovies);
        setLoading(false);
        return;
      }
      const promiseArray = gptMovies
        ?.split(",")
        ?.map((movie: string) => searchMovieTMDB(movie));

      if (promiseArray) {
        const tmdbResults = await Promise.all(promiseArray);
        setLoading(false);
        dispatch(
          addGptMovieResult({
            movieNames: gptMovies?.split(","),
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
    <>
      <div className="pt-[35%] sm:pt-[25%] md:pt-[10%] flex justify-center">
        <form
          className="w-full lg:w-1/2 bg-black grid grid-cols-12"
          onSubmit={(e: React.ChangeEvent<HTMLFormElement>) =>
            e.preventDefault()
          }
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
      {showError && (
        <div className=" flex justify-center ">
          <div className="text-white font-bold bg-red-700 w-1/2 text-center mt-6 mb-0 p-3">
            {errorMsg}
          </div>
        </div>
      )}
    </>
  );
};
export default GptSearchBar;
