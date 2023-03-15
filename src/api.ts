import axios from "axios";

const APIKEY = "?api_key=3ac20e37c3b1bdd32dadec03d228864f";

export const moviedetailsapi = (id: number) => {
  console.log;
  axios
    .get("https://api.themoviedb.org/3/movie/ " + id + APIKEY)
    .then((res) => res.data);
};

export const searchapi = async (keyword: string) => {
  // console.log(keyword);
  const res = await axios.get(
    " https://api.themoviedb.org/3/search/movie?api_key=3ac20e37c3b1bdd32dadec03d228864f&query=" +
      keyword
  );
  return res.data.results;
};
