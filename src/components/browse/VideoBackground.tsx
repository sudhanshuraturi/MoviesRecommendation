import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { RootState } from "../../redux/store";
import { VideoBackgroundType } from "../../utils/types";
import { IFRAME } from "../../utils/constants";

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
        src={IFRAME.link_0 + trailerVideo?.key + IFRAME.link_1}
        title={IFRAME.title}
        allow={IFRAME.allow}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
