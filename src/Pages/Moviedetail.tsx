import axios from "axios";
import { FC, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { Loading } from "../component/Loading";
import MoviedetailCart from "../component/MoviedetailCart";
import { movies } from "../Models/movietype";
import MovieCast from "./MovieCast";

export interface Moviewshowprops  {
 
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: BelongsToCollection;
    budget:                number;
    genres:                Genre[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  ProductionCompany[];
    production_countries:  ProductionCountry[];
    release_date:          number;
    revenue:               number;
    runtime:               number;
    spoken_languages:      SpokenLanguage[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface BelongsToCollection {
    id:            number;
    name:          string;
    poster_path:   string;
    backdrop_path: string;
}

export interface Genre {
    id:   number;
    name: string;
}

export interface ProductionCompany {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name:       string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}



const Moviedetail = () => {
  const [moviedtails, setmoviedetails] = useState<Moviewshowprops>();
  // console.log(moviedtails);

  const param = useParams();
  const id = param.id && +param.id;
  const API = "?api_key=3ac20e37c3b1bdd32dadec03d228864f";
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/" + id + API)
      .then((res) => setmoviedetails(res.data))

      .catch((err) => console.log(err));
      return(() => {

      })
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
