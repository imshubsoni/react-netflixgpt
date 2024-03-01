import { API_OPTIONS } from "./constants";

const fetchMovieDetails = async (movieId) => {
  // Fetch Details
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
    API_OPTIONS
  );
  const jsonResponse = await response.json();

  // Fetch Trailer
  const result = await fetch(
    "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
    API_OPTIONS
  );

  const json = await result.json();

  const allTrailers = json.results.filter((video) => {
    return video.type === "Trailer";
  });

  const mainTrailer = allTrailers.length ? allTrailers[0] : json.results[0];

  const movieData = { details: jsonResponse, trailer: mainTrailer };

  return movieData;
};

export default fetchMovieDetails;
