import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/reduxstore/storeSlices/moviesSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  const getNowPlayingMoview = async () => {
    const result = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await result.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMoview();
  }, []);

  return <div>MainContainer</div>;
};

export default MainContainer;
