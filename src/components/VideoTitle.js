import { MOVIE_POSTER_IMG_URL } from "../utils/constants";

const VideoTitle = ({ movie }) => {
  return (
    <div className="absolute top-0 py-48 px-16 text-white bg-gradient-to-r from-black w-8/12 h-full">
      <div className="">
        <img
          className="rounded-full w-40 h-40"
          src={MOVIE_POSTER_IMG_URL + movie.backdrop_path}
        ></img>
        <h1 className="main-title text-6xl font-bold mt-10">{movie.title}</h1>
        <p className="w-8/12 mt-10">{movie.overview}</p>
        <div className="flex my-10">
          <button className="py-3 px-9 rounded-md bg-white text-black text-3xl hover:bg-opacity-80">
            <span className="mr-2">
              <i className="fa-solid fa-play"></i>
            </span>
            Play
          </button>
          <button className="py-3 px-9 mx-4 rounded-md bg-gray-500 bg-opacity-40 text-white text-3xl hover:bg-opacity-20">
            <span className="mr-2">
              <i className="fa-solid fa-circle-info"></i>
            </span>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
