import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="mt-10">
      <h2 className="font-bold">KATEGORİLER</h2>
      <div className="border-b-2 border-gray-500 w-12"></div>

      <div className="tezgahlar">
        <Link to="/tezgahlar" className="font-bold">
          Tezgahlar
          <button onClick={() => setTezgahlar(!tezgahlar)} className="ml-2">
            {tezgahlar ? "↑" : "↓"}
          </button>
        </Link>
        {tezgahlar && (
          <ul className="ml-2 border-l-2 border-gray-300 pl-2">
            <ul className="kuvars">
              <h4>
                Kuvars Tezgah
                <button
                  onClick={() => setKuvarsTezgah(!kuvarsTezgah)}
                  className="ml-2"
                >
                  {kuvarsTezgah ? "↑" : "↓"}
                </button>
              </h4>
              {kuvarsTezgah && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2">
                  <li>Caesarstone Tezgah</li>
                  <li>Calisco Tezgah</li>
                  <li>Belenco Tezgah</li>
                  <li>Çimstone Tezgah</li>
                </div>
              )}
            </ul>
            <ul className="porselen">
              <h4>
                Porselen Tezgah
                <button
                  onClick={() => setPorselenTezgah(!porselenTezgah)}
                  className="ml-2"
                >
                  {porselenTezgah ? "↑" : "↓"}
                </button>
              </h4>
              {porselenTezgah && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2">
                  <li>Sintered Stone Tezgah</li>
                  <li>Levantec Porselen Tezgah</li>
                  <li>Estestone Porselen Tezgah</li>
                  <li>Lamar Porselen Tezgah</li>
                </div>
              )}
            </ul>
          </ul>
        )}
      </div>
      <div className="dogal-taslar">
        <Link to="/dogal-taslar" className="font-bold">
          Dogal Taşlar
        </Link>
        <button onClick={() => setDogalTaslar(!dogalTaslar)} className="ml-2">
          {dogalTaslar ? "↑" : "↓"}
        </button>
        {dogalTaslar && (
          <ul className="ml-2 border-l-2 border-gray-300 pl-2">
            <ul>
              <h4>
                <Link to="/dogal-taslar/mermer">Mermer</Link>
                <button onClick={() => setMermer(!mermer)} className="ml-2">
                  {mermer ? "↑" : "↓"}
                </button>
              </h4>
              {mermer && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2">
                  <Link to="/dogal-taslar/mermer/beyaz-mermer">
                    Beyaz Mermer
                  </Link>
                  <li>Gri Mermer</li>
                  <li>Kahverengi Mermer</li>
                  <li>Mavi Mermer</li>
                  <li>Siyah Mermer</li>
                  <li>Yeşil Mermer</li>
                  <li>Özel Mermer Koleksiyonu</li>
                </div>
              )}
            </ul>
            <li>Bej Mermer</li>
            <li>Traverten</li>
            <li>Kuvars</li>
            <li>Granit</li>
            <li>Oniks</li>
            <li>Limestone</li>
            <li>Andezit</li>
            <li>Bazalt</li>
            <li>Dolomit</li>
            <li>Dış Mekan</li>
          </ul>
        )}
      </div>
      <div className="plakalar">
        <Link to="/plakalar" className="font-bold">
          Plakalar
          <button onClick={() => setPlakalar(!plakalar)} className="ml-2">
            {plakalar ? "↑" : "↓"}
          </button>
        </Link>
        {plakalar && (
          <ul className="ml-2 border-l-2 border-gray-300 pl-2">
            <li>Yarı Değerli Plakalar</li>
            <li>Mermer Plakalar</li>
            <li>Bej Mermer Plakalar</li>
            <li>Granit Plakalar</li>
            <ul>
              <h4>
                Porselen Plakalar
                <button
                  onClick={() => setPorselenPlaka(!porselenPlaka)}
                  className="ml-2"
                >
                  {porselenPlaka ? "↑" : "↓"}
                </button>
              </h4>
              {porselenPlaka && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2">
                  <li>Sintered Stone Plakalar</li>
                  <li>Levantec Porselen Plakalar</li>
                  <li>Estestone Porselen Plakalar</li>
                  <li>Lamar Porselen Plakalar</li>
                </div>
              )}
            </ul>
            <ul>
              <h4>
                Kuvars Plakalar
                <button
                  onClick={() => setKuvarsPlaka(!kuvarsPlaka)}
                  className="ml-2"
                >
                  {kuvarsPlaka ? "↑" : "↓"}
                </button>
              </h4>
              {kuvarsPlaka && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2">
                  <li>Caesarstone Kuvars Plakalar</li>
                  <li>Calisco Kuvars Plakalar</li>
                  <li>Belenco Kuvars Plakalar</li>
                  <li>Çimstone Kuvars Plakalar</li>
                </div>
              )}
            </ul>
            <li>Onik Plakalar</li>
            <li>Limestone Plakalar</li>
            <li>Traverten Plakalar</li>
            <li>Andezit - Bazalt Plakalar</li>
          </ul>
        )}
      </div>
      <div className="bloklar">
        <Link to="/bloklar" className="font-bold">
          Bloklar
          <button onClick={() => setBloklar(!bloklar)} className="ml-2">
            {bloklar ? "↑" : "↓"}
          </button>
        </Link>
        {bloklar && (
          <ul className="ml-2 border-l-2 border-gray-300 pl-2">
            <li>Mermer Bloklar</li>
            <li>Bej Mermer Bloklar</li>
            <li>Traverten Bloklar</li>
          </ul>
        )}
      </div>
      <div className="urunler">
        <Link to="/urunler" className="font-bold">
          Ürünler
          <button onClick={() => setUrunler(!urunler)} className="ml-2">
            {urunler ? "↑" : "↓"}
          </button>
        </Link>
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
      <div className="terrazo">
        <Link to="/terrazo" className="font-bold">
          Terrazo
          <button onClick={() => setTerrazo(!terrazo)} className="ml-2">
            {terrazo ? "↑" : "↓"}
          </button>
        </Link>
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
