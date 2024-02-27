import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMainMovieTrailer } from "../utils/reduxstore/storeSlices/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async (movieId) => {
    const result = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await result.json();

    const allTrailers = json.results.filter((video) => {
      return video.type == "Trailer";
    });

    const mainTrailer = allTrailers.length ? allTrailers[0] : json.results[0];
    dispatch(addMainMovieTrailer(mainTrailer));
  };

  useEffect(() => {
    getMovieTrailer(movieId);
  }, []);
};

export default useMovieTrailer;
