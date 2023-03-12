import { FC, memo, useState } from "react";
import { Link } from "react-router-dom";
import { Searchapi } from "../Pages/Searchapi";
import { Hambergun } from "./Hambergun";
import TemporaryDrawer from "./TemporaryDrawer";
import Userprofile from "./Userprofile";

type Navbarprops = {};

const Navbar: FC<Navbarprops> = () => {
  
  const [popup, setpopup] = useState(false);
  const [pop, setpop] = useState(false);
  const [popes, setpopes] = useState(false);
  const [people, setpeople] = useState(false);

  return (
    <div >
      <div className=" bg-[#032541fa] z-10 fixed right-0 left-0 px-2.5 py-3 lg:py-2 md:py-2 ">
        <div className="container flex flex-wrap items-center justify-between ">
          <Link to="/">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              className="w-36  sm:h-9 sm:flex hidden"
              alt="TMDB LOGO"
            />
            <div className="flex justify-center">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                className="h-10 mr-3 lg:hidden md:hidden"
              />
            </div>
          </Link>
          <Searchapi />
          <Userprofile />

          <Hambergun />
          <div className="hidden w-full md:block  md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border  border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:border-gray-700">
              <button
                onMouseOver={() => setpopup(true)}
                onMouseOut={() => setpopup(false)}
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 "
                aria-current="page"
              >
                Movies
              </button>

              <button
                onMouseOver={() => setpop(true)}
                onMouseOut={() => setpop(false)}
                className="block py-2 pl-3 pr-4  rounded text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Tv Show
              </button>

              <button
                onMouseOver={() => setpeople(true)}
                onMouseOut={() => setpeople(false)}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                People
              </button>

              <button
                onMouseOver={() => setpopes(true)}
                onMouseOut={() => setpopes(false)}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                More
              </button>

              <TemporaryDrawer />
            </ul>
          </div>
          {popup && (
            <div className="bg-white fixed  top-0 right-0 mx-60  rounded-md px-16 py-4 my-14   text-gray-500">
              <h1>Popular </h1>
              <h1>Now Playing </h1>
              <h1>Upcoming </h1>
              <h1>Top Rated </h1>
            </div>
          )}
          {pop && (
            <div className="bg-white fixed  top-0 right-0 mx-40  rounded-md px-16 py-4 my-14   text-gray-500">
              <h1>Popular </h1>
              <h1>On Tv</h1>
              <h1>Airing Today</h1>
            </div>
          )}
          {popes && (
            <div className="bg-white fixed  top-0 right-0 mx-30  rounded-md px-16 py-4 my-14   text-gray-500">
              <h1>Support </h1>
              <h1>Api</h1>
              <h1>Leaderboard </h1>
            </div>
          )}
          {people && (
            <div className="bg-white fixed  top-0 right-0 mx-26  rounded-md px-16 py-4 my-14   text-gray-500">
              <h1>Popular People </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {};
export default memo(Navbar);
