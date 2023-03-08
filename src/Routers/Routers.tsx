import React from "react";
import { Searchbar } from "../component/Searchbar";
import Trending from "../component/Trending";
import Userprofile from "../component/Userprofile";
import Moviewshow from "../Pages/Moviewshow";

export const Routers = () => {
  return (
    <div>
      <Searchbar />
      <Moviewshow />
    </div>
  );
};
