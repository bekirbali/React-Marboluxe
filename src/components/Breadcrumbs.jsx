import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  console.log(location);
  return <div>{location.pathname.slice(1)}</div>;
};

export default Breadcrumbs;
