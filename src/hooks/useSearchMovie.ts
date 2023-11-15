import { API_OPTIONS } from "../utils/constants";
import {  useState } from "react";

const useSearchMovie = () => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchMovieTMDB = async (query: string) => {
    setLoading(true);
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          query +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    } catch (error) {
      setError("Error fetching search results");
    } finally {
      setLoading(false);
    }
  };

  return { searchMovieTMDB, loading, error };
};

export default useSearchMovie;