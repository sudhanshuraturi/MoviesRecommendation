import Header from "../common/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import GptSearch from "../gptMovieSuggestions/GptSearch";

const Browse = () => {
  const showGptSearch = useSelector(
    (store: RootState) => store.gpt.showGptSearch
  );
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div className="no-scrollbar">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <div className="bg-black w-full">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};
export default Browse;
