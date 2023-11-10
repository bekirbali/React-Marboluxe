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
  } = useContext(MarboContext);

  return (
    <div className="mt-10 max-w-[200px] mx-auto flex flex-col gap-4">
      <h2 className="font-bold">KATEGORİLER</h2>
      <div className="border-b-2 border-gray-500 w-12"></div>

      <div className="tezgahlar border-b-2 border-gray-300 pb-2 ">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
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
                className={({ isActive }) => (isActive ? "active" : "")}
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
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/tezgahlar/kuvars/caesar"
                  >
                    Caesarstone Tezgah
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/tezgahlar/kuvars/calisco"
                  >
                    Calisco Tezgah
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/tezgahlar/kuvars/belenco"
                  >
                    Belenco Tezgah
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/tezgahlar/kuvars/cimstone"
                  >
                    Çimstone Tezgah
                  </NavLink>
                </div>
              )}
            </ul>
            <ul className="porselen">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
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
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/tezgahlar/porselen/sintered"
                  >
                    Sintered Stone Tezgah
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/tezgahlar/porselen/levantec"
                  >
                    Levantec Porselen Tezgah
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/tezgahlar/porselen/estestone"
                  >
                    Estestone Porselen Tezgah
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
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
      <div className="dogal-taslar border-b-2 border-gray-300 pb-2 ">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
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
                  className={({ isActive }) => (isActive ? "active" : "")}
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
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/dogal-taslar/mermer/beyaz-mermer"
                  >
                    Beyaz Mermer
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/dogal-taslar/mermer/gri-mermer"
                  >
                    Gri Mermer
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/dogal-taslar/mermer/kahverengi-mermer"
                  >
                    Kahverengi Mermer
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/dogal-taslar/mermer/mavi-mermer"
                  >
                    Mavi Mermer
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/dogal-taslar/mermer/siyah-mermer"
                  >
                    Siyah Mermer
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/dogal-taslar/mermer/yesil-mermer"
                  >
                    Yeşil Mermer
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/ozel-koleksiyon"
                  >
                    Özel Mermer Koleksiyonu
                  </NavLink>
                </div>
              )}
            </ul>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/bej-mermer"
            >
              Bej Mermer
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/traverten"
            >
              Traverten
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/kuvars"
            >
              Kuvars
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/granit"
            >
              Granit
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/oniks"
            >
              Oniks
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/limestone"
            >
              Linkmestone
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/andezit"
            >
              Andezit
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/bazalt"
            >
              Bazalt
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/dolomit"
            >
              Dolomit
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/dis-mekan"
            >
              Dış Mekan
            </NavLink>
          </ul>
        )}
      </div>
      <div className="plakalar border-b-2 border-gray-300 pb-2 ">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
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
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/plakalar/yari-degerli"
            >
              Yarı Değerli Plakalar
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/plakalar/mermer"
            >
              Mermer Plakalar
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/plakalar/bej-mermer"
            >
              Bej Mermer Plakalar
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/plakalar/granit"
            >
              Granit Plakalar
            </NavLink>
            <ul>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
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
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/plakalar/porselen-plakalar/sintered"
                  >
                    Sintered Stone Plakalar
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/plakalar/porselen-plakalar/levantec"
                  >
                    Levantec Porselen Plakalar
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/plakalar/porselen-plakalar/estestone"
                  >
                    Estestone Porselen Plakalar
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/plakalar/porselen-plakalar/lamar"
                  >
                    Lamar Porselen Plakalar
                  </NavLink>
                </div>
              )}
            </ul>
            <ul>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
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
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/plakalar/kuvars-plakalar/caesarstone"
                  >
                    Caesarstone Kuvars Plakalar
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/plakalar/kuvars-plakalar/calisco"
                  >
                    Calisco Kuvars Plakalar
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/plakalar/kuvars-plakalar/belenco"
                  >
                    Belenco Kuvars Plakalar
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/plakalar/kuvars-plakalar/cimstone"
                  >
                    Çimstone Kuvars Plakalar
                  </NavLink>
                </div>
              )}
            </ul>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/plakalar/oniks"
            >
              Oniks Plakalar
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/plakalar/limestone"
            >
              Limestone Plakalar
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/plakalar/traverten"
            >
              Traverten Plakalar
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/plakalar/andezit-bazalt"
            >
              Andezit - Bazalt Plakalar
            </NavLink>
          </ul>
        )}
      </div>
      <div className="bloklar border-b-2 border-gray-300 pb-2 ">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
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
      <div className="urunler border-b-2 border-gray-300 pb-2 ">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
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
              <NavLink to="/urunler/cnc">CNC Ürünler</NavLink>
              <button onClick={() => setCnc(!cnc)} className="ml-2">
                {cnc ? "↑" : "↓"}
              </button>
              {cnc && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                  <NavLink to="/urunler/cnc/duvar">
                    Duvar Dekorasyonları
                  </NavLink>
                  <NavLink to="/urunler/cnc/masalar">Masalar</NavLink>
                  <NavLink to="/urunler/cnc/sehpalar">Sehpalar</NavLink>
                  <NavLink to="/urunler/cnc/tabureler">Tabureler</NavLink>
                </div>
              )}
            </ul>
            <ul className="waterjet">
              <NavLink to="/urunler/waterjet">Waterjet</NavLink>
              <button onClick={() => setWaterjet(!waterjet)} className="ml-2">
                {waterjet ? "↑" : "↓"}
              </button>
              {waterjet && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                  <NavLink to="/urunler/waterjet/madalyon">
                    Waterjet Madalyon
                  </NavLink>
                  <NavLink to="/urunler/waterjet/mozaik">
                    Waterjet Mozaik
                  </NavLink>
                  <NavLink to="/urunler/waterjet/bordur">
                    Waterjet Bordür
                  </NavLink>
                  <NavLink to="/urunler/waterjet/karo">Waterjet Karo</NavLink>
                </div>
              )}
            </ul>
            <ul className="dekoratif-urunler">
              <NavLink to="/urunler/dekoratif">Dekoratif Ürünler</NavLink>
              <button
                onClick={() => setDekoratifUrunler(!dekoratifUrunler)}
                className="ml-2"
              >
                {dekoratifUrunler ? "↑" : "↓"}
              </button>
              {dekoratifUrunler && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                  <NavLink to="/urunler/dekoratif/supurgelik">
                    Süpürgelik
                  </NavLink>
                  <NavLink to="/urunler/dekoratif/kolon">Kolon</NavLink>
                  <NavLink to="/urunler/dekoratif/kurna">Kurna</NavLink>
                  <NavLink to="/urunler/dekoratif/sutun">Sütun</NavLink>
                  <NavLink to="/urunler/dekoratif/korkuluk">Korkuluk</NavLink>
                  <NavLink to="/urunler/dekoratif/sove">Söve</NavLink>
                  <NavLink to="/urunler/dekoratif/dus">Duş Teknesi</NavLink>
                  <NavLink to="/urunler/dekoratif/bahce">
                    Bahçe Süslemesi
                  </NavLink>
                  <NavLink to="/urunler/dekoratif/aksesuar">Aksesuar</NavLink>
                  <NavLink to="/urunler/dekoratif/aplik">Aplik</NavLink>
                  <NavLink to="/urunler/dekoratif/sampuan">Şampuanlık</NavLink>
                </div>
              )}
            </ul>
          </ul>
        )}
      </div>
      <div className="terrazo border-b-2 border-gray-300 pb-2 ">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
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
