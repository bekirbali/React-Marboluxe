import React from "react";
import { useLocation } from "react-router-dom";

// import test from "/images/mermer.avif";
import { dogalTaslar } from "../utils";

const Details = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div className="flex flex-col items-center justify-center shadow-sm shadow-cyan-700 max-w-[300px]">
      <div className="w-full overflow-hidden">
        <img
          src={state.image.slice(1)}
          alt="test"
          className="w-full h-[250px] hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
        />
      </div>
      <p className="text-center p-2">{state.name}</p>
    </div>
  );
};

export default Details;
