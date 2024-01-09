import React, { useState } from "react";
import { dogalTaslar, dogalTaslarMermer } from "../utils";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Kataloglar = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const backHandler = () => {
    if (page === 0) {
      console.log("firstPage");
      return;
    }
    setPage(page - 1);
    return;
  };

  const nextHandler = () => {
    if (page === dogalTaslarMermer.length - 1) {
      console.log("lastPage");
      return;
    }
    setPage(page + 1);
  };

  return (
    <>
      <div className="flex flex-col h-[120px] justify-center items-center bg-slate-700 text-white">
        <h1 className=" font-bold text-3xl uppercase">Marboluxe Stone</h1>
        <p className="font-semibold text-2xl"> Online Catalogs</p>
        <p className="font-semibold text-l">
          You can review our catalogs of marble, imported natural stones,
          quarries and marble slabs.
        </p>
      </div>
      <div className="p-4 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-4">
          {dogalTaslar[page].map((tas, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center shadow-sm shadow-cyan-700 max-w-[300px]"
              >
                <div
                  onClick={() => navigate(`${tas.name}`, { state: tas })}
                  className="w-full overflow-hidden"
                >
                  <img
                    src={tas.image}
                    alt="test"
                    className="w-full h-[250px] hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
                  />
                </div>
                <p className="text-center p-2">{tas.name}</p>
              </div>
            );
          })}
        </div>
        <div className="buttons flex gap-4 mt-4">
          <BsFillArrowLeftCircleFill
            size={24}
            color="gray"
            onClick={backHandler}
          />
          <BsFillArrowRightCircleFill
            size={24}
            color="gray"
            onClick={nextHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Kataloglar;
