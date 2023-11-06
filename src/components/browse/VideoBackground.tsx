import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { RootState } from "../../redux/store";
import { VideoBackgroundType } from "../../utils/types";

const VideoBackground: React.FC<VideoBackgroundType> = ({ movieId }) => {
  const trailerVideo = useSelector(
    (store: RootState) => store.movies?.trailerVideo
  );

  useMovieTrailer(movieId);

  return (
    <div className="w-full">
      <iframe
        id="ytplayer"
        className="h-screen w-full pointer-events-none"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
