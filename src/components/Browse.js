import Header from "./Header";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MovieListsContainer from "./MovieListsContainer";
import usePopularMovies from "../hooks/usePouplarMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";
const Browse = () => {
  const isGptSearchPage = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div className="text-xl">
      <Header />
      {isGptSearchPage ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <MovieListsContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
