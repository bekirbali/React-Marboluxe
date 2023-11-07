import React, { useContext, useEffect, useState } from "react";
import { plakalarKuvarsCimstone } from "../../../utils/index";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SideBar from "../../../components/SideBar";
import { MarboContext } from "../../../context/MarboContext";

const PlakalarKuvarsCim = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const { setKuvarsPlaka, setDogalTaslar, setTezgahlar } =
    useContext(MarboContext);

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
      if (page === plakalarKuvarsCimstone.length - 1) {
        console.log("lastPage");
        return;
      }
      setPage(page + 1);
    }
  };

  useEffect(() => {
    setKuvarsPlaka(true);
    setDogalTaslar(false);
    setTezgahlar(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumbs />
      <div className="main-holder-plakalarKuvarsCimstone flex justify-between w-[90%] mx-auto ">
        <div className="flex-[1] ">
          <SideBar />
        </div>
        <div className="p-4 flex flex-col items-center flex-[4]">
          <h1 className="text-center text-3xl font-bold my-4">
            Çimstone Kuvars Plakalar
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-4">
            {plakalarKuvarsCimstone[page].map((tas, index) => {
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
                  <p className="text-center p-2">{tas.name}</p>
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
      </div>
    </>
  );
};

export default PlakalarKuvarsCim;
