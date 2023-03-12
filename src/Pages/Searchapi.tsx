import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loading } from "../component/Loading";
import { movies } from "../Models/movietype";
import { Link, useSearchParams } from "react-router-dom";
import { searchapi } from "../api";

const posturl = (posterpath: string) => {
  return `https://image.tmdb.org/t/p/original${posterpath}`;
};

export const Searchapi = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setresults] = useState<movies[]>([]);
  const [togle, settogle] = useState(false);

  const parms = Object.fromEntries([...searchParams]);
  let { query } = parms;
  localStorage.setItem("query", query);

  function handlechange(event: { target: { value: any } }) {
    setSearchParams(
      { ...parms, query: event.target.value },
      { replace: false }
    );
  }
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  });

  const detectKeyDown = (e: any) => {
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
          className="  py-2 px-8  text-sm  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Movies, Tv show..."
          required
          autoComplete="on"
        />
      </div>

      {togle && (
        <div
          id="container"
          onClick={handleclose}
          className="backdrop-blur-sm  inset-0  fixed  bg-opacity-30  overflow-hidden "
        >
          <div className="bg-white py-4  px-8 mx-60 my-auto  mt-60  rounded-md  ">
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
                  className="block w-full px-4 py-4 pl-10 text-sm mb-3  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Movies, Tv show..."
                  required
                  autoComplete="on"
                  value={query}
                />
              </div>
            </form>
            {results.length ==0  && <div>Search Your Movies </div>}

            {results.length > 0 && (
              <div className=" overflow-y-scroll h-48">
                {results.map((res) => {
                  return (
                    <div
                      className="flex space-x-2  border-b-2 mb-5"
                      key={res.id}
                    >
                      <Link to={"/trending/" + res.id}>
                        <img
                          className="w-10 h-10 "
                          src={posturl(res.poster_path)}
                          alt=""
                        />
                        <h1>{res.title}</h1>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}

            {results.length == 0 && <div>No Moview Found</div>}
          </div>
        </div>
      )}
    </div>
  );
};
