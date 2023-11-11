import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  return (
    <div className="h-[120px] items-center flex-wrap flex flex-col justify-around md:items-start bg-[#f1f1f1] pl-24">
      <h2>
        {location.pathname
          .split("/")[1]
          .split("-")
          .join(" ")
          .toLocaleUpperCase()}
      </h2>

      {/* <Link to={`/${location.pathname.split("/")[1]}`}>text</Link> */}
      <div className="flex justify-center flex-wrap">
        <Link to="/">Marboluxe{">>"}</Link>
        <div>
          {location.pathname
            .slice(1)
            .split("%")
            .join("-")
            .split("/")
            .map((word, index) => (
              <Link
                to={`/${word}`}
                key={index}
                className="hover:cursor-pointer hover:text-cyan-700"
              >
                {word}
              </Link>
            ))}
        </div>
        {/* <Link> {location.pathname.slice(1).split("/").join(">>")}</Link> */}
      </div>
    </div>
  );
};

export default Breadcrumbs;
