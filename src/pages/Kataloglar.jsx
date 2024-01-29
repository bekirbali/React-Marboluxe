import React from "react";
import { ocaklar } from "../utils";
import pdf from "../assets/tanitimkatalog.pdf";

const Kataloglar = () => {
  return (
    <>
      <div className="flex flex-col h-[120px] justify-center items-center bg-slate-800 text-[#b4b4b4]">
        <h1 className=" font-bold text-3xl uppercase">Marboluxe Stone</h1>
        <p className="font-semibold text-2xl"> Online Catalogs</p>
        <p className="font-semibold text-l">
          You can review our catalogs of marble, imported natural stones,
          quarries and marble slabs.
        </p>
      </div>
      <div className="p-4 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-3 ">
          {ocaklar[1].map((tas, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center shadow-sm shadow-cyan-700 max-w-[300px]"
              >
                <div className="w-full overflow-hidden">
                  <a href={pdf}>
                    <img
                      loading="lazy"
                      src={tas.image}
                      alt="test"
                      className="w-full hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Kataloglar;
