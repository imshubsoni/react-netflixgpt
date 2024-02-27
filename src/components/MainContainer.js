import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const MainContainer = () => {
  useNowPlayingMovies();
  return <div>MainContainer</div>;
};

export default MainContainer;
