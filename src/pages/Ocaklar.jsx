import React, { useState } from "react";
import { ocaklar } from "../utils";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const Ocaklar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumbs />
      <div className="main-holder-ocaklar flex justify-between w-[90%] mx-auto">
        <div className="side-bar flex-[1]">
          <div className="tezgahlar">
            <h3 className="font-bold">Tezgahlar</h3>

            <ul className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col gap-2">
              <li>Caesarstone Tezgah</li>
              <li>Calisco Tezgah</li>
              <li>Belenco Tezgah</li>
              <li>Çimstone Tezgah</li>
            </ul>
          </div>
        </div>
        <div className="p-4 flex flex-col items-center flex-[4]">
          <h1 className="text-center text-3xl font-bold my-4">Ocaklar</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-4">
            {ocaklar.map((tas, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center shadow-sm shadow-cyan-700 max-w-[300px]"
                >
                  <div
                    onClick={() => navigate(`${tas.name}`, { state: tas })}
                    className="w-full overflow-hidden"
                  >
                    <img
                      src={tas.image}
                      alt="test"
                      className="w-full h-[250px] hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ocaklar;
