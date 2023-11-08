import Header from "../common/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div className="no-scrollbar">
      <Header />

      <div className="bg-black w-full">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};
export default Browse;
