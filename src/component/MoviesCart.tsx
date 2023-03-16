import { Rating } from "@mui/material";
import { FC, memo } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { movies } from "../Models/movietype";
import { CircularProgressWithLabel } from "./CircularProgressWithLabel";

type movieprops = {
  movies: movies;
};


const posturl = (posterpath: string) => {
  return `https://image.tmdb.org/t/p/original${posterpath}`;
};

const Moviewshow: FC<movieprops> = ({ movies }) => {
  return (
<HelmetProvider>
  <Helmet>
    <title>The Movie Database(TMDB)</title>
  </Helmet>
    <div className="snap-center">
      <Link to={"/trending/" + movies.id}>
        <img title={movies.title}
          className="w-40 rounded-lg "
          src={posturl(movies.poster_path)}
          alt={movies.title}
        />
      </Link>
      {/* <CircularProgressWithLabel value={movies.popularity} /> */}
      <h1>{movies.title}</h1>
    </div>
    </HelmetProvider>
  );
};

Moviewshow.defaultProps = {};
export default memo(Moviewshow);
