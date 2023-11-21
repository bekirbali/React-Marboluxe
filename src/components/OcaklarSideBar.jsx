import React from "react";
import { NavLink } from "react-router-dom";

const OcaklarSideBar = () => {
  return (
    <ul className="waterjet flex flex-col mt-8 text-[#666]">
      <NavLink
        to="/ocaklar/waterjet/madalyon"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        AFYON BEYAZ MERMER OCAK
      </NavLink>
      <NavLink
        to="/ocaklar/waterjet/mozaik"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        MARMARA BEYAZ MERMER OCAK
      </NavLink>
      <NavLink
        to="/ocaklar/waterjet/bordur"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        GÜMÜŞ TRAVERTEN OCAK
      </NavLink>
      <NavLink
        to="/ocaklar/waterjet/karo"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        BEYAZ TRAVERTEN OCAK
      </NavLink>
      <NavLink
        to="/ocaklar/waterjet/karo"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        BRECCİA & BARDİGLİO OCAK
      </NavLink>
      <NavLink
        to="/ocaklar/waterjet/karo"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        KIRMIZI TRAVERTEN OCAK
      </NavLink>
      <NavLink
        to="/ocaklar/waterjet/karo"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        BURDUR BEJ MERMER OCAK
      </NavLink>
      <NavLink
        to="/ocaklar/waterjet/karo"
        className="hover:border-r-4 hover:border-gray-600 duration-100 ease-in-out font-semibold border-b-2 border-r-2 p-2 border-r-gray-200 hover:border-b-gray-200"
      >
        KLASİK & NOVE TRAVERTEN OCAK
      </NavLink>
    </ul>
  );
};

export default OcaklarSideBar;
