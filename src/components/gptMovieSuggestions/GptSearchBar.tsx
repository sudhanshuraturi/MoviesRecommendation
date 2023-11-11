import openai from "../../utils/openai";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import { API_OPTIONS } from "../../utils/constants";
import { addGptMovieResult } from "../../redux/slices/gptSlice";
import { RootState } from "../../redux/store";

const GptSearchBar = () => {
  const [disableSearch, setSearchDisabled] = useState(true);
  const dispatch = useDispatch();
  const langKey = useSelector((store: RootState) => store.config.lang);
  const searchText = useRef<HTMLInputElement>(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie: string) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText?.current?.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }

    const gptMovies = gptResults?.choices?.[0]?.message?.content?.split(",");
    const promiseArray = gptMovies?.map((movie: string) =>
      searchMovieTMDB(movie)
    );
    // [Promise, Promise, Promise, Promise, Promise]

    if (promiseArray) {
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <input
          ref={searchText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.target?.value
              ? setSearchDisabled(false)
              : setSearchDisabled(true);
          }}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className={`col-span-3 m-4 py-2 px-4 ${
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
