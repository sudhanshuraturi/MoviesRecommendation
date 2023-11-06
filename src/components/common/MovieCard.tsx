import { IMG_CDN_URL } from "../../utils/constants";
import { MovieCardType } from "../../utils/types";

const MovieCard: React.FC<MovieCardType> = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-[140px] hover:scale-y-105">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};
export default MovieCard;
