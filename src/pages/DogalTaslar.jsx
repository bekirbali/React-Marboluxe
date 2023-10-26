import React, { useState } from "react";
import { dogalTaslar } from "../utils";

const DogalTaslar = () => {
  const [page, setPage] = useState(0);

  const pageHandler = (e) => {
    console.log(e);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold my-4">Doğal Taşlar</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-4 ">
        {dogalTaslar[page].map((tas, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center shadow-sm shadow-cyan-700 max-w-[300px]"
            >
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
      <div className="buttons flex gap-4 mt-4" onClick={pageHandler}>
        <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded w-52">
          Previous Page
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-52">
          Next Page
        </button>
      </div>
    </div>
  );
};

export default DogalTaslar;
