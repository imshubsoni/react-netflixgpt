import { useDispatch } from "react-redux";
import { MOVIE_POSTER_IMG_URL } from "../utils/constants";
import {
  addMovieForShowDetails,
  initializeShowMovieDetails,
} from "../utils/reduxstore/storeSlices/movieDetailsSlice";
import fetchMovieDetails from "../utils/FetchMovieDetails";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  if (!movie.poster_path) return;

  const handleMovieCardClick = async () => {
    const movieData = await fetchMovieDetails(movie.id);
    dispatch(addMovieForShowDetails(movieData));
    dispatch(initializeShowMovieDetails());
  };

  return (
    <div className="movie-card w-44 mr-4" onClick={handleMovieCardClick}>
      <img
        className="rounded-lg shadow-sm shadow-white"
        src={MOVIE_POSTER_IMG_URL + movie.poster_path}
      />
    </div>
  );
};

export default MovieCard;
