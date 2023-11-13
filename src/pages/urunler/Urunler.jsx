import React, { useContext, useEffect, useState } from "react";
import { urunler } from "../../utils";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import SideBar from "../../components/SideBar";
import { MarboContext } from "../../context/MarboContext";

const Urunler = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const { setDogalTaslar, setPlakalar, setTezgahlar, setUrunler } =
    useContext(MarboContext);

  const backHandler = () => {
    if (page === 0) {
      console.log("firstPage");
      return;
    }
    setPage(page - 1);
    return;
  };

  const nextHandler = () => {
    if (page === urunler.length - 1) {
      console.log("lastPage");
      return;
    }
    setPage(page + 1);
  };

  // const pageHandler = (e) => {
  //   if (e.target.value === "prev") {
  //     if (page === 0) {
  //       console.log("firstPage");
  //       return;
  //     }
  //     setPage(page - 1);
  //     return;
  //   }
  //   if (e.target.value === "next") {
  //     if (page === urunler.length - 1) {
  //       console.log("lastPage");
  //       return;
  //     }
  //     setPage(page + 1);
  //   }
  // };

  useEffect(() => {
    setPlakalar(false);
    setDogalTaslar(false);
    setTezgahlar(false);
    setUrunler(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumbs />
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4]">
          <h1 className="text-center text-3xl font-bold my-4">Ürünler</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4">
            {urunler[page].map((tas, index) => {
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
          <div className="buttons flex gap-4 mt-4">
            <button>
              <BsFillArrowLeftCircleFill
                size={24}
                color="gray"
                onClick={backHandler}
              />
            </button>
            {urunler.map((item, index) => (
              <p
                key={index}
                onClick={(e) => setPage(e.target.innerText - 1)}
                className="border-2 border-[#434343] hover:bg-gray-500 hover:text-white hover:cursor-pointer ease-in-out duration-300  rounded-full w-6 h-6 flex items-center justify-center p-3"
              >
                {index + 1}
              </p>
            ))}
            <button>
              <BsFillArrowRightCircleFill
                size={24}
                color="gray"
                onClick={nextHandler}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Urunler;
