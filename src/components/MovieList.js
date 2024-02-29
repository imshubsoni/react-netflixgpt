import MovieCard from "./MovieCard";

const MovieList = ({ movieList, title }) => {
  if (movieList === null) return;

  return (
    <div className="movie-list mb-12">
      <h1 className="movie-list-title text-white text-4xl mb-6">{title}</h1>
      <div
        className="flex-container flex overflow-x-scroll no-scrollbar"
        id="movie-list-scroll"
      >
        <div className="movie-list-flex flex pb-1">
          {movieList.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
