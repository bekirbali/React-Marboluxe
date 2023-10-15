import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="h-[80px]">
      <div className="info flex flex-1 justify-end mr-3 gap-2">
        <div className="language">Turkish</div>
        <div className="corporate">Corporate</div>
        <div className="socials">FaceBook - Instagram - LinkedIn</div>
      </div>
      <ul className="flex flex-3 gap-4 h-full bg-slate-700">
        <Link to="/dogal-taslar">Doğal Taşlar</Link>
        <Link to="/kataloglar">Kataloglar</Link>
        <Link to="/ocaklar">Ocaklar</Link>
        <Link to="/ozel-koleksiyon">Özel Koleksiyon</Link>
        <Link to="/plakalar">Plakalar</Link>
        <Link to="/projeler">Projeler</Link>
        <Link to="/tezgahlar">Tezgahlar</Link>
        <Link to="/urunler">Ürünler</Link>
      </ul>
    </div>
  );
};

export default NavBar;
