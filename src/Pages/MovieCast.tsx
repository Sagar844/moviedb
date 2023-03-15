import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../component/Loading";
import { movieprops, movies } from "../Models/movietype";

const Moviedetail = () => {
  const [moviedtails, setmoviedetails] = useState<movieprops[]>([]);
  console.log(moviedtails)

  const param = useParams();
  const id = param.id && +param.id;

  const API = "?api_key=3ac20e37c3b1bdd32dadec03d228864f";
  const Base_Url = "https://api.themoviedb.org/3/movie/";
  useEffect(() => {
    axios
      .get(Base_Url + id + " /credits" + API)
      .then((res) => setmoviedetails(res.data.cast))
      .catch((err) => console.log(err));
  }, [id]);

  if (!moviedtails) {
    return <Loading />;
  }

  const maleicon =
    "https://wearesutd.sutd.edu.sg/wp-content/uploads/2017/11/generic-male-icon-blue.jpg";

  return (
    <div className=" relative overflow-x-auto scroll-smooth flex  gap-5 mt-2   ">
      {moviedtails.map((ca) => {
        return (
          <div
            key={ca.id}
            className=" px-8 rounded-md  shadow-lg  border-black"
          >
            <img
              className="  rounded-md h-20 w-28  object-fill   "
              src={
                ca.profile_path !== null
                  ? `https://image.tmdb.org/t/p/original${ca.profile_path} `
                  : maleicon
              }
              alt=""
            />
            <div className="">
              <h1 className="">{ca.name}</h1>
              <h1>{ca.character}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Moviedetail.defaultProps = {};
export default Moviedetail;
