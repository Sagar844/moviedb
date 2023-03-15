import { useEffect, useState } from "react";
import { Loading } from "../component/Loading";
import { movies } from "../Models/movietype";
import { Link, useSearchParams } from "react-router-dom";
import { searchapi } from "../api";
import { FaSearchengin } from "react-icons/fa";
const posturl = (posterpath: string) => {
  return `https://image.tmdb.org/t/p/original${posterpath}`;
};

export const Searchapi = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setresults] = useState<movies[]>([]);
  const [togle, settogle] = useState(false);

  // console.log(results)

  const parms = Object.fromEntries([...searchParams]);
  let { query } = parms;
  localStorage.setItem("query", query);

  function handlechange(event: { target: { value: string } }) {
    setSearchParams(
      { ...parms, query: event.target.value },
      { replace: false }
    );
  }

  // escape key
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  });

  const detectKeyDown = (e: any) => {
    console.log(e);
    if (e.key === "Escape") {
      settogle(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await searchapi(query);
        setresults(res);
      } catch (error) {}
    })();

    return () => {};
  }, [query]);

  const handleclose = (e: any) => {
    if (e.target.id === "container") settogle(false);
  };

  return (
    <div className="  mx-auto ">
      <div className="sm:flex hidden">
        <input
          onClick={() => settogle(true)}
          type="search"
          id="default-search"
          className="  py-2 px-20  text-sm  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Movies, Tv show... "
          required
          autoComplete="on"
        />
      </div>
      <div
        onClick={() => settogle(true)}
        className="lg:hidden md:hidden text-3xl text-white justify-center items-center"
      >
        <FaSearchengin />
      </div>
      {/* bg-white  rounded-md  */}
      {togle && (
        <div
          id="container"
          onClick={handleclose}
          className="backdrop-blur-sm  inset-0  fixed  bg-opacity-30  overflow-hidden "
        >
          <div className="bg-white justify-center my-20 mx-2  lg:py-4 py-12  lg:px-8 lg:mx-60  lg:my-40 rounded-md   ">
            <div className="flex justify-end mx-5 mb-2">
              <button
                onClick={detectKeyDown}
                className=" rounded-md px-1 text-gray-100 bg-gray-400"
              >
                Esc
              </button>
            </div>
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>

                <input
                  onChange={handlechange}
                  type="search"
                  id="default-search"
                  className="block mx-2 px-24 lg:w-full lg:px-4 py-4 pl-10 text-sm mb-3  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Movies, Tv show..."
                  required
                  autoComplete="on"
                  value={query}
                />
              </div>
            </form>
            {results.length == undefined && <div>please search</div>}
            {/* {results.length == 0 && <div> MOVIE NOT MACTH</div> && (
              <div>Search Your Movies</div>
            )} */}

            {results.length > 0 && (
              <div className=" overflow-y-scroll h-48">
                {results.map((res) => {
                  return (
                    <div
                      className="flex space-x-2  border-b-2 mb-5 mx-2"
                      key={res.id}
                    >
                      <Link target={"_blank"} to={"/trending/" + res.id}>
                        <img
                          className="w-10 h-10 "
                          src={posturl(res.poster_path)}
                          alt=""
                        />
                        <h1>{res.title}</h1>
                      </Link>
                      {/* <button onClick={}>x</button> */}
                    </div>
                  );
                })}
              </div>
            )}
            <div className="border-b-2 my-10"></div>
            <div className="flex justify-end  my-2 mx-2 space-x-2 items-center">
              <h1>Powerd by </h1>
              <img
                className="w-20"
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
function ketdown(this: Document, ev: KeyboardEvent) {
  throw new Error("Function not implemented.");
}
