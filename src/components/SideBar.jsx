import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../app.css";
import { MarboContext } from "../context/MarboContext";

const SideBar = () => {
  const {
    tezgahlar,
    setTezgahlar,
    dogalTaslar,
    setDogalTaslar,
    plakalar,
    setPlakalar,
    bloklar,
    setBloklar,
    urunler,
    setUrunler,
    terrazo,
    setTerrazo,
    mermer,
    setMermer,
    porselenPlaka,
    setPorselenPlaka,
    kuvarsPlaka,
    setKuvarsPlaka,
    kuvarsTezgah,
    setKuvarsTezgah,
    porselenTezgah,
    setPorselenTezgah,
    cnc,
    setCnc,
    waterjet,
    setWaterjet,
    dekoratifUrunler,
    setDekoratifUrunler,
    mozaik,
    setMozaik,
  } = useContext(MarboContext);

  return (
    <div className="mt-10 max-w-[200px] mx-auto flex flex-col gap-4">
      <h2 className="font-bold">KATEGORİLER</h2>
      <div className="border-b-2 border-gray-500 w-12"></div>

      <div className="tezgahlar border-b-2 border-gray-500 pb-2 ">
        <NavLink
          className={({ isActive }) => isActive && "active"}
          to="/tezgahlar"
        >
          Tezgahlar
        </NavLink>
        <button onClick={() => setTezgahlar(!tezgahlar)} className="ml-2">
          {tezgahlar ? "↑" : "↓"}
        </button>
        {tezgahlar && (
          <ul className="ml-2 border-l-2 border-gray-300 pl-2">
            <ul className="kuvars">
              <NavLink
                className={({ isActive }) => isActive && "active"}
                to="/tezgahlar/kuvars"
              >
                Kuvars Tezgah
              </NavLink>
              <button
                onClick={() => setKuvarsTezgah(!kuvarsTezgah)}
                className="ml-2"
              >
                {kuvarsTezgah ? "↑" : "↓"}
              </button>
              {kuvarsTezgah && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/tezgahlar/kuvars/caesar"
                  >
                    Caesarstone Tezgah
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/tezgahlar/kuvars/calisco"
                  >
                    Calisco Tezgah
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/tezgahlar/kuvars/belenco"
                  >
                    Belenco Tezgah
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/tezgahlar/kuvars/cimstone"
                  >
                    Çimstone Tezgah
                  </NavLink>
                </div>
              )}
            </ul>
            <ul className="porselen">
              <NavLink
                className={({ isActive }) => isActive && "active"}
                to="/tezgahlar/porselen"
              >
                Porselen Tezgah
                <button
                  onClick={() => setPorselenTezgah(!porselenTezgah)}
                  className="ml-2"
                >
                  {porselenTezgah ? "↑" : "↓"}
                </button>
              </NavLink>
              {porselenTezgah && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/tezgahlar/porselen/sintered"
                  >
                    Sintered Stone Tezgah
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/tezgahlar/porselen/levantec"
                  >
                    Levantec Porselen Tezgah
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/tezgahlar/porselen/estestone"
                  >
                    Estestone Porselen Tezgah
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/tezgahlar/porselen/lamar"
                  >
                    Lamar Porselen Tezgah
                  </NavLink>
                </div>
              )}
            </ul>
          </ul>
        )}
      </div>
      <div className="dogal-taslar border-b-2 border-gray-500 pb-2 ">
        <NavLink
          className={({ isActive }) => isActive && "active"}
          to="/dogal-taslar"
        >
          Dogal Taşlar
        </NavLink>
        <button onClick={() => setDogalTaslar(!dogalTaslar)} className="ml-2">
          {dogalTaslar ? "↑" : "↓"}
        </button>
        {dogalTaslar && (
          <ul className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
            <ul>
              <h4>
                <NavLink
                  className={({ isActive }) => isActive && "active"}
                  to="/dogal-taslar/mermer"
                >
                  Mermer
                </NavLink>
                <button onClick={() => setMermer(!mermer)} className="ml-2">
                  {mermer ? "↑" : "↓"}
                </button>
              </h4>
              {mermer && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/dogal-taslar/mermer/beyaz-mermer"
                  >
                    Beyaz Mermer
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/dogal-taslar/mermer/gri-mermer"
                  >
                    Gri Mermer
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/dogal-taslar/mermer/kahverengi-mermer"
                  >
                    Kahverengi Mermer
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/dogal-taslar/mermer/mavi-mermer"
                  >
                    Mavi Mermer
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/dogal-taslar/mermer/siyah-mermer"
                  >
                    Siyah Mermer
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/dogal-taslar/mermer/yesil-mermer"
                  >
                    Yeşil Mermer
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/ozel-koleksiyon"
                  >
                    Özel Mermer Koleksiyonu
                  </NavLink>
                </div>
              )}
            </ul>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/dogal-taslar/bej-mermer"
            >
              Bej Mermer
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/dogal-taslar/traverten"
            >
              Traverten
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/dogal-taslar/kuvars"
            >
              Kuvars
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/dogal-taslar/granit"
            >
              Granit
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/dogal-taslar/oniks"
            >
              Oniks
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/dogal-taslar/limestone"
            >
              Linkmestone
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/dogal-taslar/andezit"
            >
              Andezit
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/dogal-taslar/bazalt"
            >
              Bazalt
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/dogal-taslar/dolomit"
            >
              Dolomit
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/dogal-taslar/dis-mekan"
            >
              Dış Mekan
            </NavLink>
          </ul>
        )}
      </div>
      <div className="plakalar border-b-2 border-gray-500 pb-2 ">
        <NavLink
          className={({ isActive }) => isActive && "active"}
          to="/plakalar"
        >
          Plakalar
        </NavLink>
        <button onClick={() => setPlakalar(!plakalar)} className="ml-2">
          {plakalar ? "↑" : "↓"}
        </button>
        {plakalar && (
          <ul className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/plakalar/yari-degerli"
            >
              Yarı Değerli Plakalar
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/plakalar/mermer"
            >
              Mermer Plakalar
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/plakalar/bej-mermer"
            >
              Bej Mermer Plakalar
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/plakalar/granit"
            >
              Granit Plakalar
            </NavLink>
            <ul>
              <NavLink
                className={({ isActive }) => isActive && "active"}
                to="/plakalar/porselen-plakalar"
              >
                Porselen Plakalar
              </NavLink>
              <button
                onClick={() => setPorselenPlaka(!porselenPlaka)}
                className="ml-2"
              >
                {porselenPlaka ? "↑" : "↓"}
              </button>
              {porselenPlaka && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/plakalar/porselen-plakalar/sintered"
                  >
                    Sintered Stone Plakalar
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/plakalar/porselen-plakalar/levantec"
                  >
                    Levantec Porselen Plakalar
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/plakalar/porselen-plakalar/estestone"
                  >
                    Estestone Porselen Plakalar
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/plakalar/porselen-plakalar/lamar"
                  >
                    Lamar Porselen Plakalar
                  </NavLink>
                </div>
              )}
            </ul>
            <ul>
              <NavLink
                className={({ isActive }) => isActive && "active"}
                to="/plakalar/kuvars-plakalar"
              >
                Kuvars Plakalar
              </NavLink>
              <button
                onClick={() => setKuvarsPlaka(!kuvarsPlaka)}
                className="ml-2"
              >
                {kuvarsPlaka ? "↑" : "↓"}
              </button>
              {kuvarsPlaka && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/plakalar/kuvars-plakalar/caesarstone"
                  >
                    Caesarstone Kuvars Plakalar
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/plakalar/kuvars-plakalar/calisco"
                  >
                    Calisco Kuvars Plakalar
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/plakalar/kuvars-plakalar/belenco"
                  >
                    Belenco Kuvars Plakalar
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => isActive && "active"}
                    to="/plakalar/kuvars-plakalar/cimstone"
                  >
                    Çimstone Kuvars Plakalar
                  </NavLink>
                </div>
              )}
            </ul>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/plakalar/oniks"
            >
              Oniks Plakalar
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/plakalar/limestone"
            >
              Limestone Plakalar
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/plakalar/traverten"
            >
              Traverten Plakalar
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "active"}
              to="/plakalar/andezit-bazalt"
            >
              Andezit - Bazalt Plakalar
            </NavLink>
          </ul>
        )}
      </div>
      <div className="bloklar border-b-2 border-gray-500 pb-2 ">
        <NavLink
          className={({ isActive }) => isActive && "active"}
          to="/bloklar"
        >
          Bloklar
        </NavLink>
        <button onClick={() => setBloklar(!bloklar)} className="ml-2">
          {bloklar ? "↑" : "↓"}
        </button>
        {bloklar && (
          <ul className="ml-2 border-l-2 border-gray-300 pl-2">
            <li>Mermer Bloklar</li>
            <li>Bej Mermer Bloklar</li>
            <li>Traverten Bloklar</li>
          </ul>
        )}
      </div>
      <div className="urunler border-b-2 border-gray-500 pb-2 ">
        <NavLink
          className={({ isActive }) => isActive && "active"}
          to="/urunler"
        >
          Ürünler
        </NavLink>
        <button onClick={() => setUrunler(!urunler)} className="ml-2">
          {urunler ? "↑" : "↓"}
        </button>
        {urunler && (
          <ul className="ml-2 border-l-2 border-gray-300 pl-2">
            <ul className="cnc">
              <h4>
                CNC Ürünler
                <button onClick={() => setCnc(!cnc)} className="ml-2">
                  {cnc ? "↑" : "↓"}
                </button>
              </h4>
              {cnc && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2">
                  <li>Duvar Dekorasyonları</li>
                  <li>Masalar</li>
                  <li>Sehpalar</li>
                  <li>Tabureler</li>
                </div>
              )}
            </ul>
            <ul className="waterjet">
              <h4>
                Waterjet
                <button onClick={() => setWaterjet(!waterjet)} className="ml-2">
                  {waterjet ? "↑" : "↓"}
                </button>
              </h4>
              {waterjet && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2">
                  <li>Waterjet Madalyon</li>
                  <li>Waterjet Mozaik</li>
                  <li>Waterjet Bordür</li>
                  <li>Waterjet Karo</li>
                </div>
              )}
            </ul>
            <ul className="dekoratif-urunler">
              <h4>
                Dekoratif Ürünler
                <button
                  onClick={() => setDekoratifUrunler(!dekoratifUrunler)}
                  className="ml-2"
                >
                  {dekoratifUrunler ? "↑" : "↓"}
                </button>
              </h4>
              {dekoratifUrunler && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2">
                  <li>Süpürgelik</li>
                  <li>Kolon</li>
                  <li>Kurna</li>
                  <li>Sütun</li>
                  <li>Korkuluk</li>
                  <li>Söve</li>
                  <li>Duş Teknesi</li>
                  <li>Bahçe Süslemesi</li>
                  <li>Aksesuar</li>
                  <li>Aplik</li>
                  <li>Şampuanlık</li>
                </div>
              )}
            </ul>
            <ul className="mozaik">
              <h4>
                Mozaik
                <button onClick={() => setMozaik(!mozaik)} className="ml-2">
                  {mozaik ? "↑" : "↓"}
                </button>
              </h4>
              {mozaik && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2">
                  <li>Cam Mozaik</li>
                  <li>Klasik Mozaik</li>
                  <li>Patlarma Mozaik</li>
                  <li>Dizayn Mozaik</li>
                  <li>Fine Line Mozaik</li>
                  <li>Mini Pattern Mozaik</li>
                  <li>Bordür Mozaik</li>
                </div>
              )}
            </ul>
          </ul>
        )}
      </div>
      <div className="terrazo border-b-2 border-gray-500 pb-2 ">
        <NavLink
          className={({ isActive }) => isActive && "active"}
          to="/terrazo"
        >
          Terrazo
        </NavLink>
        <button onClick={() => setTerrazo(!terrazo)} className="ml-2">
          {terrazo ? "↑" : "↓"}
        </button>
        {terrazo && (
          <ul className="ml-2 border-l-2 border-gray-300 pl-2">
            <li>İç Mekan</li>
            <li>Dış Mekan</li>
            <li>Basamak</li>
            <li>Plakalar</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideBar;
