import React from "react";
import { NavLink } from "react-router-dom";

const OcaklarSideBar = () => {
  return (
    <ul className="flex flex-col mt-8 text-[#666] mb-[150px]">
      <NavLink
        to="/ocaklar/afyon-beyaz-mermer"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        AFYON BEYAZ MERMER OCAK
      </NavLink>
      <NavLink
        to="/ocaklar/marmara-beyaz-mermer"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        MARMARA BEYAZ MERMER OCAK
      </NavLink>
      <NavLink
        to="/ocaklar/gümüs-traverten"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        GÜMÜŞ TRAVERTEN OCAK
      </NavLink>
      <NavLink
        to="/ocaklar/beyaz-traverten"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        BEYAZ TRAVERTEN OCAK
      </NavLink>
      <NavLink
        to="/ocaklar/breccia-bardiglio"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        BRECCİA & BARDİGLİO OCAK
      </NavLink>
      <NavLink
        to="/ocaklar/kirmizi-traverten"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        KIRMIZI TRAVERTEN OCAK
      </NavLink>
      <NavLink
        to="/ocaklar/burdur-bej-mermer"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        BURDUR BEJ MERMER OCAK
      </NavLink>
      <NavLink
        to="/ocaklar/klasik-nove"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        KLASİK & NOVE TRAVERTEN OCAK
      </NavLink>
    </ul>
  );
};

export default OcaklarSideBar;
