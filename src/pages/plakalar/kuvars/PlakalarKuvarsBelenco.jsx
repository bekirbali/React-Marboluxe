import React, { useContext, useEffect, useState } from "react";
import { plakalarKuvarsBelenco } from "../../../utils/index";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBar";
import { MarboContext } from "../../../context/MarboContext";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const PlakalarKuvarsBelenco = () => {
  const [page, setPage] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const { setKuvarsPlaka, setDogalTaslar, setTezgahlar } =
    useContext(MarboContext);

  const pageHandler = (e) => {
    setPage(e.target.innerText - 1);
  };

  const backHandler = () => {
    if (page === 0) {
      console.log("firstPage");
      return;
    }
    setPage(page - 1);
    return;
  };

  const nextHandler = () => {
    if (page === plakalarKuvarsBelenco.length - 1) {
      console.log("lastPage");
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    setKuvarsPlaka(true);
    setDogalTaslar(false);
    setTezgahlar(false);
    setActivePage(page + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <div className="h-[120px] items-center flex-wrap flex flex-col justify-around md:items-start bg-[#f1f1f1] pl-24">
        <h2>{t("plakalar")}</h2>
        <div className="flex justify-center items-center flex-wrap gap-1">
          <Link to="/">Marboluxe</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <Link to="/plakalar">{t("plakalar")}</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <Link to="/plakalar/kuvars-plakalar">{t("kuvars plakalar")}</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <p>{t("belenco plakalar")}</p>
        </div>
      </div>
      <div className="main-holder-plakalarKuvarsBelenco flex justify-between w-[90%] mx-auto ">
        <div className="hidden sm:block flex-[1] ">
          <SideBar />
        </div>
        <div className="p-4 flex flex-col items-center flex-[4] mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4">
            {plakalarKuvarsBelenco[page].map((tas, index) => {
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
                      loading="lazy"
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
            <div className="flex flex-wrap gap-2">
              {plakalarKuvarsBelenco.map((item, index) => (
                <p
                  key={index}
                  onClick={pageHandler}
                  className={`border-2 border-[#434343] hover:bg-gray-500 hover:text-white hover:cursor-pointer ease-in-out duration-300  rounded-full w-6 h-6 flex items-center justify-center p-3
                ${activePage === index + 1 ? "bg-gray-500 text-white" : ""}
                `}
                >
                  {index + 1}
                </p>
              ))}
            </div>
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

export default PlakalarKuvarsBelenco;
