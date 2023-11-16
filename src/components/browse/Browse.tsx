import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div className="no-scrollbar">
      <div className="bg-black w-full">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};
export default Browse;
