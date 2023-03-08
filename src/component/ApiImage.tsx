import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Searchbar } from "./Searchbar";
type apiimageprop = {};

export const ApiImage: FC<apiimageprop> = () => {
  const [image, setimage] = useState([]);
  console.log(image);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/configuration?api_key=3ac20e37c3b1bdd32dadec03d228864f"
      )
      .then((res) => console.table(res.data.images))
  }, []);

  return <div></div>;
};
