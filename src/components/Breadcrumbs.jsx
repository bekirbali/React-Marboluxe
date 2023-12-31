import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Breadcrumbs = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="h-[120px] items-center flex-wrap flex flex-col justify-around md:items-start bg-[#f1f1f1] pl-24">
      <div className="flex justify-center items-center flex-wrap gap-1">
        <Link to="/">Marboluxe</Link>
        <MdKeyboardDoubleArrowRight
          className="mt-1 hover:cursor-default arrow-right"
          size={12}
        />
        <Link to={`/${state?.link1}`}>{state?.linkName1}</Link>
        {state?.link2 && (
          <>
            <MdKeyboardDoubleArrowRight
              className="mt-1 hover:cursor-default arrow-right"
              size={12}
            />
            <Link to={`/${state?.link1}/${state?.link2}`}>
              {state?.linkName2}
            </Link>
          </>
        )}
        {state?.link3 && (
          <>
            <MdKeyboardDoubleArrowRight
              className="mt-1 hover:cursor-default arrow-right"
              size={12}
            />
            <Link to={`/${state?.link1}/${state?.link2}/${state?.link3}`}>
              {state?.linkName3}
            </Link>
          </>
        )}
        {state?.name ? (
          <>
            <MdKeyboardDoubleArrowRight
              className="mt-1 hover:cursor-default arrow-right"
              size={12}
            />
            <h4>{state?.name}</h4>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Breadcrumbs;
