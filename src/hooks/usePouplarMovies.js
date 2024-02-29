import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/reduxstore/storeSlices/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMoview = async () => {
    const result = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json = await result.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMoview();
  }, []);
};

export default usePopularMovies;
