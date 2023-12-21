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
        <ul className="flex gap-4 justify-center items-center tabs-list  h-[60px]">
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
                className="flex flex-col items-center justify-center shadow-sm shadow-cyan-700 max-w-[300px]"
              >
                <div
                  onClick={() =>
                    navigate(`${tas.name}`, { state: tas, message: "test" })
                  }
                  className="w-full overflow-hidden"
                >
                  <img
                    src={tas.image}
                    alt="test"
                    className="w-full hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
                  />
                </div>
                <p className="text-center p-2 h-20 items-center flex">
                  {tas.name}
                </p>
              </div>
            );
          })}
        </div>
        <div className="buttons flex gap-4 mt-4" onClick={pageHandler}>
          <button
            value="prev"
            className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-52"
          >
            Previous Page
          </button>
          <button
            value="next"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-52"
          >
            Next Page
          </button>
        </div>
      </div>
    </>
  );
};

export default Projeler;
