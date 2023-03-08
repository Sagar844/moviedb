import { FC, useState } from "react";

type apiimageprop = {};

export const Hambergun: FC<apiimageprop> = () => {
  const [togle, settgle] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => settgle(!togle)}
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 "
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {togle && (
        <div className=" space-y-2 z-40 h-screen fixed  left-0  px-48 my-3 bg-[#032541]  transition-transform translate-x-0 ">
          <div className="text-white text-2xl font-bold space-y-2 mt-10  -mx-36">
            <h2>Movies</h2>
            <h1>Tv Shows</h1>
            <h1>People</h1>
          </div>
          <div className="text-gray-400 space-y-2 -mx-36">
            <h1>Constribution Bible</h1>
            <h1>Apps</h1>
            <h1>Discussions</h1>
            <h1>Leaderboard</h1>
            <h1>API</h1>
            <h1>Support</h1>
            <h1>About</h1>
            <h1>Logout</h1>
          </div>
        </div>
      )}
    </div>
  );
};
