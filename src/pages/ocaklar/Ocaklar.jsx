import React from "react";
import { ocaklar } from "../../utils";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import OcaklarSideBar from "../../components/OcaklarSideBar";

const Ocaklar = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="h-[120px] items-center flex-wrap flex flex-col justify-around md:items-start bg-[#f1f1f1] pl-24">
        <h2>{t("ocaklar")}</h2>
        <div className="flex justify-center items-center flex-wrap gap-1">
          <Link to="/">Marboluxe</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />

          <p>{t("ocaklar")}</p>
        </div>
      </div>
      <div className="main-holder-ocaklar flex justify-between w-[90%] mx-auto">
        <div className="hidden sm:block flex-[1]">
          <OcaklarSideBar />
        </div>
        <div className="p-4 flex flex-col items-center flex-[4] mt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-4">
            {ocaklar.map((tas, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center shadow-sm shadow-cyan-700 max-w-[300px]"
                >
                  <div className="w-full overflow-hidden">
                    <img
                      loading="lazy"
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
