import React from "react";
import { afyonOcak } from "../../utils";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const AfyonOcak = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <>
      <div className="h-[120px] items-center flex-wrap flex flex-col justify-around md:items-start bg-[#f1f1f1] pl-24">
        <h2>AfyonOcak</h2>
        <div className="flex justify-center items-center flex-wrap gap-1">
          <Link to="/">Marboluxe</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <p>{t("AfyonOcak")}</p>
        </div>
      </div>
      <div className="main-holder-AfyonOcak flex justify-between w-[90%] mx-auto">
        <div className="flex-[1]">
          <ul className="waterjet flex flex-col mt-8 text-[#666]">
            <NavLink
              to="/urunler/waterjet/madalyon"
              className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
            >
              AFYON BEYAZ MERMER OCAK
            </NavLink>
            <NavLink
              to="/urunler/waterjet/mozaik"
              className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
            >
              MARMARA BEYAZ MERMER OCAK
            </NavLink>
            <NavLink
              to="/urunler/waterjet/bordur"
              className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
            >
              GÜMÜŞ TRAVERTEN OCAK
            </NavLink>
            <NavLink
              to="/urunler/waterjet/karo"
              className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
            >
              BEYAZ TRAVERTEN OCAK
            </NavLink>
            <NavLink
              to="/urunler/waterjet/karo"
              className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
            >
              BRECCİA & BARDİGLİO OCAK
            </NavLink>
            <NavLink
              to="/urunler/waterjet/karo"
              className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
            >
              KIRMIZI TRAVERTEN OCAK
            </NavLink>
            <NavLink
              to="/urunler/waterjet/karo"
              className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
            >
              BURDUR BEJ MERMER OCAK
            </NavLink>
            <NavLink
              to="/urunler/waterjet/karo"
              className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
            >
              KLASİK & NOVE TRAVERTEN OCAK
            </NavLink>
          </ul>
        </div>
        <div className="p-4 flex flex-col items-center flex-[4] mt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-4">
            {afyonOcak.map((tas, index) => {
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

export default AfyonOcak;
