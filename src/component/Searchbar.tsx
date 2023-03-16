import { FC } from "react";
import Image from "../assets/welcome.jpg";

type searchprops = {};

export const Searchbar: FC<searchprops> = () => {
  return (
    <div id="Navbar" className=" ">
      <img
        className=" h-96  md:w-full md:h-full lg:max-h-full "
        src={Image}
        alt=""
      />
      <div className=" absolute top-0 mt-40 text-white mx-10 lg:mt-80 lg:items-center lg:space-y-5  font-bold">
        <h1 className="text-6xl">Welcome.</h1>
        <h1 className="lg:text-3xl">
          {" "}
          Millions of movies, TV shows and people to discover. Explore now.
        </h1>
      </div>
    </div>
  );
};
