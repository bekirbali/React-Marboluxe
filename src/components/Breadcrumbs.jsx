import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  console.log(location.pathname.split("/")[1]);
  return (
    <div className="h-[120px] flex flex-col justify-around items-start bg-[#f1f1f1] pl-24">
      <h2>
        {location.pathname.split("/")[1].split("-").join(" ").toUpperCase()}
      </h2>
      <Link to={`/${location.pathname.split("/")[1]}`}>
        <p>{location.pathname.slice(1).split("%").join("-")}</p>
      </Link>
    </div>
  );
};

export default Breadcrumbs;
