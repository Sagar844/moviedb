import axios from "axios";
import { useEffect, useState } from "react";
import {  Images } from "../Models/movietype";


const posturl = (posterpath:string[]) => {
  return `https://image.tmdb.org/t/p/original${posterpath}`;
};


export const ApiImage = () => {
  const [image, setimage] = useState<Images[]>([]);
  console.log(image);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/configuration?api_key=3ac20e37c3b1bdd32dadec03d228864f"
      )
      .then((res) => setimage(res.data.images));
  }, []);
  if(!image){
    return <div>Loading...</div>
  }

  return <div>
{image.map((res) => {
  return(
    <div>
    <img src={posturl(res.backdrop_sizes)} alt="" />
    </div>
  )
})}

  </div>;
};
