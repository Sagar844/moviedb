import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../component/Loading";
import { Moviewshowprops } from "../Models/movietype";



const posturl = (posterpath: string) => {
  return `https://image.tmdb.org/t/p/original${posterpath}`;
};

const Moviedetail = () => {
  const [moviedtails, setmoviedetails] = useState<Moviewshowprops[]>([]);
  // console.log(moviedtails);

  const param = useParams();
  const id = param.id && +param.id;

  const API = "?api_key=3ac20e37c3b1bdd32dadec03d228864f";
  const Base_Url = "https://api.themoviedb.org/3/movie/";
  useEffect(() => {
    axios
      .get(Base_Url + id + " /credits" + API)
      .then((res) => setmoviedetails(res.data.cast))

      .catch((err) => console.log(err));
  }, []);

  if (!moviedtails) {
    return <Loading />;
  }
  return (
    <div className=" relative overflow-x-auto scroll-smooth flex  gap-5 mt-2">
      {moviedtails.map((ca) => {
        return (
          <div
            key={ca.id}
            className=" px-8 rounded-md  shadow-md  border-black"
          >
            <img
              className="rounded-full "
              src={
                posturl(ca.profile_path) ||
                "https://wearesutd.sutd.edu.sg/wp-content/uploads/2017/11/generic-male-icon-blue.jpg"
              }
              alt=""
            />
            <div className="text-justify ">
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
