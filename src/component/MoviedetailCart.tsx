import { FC, memo } from "react";

import { movies } from "../Models/movietype";
import MovieCast from "../Pages/MovieCast";
import { Moviewshowprops } from "../Pages/Moviedetail";

type movieprops = {
  movies: Moviewshowprops;
};

const posturl = (posterpath: string) => {
  return `https://image.tmdb.org/t/p/original${posterpath}`;
};

const MoviedetailCart: FC<movieprops> = ({ movies }) => {
  return (
    <div className="bg-[#20200b] ">
      <img
        className="  opacity-60 h-80 md:w-full md:h-full"
        src={posturl(movies.backdrop_path)}
        alt=""
      />

      <img
        className="w-28 rounded-lg absolute top-0 mt-20 mx-2 md:my-20 md:w-1/3"
        src={posturl(movies.poster_path)}
        alt={movies.title}
      />
      <h1 className="text-center font-bold text-white text-2xl">
        {movies.title}
      </h1>
      <h1 className="bg-black py-6 opacity-25 text-white">
        <p>{movies.release_date} </p>
      </h1>
      <div className="text-white space-y-5 text-start mx-5">
        <h1>You can't run from your past.</h1>
        <h1>Overview</h1>
        <p>{movies.overview}</p>
      </div>
    </div>
  );
};

MoviedetailCart.defaultProps = {};
export default memo(MoviedetailCart);
