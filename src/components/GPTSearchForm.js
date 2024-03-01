import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openaiConfig from "../utils/openaiConfig";
import { API_OPTIONS } from "../utils/constants";
import { addGptSearchResults } from "../utils/reduxstore/storeSlices/gptSlice";

const GPTSearchForm = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const fetchMovieResultFromTMDB = async (movieName) => {
    const result = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=true&page=1",
      API_OPTIONS
    );

    const json = await result.json();

    return json.results;
  };

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommandation System, and suggest movies for the query: " +
      searchText.current.value +
      ". Only Suggest Maximum 6 movies, and give comma seprated result in Example Format show ahead, dont put numberings. Example Format: Dil, Dhadkkan, Raja, Chichorre, Dil Wale Dulhaniya Le Jayenge, Kal Kisne Dekha";

    const response = await openaiConfig.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovieName = response.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovieName.map((movieName) =>
      fetchMovieResultFromTMDB(movieName)
    );

    const gptMovieResults = await Promise.all(promiseArray);

    dispatch(
      addGptSearchResults({
        movieNames: gptMovieName,
        movieResults: gptMovieResults,
      })
    );
  };

  return (
    <div className="gpt-search-form-container z-20 relative w-6/12 m-auto pt-[10%]">
      <div className="gpt-search-form bg-black text-center p-4 shadow-sm rounded-md shadow-white">
        <form className="gpt-form" onSubmit={(e) => e.preventDefault()}>
          <input
            ref={searchText}
            className="gpt-search-input w-9/12 p-5 rounded-sm"
            placeholder={lang[currentLang].gptSearchPlaceholder}
            type="text"
          />
          <button
            className="bg-red-600 text-white py-5 ml-4 w-2/12 rounded-lg"
            onClick={handleGptSearch}
          >
            {lang[currentLang].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchForm;
