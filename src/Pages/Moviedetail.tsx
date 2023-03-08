import axios from "axios";
import { FC, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { Loading } from "../component/Loading";
import MoviedetailCart from "../component/MoviedetailCart";
import { movies } from "../Models/movietype";
import MovieCast from "./MovieCast";

export type Moviewshowprops = {
  id: number;
  title: string;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  release_date: number;
  origin_country: string;
  production_companies: [
    {
      id: number;
      origin_country: string;
    }
  ];
};
const posturl = (posterpath: string) => {
  return `https://image.tmdb.org/t/p/original${posterpath}`;
};

const Moviedetail = () => {
  const [moviedtails, setmoviedetails] = useState<Moviewshowprops | null>(null);
  console.log(moviedtails);

  const param = useParams();
  const id = param.id && +param.id;
  const API = "?api_key=3ac20e37c3b1bdd32dadec03d228864f";
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/" + id + API)
      .then((res) => setmoviedetails(res.data))

      .catch((err) => console.log(err));
  }, []);

  if (!moviedtails) {
    return <Loading />;
  }
  return (
    <div>
      <MoviedetailCart movies={moviedtails} />
      <h1>Top Billed Cast</h1>
      <MovieCast />
    </div>
  );
};

Moviedetail.defaultProps = {};
export default Moviedetail;
