import { useState } from "react";
import { BG_URL } from "../../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="fixed -z-10 w-full">
        <img className="h-screen w-full object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="w-full">
        <GptSearchBar setLoading={setLoading} />
        <GptMovieSuggestions loading={loading} />
      </div>
    </>
  );
};
export default GPTSearch;
