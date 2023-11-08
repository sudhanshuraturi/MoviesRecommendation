import { BG_URL } from "../../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10 w-full">
        <img className="h-screen w-full object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="w-full">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
