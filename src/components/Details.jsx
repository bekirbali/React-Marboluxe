import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// import test from "/images/mermer.avif";
import { dogalTaslar } from "../utils";
import Breadcrumbs from "./Breadcrumbs";
import DetailModal from "./DetailModal";

const Details = () => {
  const location = useLocation();
  const { state } = location;

  const [modal, setModal] = useState(false);

  return (
    <div className=" relative overflow-hidden">
      <Breadcrumbs />
      <div className="flex justify-around p-4 w-[90%] mx-auto ">
        <div className="flex flex-col items-center justify-center max-w-[50%]">
          <div
            onClick={() => setModal(true)}
            className="w-full overflow-hidden"
          >
            <img
              src={state.image.slice(1)}
              alt="test"
              className="hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
            />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl">{state.name}</h2>
        </div>
        {modal && (
          <div className="absolute w-[100vw] h-[100vh] top-0 ">
            <DetailModal
              image={state.image}
              modal={modal}
              setModal={setModal}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
