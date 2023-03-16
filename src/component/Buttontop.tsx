import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-scroll";

export const Buttontop = () => {
  const [hover, sethover] = useState(false);
  return (
    <div className="fixed bottom-0 right-0 mx-4 mb-4 ">
      <Link to="Navbar" smooth={true} spy={true}>
        <button
          onMouseOver={() => sethover(true)}
          onMouseLeave={() => sethover(false)}
          data-tooltip-target="tooltip-default"
          className=" bg-[#032541e0]  text-purple-500 rounded-full p-4 animate-bounce  "
        >
          <AiOutlineArrowUp />
        </button>
      </Link>
      {hover && (
        <div
          id="tooltip-default"
          role="tooltip"
          className="absolute mb-16    bottom-0 right-0 rounded-md px-3 py-2 text-sm font-medium text-white transition-opacity duration-300  dark:bg-gray-700"
        >
          Scroll to top
     
        </div>
      )}
    </div>
  );
};
