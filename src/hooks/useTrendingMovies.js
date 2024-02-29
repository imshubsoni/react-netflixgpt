import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/reduxstore/storeSlices/moviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMoview = async () => {
    const result = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      API_OPTIONS
    );

    const json = await result.json();

    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMoview();
  }, []);
};

export default useTrendingMovies;
