import { useNavigate } from "react-router-dom";
import Header from "./common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mData, setMData] = useState({ title: "", overview: "", poster: "" });

  if (!id) navigate(-1);

  useEffect(() => {
    const fetch = require("node-fetch");

    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg2OTk5Y2JlMzE4NmQyYWFmODcwYTYxMWNkMzJkNiIsInN1YiI6IjYxZmM5Yjg3ZDdhNzBhMDA2OWFlODU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aeWLHcQSnvOPf6tVhEqqFH1SDLwQuVM3Tua1okUf1Uw",
      },
    };

    fetch(url, options)
      .then((res: { json: () => any }) => res.json())
      .then((json: any) => {
        // console.log(json.original_title, json.overview);
        setMData({
          overview: json.overview,
          title: json.original_title,
          poster: IMG_CDN_URL + json.poster_path,
        });
      })
      .catch((err: string) => console.error("error:" + err));
  }, [id]);

  // const movieData = getData(id!);
  // console.log(movies, gptMovies);

  let x =
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg";
  return (
    <>
      <Header />
      <div className="h-full w-full overflow-hidden">
        <img
          src={mData.poster}
          className="w-full h-full absolute -z-10 object-cover"
          alt="movie-cover"
        />
        <div
          className={`flex items-center w-full h-screen px-10 py-10 bg-black bg-opacity-70`}
        >
          {mData.poster ? (
            <img
              className="h-[70%] w-[30%] rounded-2xl"
              src={mData.poster}
              alt="movie-cover"
            />
          ) : (
            <div className="h-[70%] w-[30%] rounded-2xl bg-slate-600 bg-opacity-30"></div>
          )}
          <div
            className={` ${
              !mData.overview ? "bg-opacity-30" : ""
            } h-[70%] w-[70%] ml-5 p-10 overflow-y-auto no-scrollbar rounded-2xl bg-slate-600 text-white`}
          >
            <div className="flex xs:block justify-between">
              <h1 className="text-4xl font-extrabold">{mData.title}</h1>
              {mData.overview && (
                <button
                  onClick={() => navigate(-1)}
                  className="bg-white text-slate-600 p-2 rounded-2xl"
                >
                  Back⬅️
                </button>
              )}
            </div>
            <div className="mt-8">
              {mData.overview && (
                <h2 className="text-xl font-bold">Overview</h2>
              )}
              <p className="mt-3">{mData.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
