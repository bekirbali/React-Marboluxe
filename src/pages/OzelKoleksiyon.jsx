import React from "react";
import { ozelKoleksiyon } from "../utils";

const OzelKoleksiyon = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-bold my-4">Özel Koleksiyon</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {ozelKoleksiyon[0].map((tas) => {
          return (
            <div className="flex flex-col items-center justify-center w-[24%] shadow-sm shadow-cyan-700">
              <img src={tas.image} alt="test" className="w-full h-[250px] " />
              <p className="text-center p-4">{tas.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OzelKoleksiyon;
