import axios from "axios";

export const getproductslist = (keyword: string) => {
  let params = {};

  if (keyword) {
    params.keyword = keyword;
  }

  return axios
    .get(
      "https://api.themoviedb.org/3/search/movie?api_key=3ac20e37c3b1bdd32dadec03d228864f&query=",
      {
        params,
      }
    )
    .then((res) => res.data);
};
