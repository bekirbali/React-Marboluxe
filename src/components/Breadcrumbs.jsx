import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Breadcrumbs = () => {
  const location = useLocation();
  const { state, message } = location;
  // console.log(state); // const { name } = useParams();
  // console.log(name);

  return (
    <div className="h-[120px] items-center flex-wrap flex flex-col justify-around md:items-start bg-[#f1f1f1] pl-24">
      <h2>Özel Koleksiyon</h2>
      <div className="flex justify-center items-center flex-wrap gap-1">
        <Link to="/">Marboluxe</Link>
        <MdKeyboardDoubleArrowRight
          className="mt-1 hover:cursor-default arrow-right"
          size={12}
        />
        <Link to="/ozel-koleksiyon">Özel Koleksiyon</Link>
        {state?.name ? (
          <>
            <MdKeyboardDoubleArrowRight
              className="mt-1 hover:cursor-default arrow-right"
              size={12}
            />
            <h4>{state.name}</h4>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Breadcrumbs;
