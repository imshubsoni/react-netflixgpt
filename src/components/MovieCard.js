import { MOVIE_POSTER_IMG_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card w-44 mr-4">
      <img
        className="rounded-lg shadow-sm shadow-white"
        src={MOVIE_POSTER_IMG_URL + movie.poster_path}
      />
    </div>
  );
};

export default MovieCard;
