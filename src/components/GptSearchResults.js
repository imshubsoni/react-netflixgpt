import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchResults = () => {
  const { movieNames, movieResults } = useSelector((state) => state.gpt);
  if (movieNames === null) return;

  return (
    <div className="search-results-container relative z-10 p-8 pl-16 mt-12 bg-black bg-opacity-60">
      {movieNames.map((movieName, index) => (
        <MovieList
          title={movieName}
          key={movieName}
          movieList={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptSearchResults;
