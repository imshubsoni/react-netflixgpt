import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieListsContainer = () => {
  const moviesLists = useSelector((store) => store.movies);

  return (
    <div className="movie-lists-container bg-black pl-16">
      <div className="-mt-64 relative z-20">
        <MovieList
          movieList={moviesLists.nowPlayingMovies}
          title={"Now Playing"}
        />
        <MovieList movieList={moviesLists.trendingMovies} title={"Trending"} />
        <MovieList movieList={moviesLists.popularMovies} title={"Popular"} />
        <MovieList movieList={moviesLists.topRatedMovies} title={"Top Rated"} />
        <MovieList movieList={moviesLists.upcomingMovies} title={"Upcoming"} />
      </div>
    </div>
  );
};

export default MovieListsContainer;
