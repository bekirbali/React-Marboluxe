import React, { useState } from "react";
import { ocaklar } from "../utils";
import { NavLink, useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const Ocaklar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumbs />

      <div className="main-holder-ocaklar flex justify-between w-[90%] mx-auto">
        <div className="flex-[1]">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/urunler"
          >
            Ürünler
          </NavLink>
          <ul className="ml-2 border-l-2 border-gray-300 pl-2">
            <ul className="cnc">
              <NavLink to="/urunler/cnc">CNC Ürünler</NavLink>
              <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                <NavLink to="/urunler/cnc/duvar">Duvar Dekorasyonları</NavLink>
                <NavLink to="/urunler/cnc/masalar">Masalar</NavLink>
                <NavLink to="/urunler/cnc/sehpalar">Sehpalar</NavLink>
                <NavLink to="/urunler/cnc/tabureler">Tabureler</NavLink>
              </div>
            </ul>
            <ul className="waterjet">
              <NavLink to="/urunler/waterjet">Waterjet</NavLink>
              <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                <NavLink to="/urunler/waterjet/madalyon">
                  Waterjet Madalyon
                </NavLink>
                <NavLink to="/urunler/waterjet/mozaik">Waterjet Mozaik</NavLink>
                <NavLink to="/urunler/waterjet/bordur">Waterjet Bordür</NavLink>
                <NavLink to="/urunler/waterjet/karo">Waterjet Karo</NavLink>
              </div>
            </ul>
            <ul className="dekoratif-urunler">
              <NavLink to="/urunler/dekoratif">Dekoratif Ürünler</NavLink>
              <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                <NavLink to="/urunler/dekoratif/supurgelik">Süpürgelik</NavLink>
                <NavLink to="/urunler/dekoratif/kolon">Kolon</NavLink>
                <NavLink to="/urunler/dekoratif/kurna">Kurna</NavLink>
                <NavLink to="/urunler/dekoratif/sutun">Sütun</NavLink>
                <NavLink to="/urunler/dekoratif/korkuluk">Korkuluk</NavLink>
                <NavLink to="/urunler/dekoratif/sove">Söve</NavLink>
                <NavLink to="/urunler/dekoratif/dus">Duş Teknesi</NavLink>
                <NavLink to="/urunler/dekoratif/bahce">Bahçe Süslemesi</NavLink>
                <NavLink to="/urunler/dekoratif/aksesuar">Aksesuar</NavLink>
                <NavLink to="/urunler/dekoratif/aplik">Aplik</NavLink>
                <NavLink to="/urunler/dekoratif/sampuanlik">Şampuanlık</NavLink>
              </div>
            </ul>
          </ul>
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
