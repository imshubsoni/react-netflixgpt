import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  if (movies === null) return;

  const x = Math.round(Math.random() * 19);
  const mainMovie = movies[x];

  return (
    <div className="main-video-container relative">
      <VideoBackground movieId={mainMovie.id} />
      <VideoTitle movie={mainMovie} />
    </div>
  );
};

export default MainContainer;
