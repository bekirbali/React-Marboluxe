import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoForMarboLuxe.jpeg";
import "../app.css";

const SideBar = () => {
  const [mermer, setMermer] = useState(false);
  const [porselenPlaka, setPorselenPlaka] = useState(false);
  const [kuvarsTezgah, setKuvarsTezgah] = useState(false);
  const [porselenTezgah, setPorselenTezgah] = useState(false);
  const [cnc, setCnc] = useState(false);
  const [waterjet, setWaterjet] = useState(false);
  const [dekoratifUrunler, setDekoratifUrunler] = useState(false);
  const [mozaik, setMozaik] = useState(false);

  return (
    <div>
      <h2 className="">KATEGORİLER</h2>
      <div className="border-b-2 border-gray-500 w-12"></div>

      <div className="tezgahlar">
        <h3 className="font-bold">Tezgahlar</h3>
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
      </div>
      <div className="dogal-taslar">
        <h3 className="font-bold">Dogal Taşlar</h3>
        <ul className="ml-2 border-l-2 border-gray-300 pl-2">
          <ul>
            <h4>
              Mermer
              <button onClick={() => setMermer(!mermer)} className="ml-2">
                {mermer ? "↑" : "↓"}
              </button>
            </h4>
            {mermer && (
              <div className="ml-2 border-l-2 border-gray-300 pl-2">
                <li>Beyaz Mermer</li>
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
      </div>
      <div className="plakalar">
        <h3 className="font-bold">Plakalar</h3>
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
          <li>Kuvars Plakalar</li>
          <li>Onik Plakalar</li>
          <li>Limestone Plakalar</li>
          <li>Traverten Plakalar</li>
          <li>Andezit - Bazalt Plakalar</li>
        </ul>
      </div>
      <div className="bloklar">
        <h3 className="font-bold">Bloklar</h3>
        <ul className="ml-2 border-l-2 border-gray-300 pl-2">
          <li>Mermer Bloklar</li>
          <li>Bej Mermer Bloklar</li>
          <li>Traverten Bloklar</li>
        </ul>
      </div>
      <div className="urunler">
        <h3 className="font-bold">Ürünler</h3>
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
      </div>
      <div className="terrazo">
        <h3 className="font-bold">Terrazo</h3>
        <ul className="ml-2 border-l-2 border-gray-300 pl-2">
          <li>İç Mekan</li>
          <li>Dış Mekan</li>
          <li>Basamak</li>
          <li>Plakalar</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
