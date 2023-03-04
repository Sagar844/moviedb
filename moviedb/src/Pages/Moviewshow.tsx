import axios from "axios";
import { FC, useEffect, useState } from "react";
import MoviesCart from "../component/MoviesCart";
import { movies } from "../Models/movietype";

type Moviewshowprops = {};

const Moviewshow: FC<Moviewshowprops> = () => {
  const [movie, setmovie] = useState<movies[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=3ac20e37c3b1bdd32dadec03d228864f"
      )
      .then((res) => setmovie(res.data.results));
  }, []);

  return (
    <div className="flex-wrap grid grid-cols-8 gap-2 mx-3 mt-10">
 
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
