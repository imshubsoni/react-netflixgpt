import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const movieTrailer = useSelector((state) => state.movies.mainMovieTrailer);

  useMovieTrailer(movieId);
  if (movieTrailer === null) return;

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer.key +
          "?autoplay=1&mute=1&loop=1&controls=0&playlist=" +
          movieTrailer.key
        }
        title="YouTube video player"
        allow=""
      ></iframe>
    </div>
  );
};

export default VideoBackground;
