import React, { useState } from "react";
import { dogalTaslar } from "../utils";

const Ocaklar = () => {
  const [page, setPage] = useState(0);

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
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold my-4">Ocaklar</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-4">
        {dogalTaslar[4].map((tas) => {
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
  );
};

export default Ocaklar;
