import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { RootState } from "../redux/store";


const useGetMovieById = () => {
//     const dispatch = useDispatch();
    

//   const getNowPlayingMovies = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/now_playing?page=1",
//       API_OPTIONS
//     );
//     const json = await data.json();
//     dispatch(addNowPlayingMovies(json.results));
//   };

//   useEffect(() => {
//     !nowPlayingMovies && getNowPlayingMovies();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [nowPlayingMovies]);
}

export default useGetMovieById;




