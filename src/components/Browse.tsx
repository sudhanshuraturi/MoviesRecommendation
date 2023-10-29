import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector(
    (store: RootState) => store.gpt.showGptSearch
  );
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};
export default Browse;
