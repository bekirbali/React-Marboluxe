import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="flex gap-4 bg-slate-700">
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
