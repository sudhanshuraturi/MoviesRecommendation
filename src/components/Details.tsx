import { useNavigate } from "react-router-dom";
import Header from "./common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import lang from "../utils/languageConstants";
import useGetMovieById from "../hooks/useGetMovieById";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const langKey = useSelector((store: RootState) => store.config.lang);
  const { mData } = useGetMovieById(id);

  if (!id) navigate(-1);

  return (
    <>
      <Header />

      <div className="h-full w-full overflow-hidden">
        {mData?.poster_path ? (
          <img
            src={mData?.poster_path}
            className="w-full h-full absolute -z-10 object-cover"
            alt="movie-cover"
          />
        ) : null}
        <div
          className={`flex items-center w-full h-screen px-10 py-10 bg-black bg-opacity-70`}
        >
          {mData?.poster_path ? (
            <img
              className="h-[70%] w-[30%] rounded-2xl object-cover"
              src={mData?.poster_path}
              alt="movie-cover"
            />
          ) : (
            <div className="h-[70%] w-[30%] rounded-2xl bg-slate-600 bg-opacity-30"></div>
          )}
          <div
            className={` ${
              !mData?.overview ? "bg-opacity-30" : ""
            } h-[70%] w-[70%] ml-5 p-10 overflow-y-auto no-scrollbar rounded-2xl bg-slate-600 text-white`}
          >
            <div className="flex xs:block justify-between">
              <h1 className="text-3xl font-extrabold">{mData?.title}</h1>
              {mData?.overview && (
                <button
                  onClick={() => navigate(-1)}
                  className="bg-white text-slate-600 p-2 rounded-2xl max-h-10 ml-2"
                >
                  {lang[langKey].back}⬅️
                </button>
              )}
            </div>
            <div className="mt-8">
              {mData?.overview && (
                <h2 className="text-xl font-bold">{lang[langKey].overview}</h2>
              )}
              <p className="mt-3">{mData?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
