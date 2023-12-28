import React, { useState } from "react";
import { dogalTaslar, projects } from "../utils";
import { useNavigate } from "react-router-dom";

const Projeler = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const pageHandler = (e) => {
    if (e.target.value === "prev") {
      if (page === 0) {
        console.log("firstPage");
        return;
      }
      setPage(page - 1);
      return;
    }
    if (e.target.value === "next") {
      if (page === dogalTaslar.length - 1) {
        console.log("lastPage");
        return;
      }
      setPage(page + 1);
    }
  };
  return (
    <>
      <div className="h-[120px] flex justify-center items-center bg-slate-700 text-white">
        <h1 className="font-bold text-3xl">PROJELER</h1>
      </div>
      <div className="tabs">
        <ul className="flex flex-wrap gap-4 mt-4 justify-center items-center tabs-list ">
          <li>TÜMÜ</li>
          <li>AVM</li>
          <li>BANYO</li>
          <li>DIŞ MEKAN</li>
          <li>İÇ MEKAN</li>
          <li>KONUT - REZİDANS</li>
          <li>OFİS - MAĞAZA</li>
          <li>OTEL</li>
          <li>RESTAURANT - CAFE</li>
          <li>RESTORASYON</li>
        </ul>
      </div>
      <div className="p-4 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-4">
          {projects.map((tas, index) => {
            return (
              <div
                key={index}
                className="projects overflow-hidden relative flex flex-col items-center justify-center shadow-sm shadow-cyan-600 max-w-[300px]"
              >
                <div
                  onClick={() =>
                    navigate(`${tas.name}`, { state: tas, message: "test" })
                  }
                  className="w-full h-[310px] overflow-hidden text-center flex justify-center"
                >
                  <img
                    src={tas.image}
                    alt="test"
                    className="w-full h-full  transition duration-700 hover:cursor-pointer"
                  />
                </div>
                <p className="projects-p text-center h-20 items-center flex justify-center absolute flex-wrap w-[220px] backdrop-blur-sm">
                  {tas.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projeler;
