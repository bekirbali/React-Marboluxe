import React from "react";
// import { dogalTaslar } from "../utils";
import pdf from "../assets/tanitimkatalog.pdf";
import slabs from "../assets/slabs.jpg";
import showrooms from "../assets/showrooms.jpg";
import plakalar from "../assets/plakalar.jpg";
import porselen from "../assets/porselen.jpg";

const Kataloglar = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
          <a href={pdf} target="_blank" rel="noreferrer">
            <img src={slabs} alt="" className="w-[500px]" />
          </a>
          <a href={pdf} target="_blank" rel="noreferrer">
            <img src={porselen} alt="" className="w-[500px]" />
          </a>
          <a href={pdf} target="_blank" rel="noreferrer">
            <img src={slabs} alt="" className="w-[500px]" />
          </a>
          <a href={pdf} target="_blank" rel="noreferrer">
            <img src={porselen} alt="" className="w-[500px]" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Kataloglar;
