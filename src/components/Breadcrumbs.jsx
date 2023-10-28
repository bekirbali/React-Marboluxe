import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  return (
    <div className="h-[120px] flex flex-col justify-around items-start bg-[#f1f1f1] pl-24">
      <h2>
        {location.pathname
          .split("/")[1]
          .split("-")
          .join(" ")
          .toLocaleUpperCase()}
      </h2>
      <Link to={`/${location.pathname.split("/")[1]}`}>
        <div className="flex">
          {location.pathname
            .slice(1)
            .split("%")
            .join("-")
            .split("/")
            .map((word, index) => (
              <p
                key={index}
                className="hover:cursor-pointer hover:text-cyan-700"
              >
                {`${word}>>`}
              </p>
            ))}
        </div>
      </Link>
    </div>
  );
};

export default Breadcrumbs;
