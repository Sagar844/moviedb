import React, { FC } from "react";

type searchprops = {};

export const Searchbar: FC<searchprops> = () => {
  return (
    <div className="">
      <div className="absolute top-0 left-0 space-y-10 my-20 mx-5   ">
        <span className="lg:text-6xl font-bold text-white text-sm mt-60">
          Welcome
        </span>
        <h1 className="text-xl text-white">
          Millions of movies, TV shows and people to discover. Explore now.
        </h1>

        <input
          type="search"
          id="default-search"
          placeholder="Search for a movie, tv show, person......"
          className=" px-16 py-4 lg:px-96 text-sm rounded-full  placeholder:text-black text-black "
          required
        />
        <button
          type="submit"
          className="text-white sm:flex hidden absolute right-2.5 bottom-2.5 bg-#12c7c1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 p-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
        >
          Search
        </button>
      </div>
      <div>
        <img
          className="object-cover h-96  w-screen"
          src="https://image.tmdb.org/t/p/original/98Hak5vgStHNrQ90ZfDiHSto1hV.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
