import React, { useContext, useEffect } from "react";
import { plakalarPorselenLevantec } from "../../../utils/index";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBar";
import { MarboContext } from "../../../context/MarboContext";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const PlakalarPorselenLevantec = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const { setPorselenPlaka, setKuvarsPlaka, setDogalTaslar, setTezgahlar } =
    useContext(MarboContext);

  useEffect(() => {
    setPorselenPlaka(true);
    setKuvarsPlaka(false);
    setDogalTaslar(false);
    setTezgahlar(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Link to="/plakalar/porselen-plakalar">{t("porselen plakalar")}</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <p>{t("levantec plakalar")}</p>
        </div>
      </div>
      <div className="main-holder-PlakalarPorselenLevantec flex justify-between w-[90%] mx-auto ">
        <div className="hidden sm:block flex-[1] ">
          <SideBar />
        </div>
        <div className="p-4 flex flex-col items-center flex-[4] mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4">
            {plakalarPorselenLevantec[0].map((tas, index) => {
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
        </div>
      </div>
    </>
  );
};

export default PlakalarPorselenLevantec;
