import { FC, memo } from "react";
import { movies } from "../Models/movietype";

type movieprops = {
  movies: movies;
};

const posturl = (posterpath: string) => {
  return `https://image.tmdb.org/t/p/original${posterpath}`;
};

const Moviewshow: FC<movieprops> = ({ movies }) => {
  return (
    <div>

      <img
        className="w-40 rounded-lg "
        src={posturl(movies.poster_path)}
        alt=""
      />
      <h1>{movies.title}</h1>
    </div>
  );
};

Moviewshow.defaultProps = {};
export default memo(Moviewshow);
