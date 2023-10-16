import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoForMarboLuxe.png";

const NavBar = () => {
  return (
    <div className="h-[96px] flex flex-col">
      {/* Top info section */}
      <div className="info flex flex-1 justify-end mr-3 gap-2">
        <div className="language">Turkish</div>
        <div className="corporate">Corporate</div>
        <div className="socials">FaceBook - Instagram - LinkedIn</div>
      </div>

      {/* Navbar Section */}
      <div className="flex justify-between items-center bg-slate-500">
        <div className="logo flex ml-4">
          <p className="flex items-center font-bold text-3xl">
            <Link to="/">MarboLuxe</Link>
          </p>
          <img className="w-16 h-16" src={logo} alt=" test" />
        </div>
        <ul className="flex flex-3 gap-4 h-full items-center mr-4 ">
          <li>
            <Link to="/dogal-taslar">Doğal Taşlar</Link>
          </li>
          <li>
            <Link to="/kataloglar">Kataloglar</Link>
          </li>
          <li>
            <Link to="/ocaklar">Ocaklar</Link>
          </li>
          <li>
            <Link to="/ozel-koleksiyon">Özel Koleksiyon</Link>
          </li>
          <li>
            <Link to="/plakalar">Plakalar</Link>
          </li>
          <li>
            <Link to="/projeler">Projeler</Link>
          </li>
          <li>
            <Link to="/tezgahlar">Tezgahlar</Link>
          </li>
          <li>
            <Link to="/urunler">Ürünler</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
