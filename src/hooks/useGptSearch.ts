import {  useState } from "react";
import openai from "../utils/openai";

const useGptSearch = () => {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchSuggestions = async (query: string) => {    
    setLoading(true);
    const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        query +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya. In case the query provided does not mean anything as per english language, reply you cant provide anything on this as query does not mean anything, whenever you provide no suggestion you have to start the sentence with '123SSSorry, '";
    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
        
      return gptResults?.choices?.[0]?.message?.content?.split(",");
     
    } catch (error) {
      setError("Error fetching search results");
    } finally {
      setLoading(false);
    }
  };

  return { searchSuggestions, loading, error };
};

export default useGptSearch;