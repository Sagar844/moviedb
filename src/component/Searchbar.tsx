import React, { FC } from "react";

type searchprops = {};

export const Searchbar: FC<searchprops> = () => {
  return (
    <div className=" ">
      <div className="absolute top-0 left-0 space-y-6 my-40 mx-5   ">
        <span className="lg:text-6xl font-bold text-white text-sm  ">
          Welcome
        </span>
        <h1 className="text-xl text-white">
          Millions of movies, TV shows and people to discover. Explore now.
        </h1>

        <input
          type="search"
          id="default-search"
          placeholder="Search for a movie, tv show, person......"
          className=" px-16 py-4 lg:w-full text-sm rounded-full  placeholder:text-black text-black "
          required
        />
        <button
          type="submit"
          className="text-white sm:flex hidden md:hidden absolute right-2.5 bottom-2.5 bg-#12c7c1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 p-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
        >
          Search
        </button>
      </div>
   
      <img
        className=" h-96  md:w-full md:h-full "
        src="https://image.tmdb.org/t/p/original/v2LilmCylr3bL9TCZSj6syjowZh.jpg"
        alt=""
      />
    </div>
  );
};
