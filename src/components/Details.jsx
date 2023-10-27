import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div>
      <>
        <p>{state.name}</p>
        <img
          src="./images/dogal/Andezit/NIGELLA-300X300.avif"
          alt={state.name}
          className="w-[200px] h-[200px] bg-cyan-400"
        />
      </>
    </div>
  );
};

export default Details;
