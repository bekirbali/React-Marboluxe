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
      <Breadcrumbs />
      <div className="p-4 flex flex-col items-center">
        <h1 className="text-center text-3xl font-bold my-4">Kataloglar</h1>
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
