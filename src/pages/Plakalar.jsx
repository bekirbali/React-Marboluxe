import React from "react";
import { dogalTaslar } from "../utils";

const Plakalar = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-bold my-4">Plakalar</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {dogalTaslar[0].map((tas) => {
          return (
            <div className="flex flex-col items-center justify-center">
              <img
                src={tas.image}
                alt="test"
                className="w-[250px] h-[250px] "
              />
              <p className="text-center">{tas.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plakalar;
