import React from "react";
import { dogalTaslar } from "../utils";

const DogalTaslar = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-bold my-4">Doğal Taşlar</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {dogalTaslar[1].map((tas) => {
          return (
            <div className="flex flex-col items-center justify-center w-[24%]">
              <div className="w-full overflow-hidden">
                <img
                  src={tas.image}
                  alt="test"
                  className="w-full h-[250px] hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
                />
              </div>
              <p className="text-center">{tas.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DogalTaslar;
