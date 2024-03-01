import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_POSTER_IMG_URL } from "../utils/constants";
import { hideShowMovieDetails } from "../utils/reduxstore/storeSlices/movieDetailsSlice";

const MovieDetailsPreview = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector((store) => store.movieDetails);
  console.log(movieDetails);

  if (movieDetails.movie === null) return;

  const handleMovieDetailsClose = () => {
    dispatch(hideShowMovieDetails());
  };

  return (
    movieDetails.showMovieDetails && (
      <div className="w-[100%] h-[100vh] fixed bg-black bg-opacity-90 text-white z-50 p-10 top-0">
        <div className="details-header flex justify-end text-white text-4xl absolute top-20 right-20 bg-red-600 py-2 px-3 rounded-full">
          <i
            className="fa-solid fa-xmark "
            onClick={handleMovieDetailsClose}
          ></i>
        </div>
        <div className="details-main-container bg-white">
          <div className="w-full">
            <iframe
              className="w-full aspect-video"
              src={
                "https://www.youtube.com/embed/" +
                movieDetails.movie.trailer.key +
                "?autoplay=1&mute=1&loop=1&controls=0&playlist=" +
                movieDetails.movie.trailer.key
              }
              allow=""
            ></iframe>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieDetailsPreview;
