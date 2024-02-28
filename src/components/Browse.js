import Header from "./Header";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="text-xl">
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
