import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const params = useParams();
  console.log(location, "=> location", params, "=>params");
  return (
    <div className="h-[120px] flex items-center bg-yellow-400">
      {location.pathname.slice(1)}
    </div>
  );
};

export default Breadcrumbs;
