import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { RootState } from "../../redux/store";

const MainContainer: React.FC = () => {
  const movies = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies
  );

  if (!movies) return <></>;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="w-[100%]">
      <VideoTitle title={original_title} overview={overview} id={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;
