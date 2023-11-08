import React, { useContext, useEffect } from "react";
import { plakalarAndezitBazalt } from "../../utils/index";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import SideBar from "../../components/SideBar";
import { MarboContext } from "../../context/MarboContext";

const PlakalarAndezitBazalt = () => {
  const navigate = useNavigate();

  const { setPlakalar, setDogalTaslar, setTezgahlar } =
    useContext(MarboContext);

  useEffect(() => {
    setPlakalar(true);
    setDogalTaslar(false);
    setTezgahlar(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumbs />
      <div className="main-holder-plakalarAndezitBazalt flex justify-between w-[90%] mx-auto ">
        <div className="flex-[1] ">
          <SideBar />
        </div>
        <div className="p-4 flex flex-col items-center flex-[4]">
          <h1 className="text-center text-3xl font-bold my-4">
            Andezit - Bazalt Plakalar
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4">
            {plakalarAndezitBazalt[0].map((tas, index) => {
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
        </div>
      </div>
    </>
  );
};

export default PlakalarAndezitBazalt;
