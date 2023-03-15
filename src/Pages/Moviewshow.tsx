import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Load } from "../component/Load";
import MoviesCart from "../component/MoviesCart";
import { movies } from "../Models/movietype";

type Moviewshowprops = {};

const Moviewshow: FC<Moviewshowprops> = () => {
  const [movie, setmovie] = useState<movies[]>([]);
  console.log(movie)

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=3ac20e37c3b1bdd32dadec03d228864f"
      )
      .then((res) => setmovie(res.data.results));
  }, []);


  
  if (!movie) {
    return <Load />;
  }
  return (
    <div className=" grid grid-cols-2 md:grid-cols-4 md:gap-0 md:mx-10 lg:grid-cols-8 lg:gap-2 gap-2 mx-2 mt-10">
      {movie.map((m) => {
        return (
          <div key={m.id}>
            <MoviesCart movies={m} />
          </div>
        );
      })}
    </div>
  );
};

Moviewshow.defaultProps = {};
export default Moviewshow;
