import { useSelector } from "react-redux";
import Header from "./Header";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  const userInfo = useSelector((store) => store.user.user);

  useNowPlayingMovies();

  return (
    <div className="text-xl">
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
