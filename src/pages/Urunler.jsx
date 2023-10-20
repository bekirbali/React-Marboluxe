import React from "react";
import { dogalTaslar } from "../utils";

const Urunler = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-bold my-4">Ürünler</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {dogalTaslar[0].map((tas) => {
          return (
            <div className="flex flex-col items-center justify-center w-[24%]">
              <img src={tas.image} alt="test" className="w-full h-[250px] " />
              <p className="text-center">{tas.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Urunler;
