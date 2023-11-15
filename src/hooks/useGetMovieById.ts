import { useEffect, useState } from 'react';
import { IMG_CDN_URL, MAX_CACHE_SIZE } from '../utils/constants';
import { UseMovieDataResult, Cache, MovieDataType } from '../utils/types';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import { addToMovieIdCache, removeFromMovieCache } from '../redux/slices/moviesSlice';


const useGetMovieById = (id?: string): UseMovieDataResult => {
  const cache = useSelector((store:RootState) => store.movies.movieCache);
  const dispatch = useDispatch();

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
          },
        };

        const response = await fetch(url, options);
        const json = await response.json();
        json.poster_path = IMG_CDN_URL+json?.poster_path;
  
        const newCache: Cache = { ...cache, [id!]: json };
        const keys = Object.keys(newCache);
        
        if (keys.length > MAX_CACHE_SIZE) {
            await dispatch(removeFromMovieCache());
        }
        dispatch(addToMovieIdCache(newCache));

      } catch (err) {
        setError('Error fetching movie data');
      }
    };
    if(id && !cache[id])
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, cache]);
  
  const mData: MovieDataType = id && cache[id] ? cache[id] : {overview: '',title: '',poster_path: ''};
  return { mData, error };
};

export default useGetMovieById;
