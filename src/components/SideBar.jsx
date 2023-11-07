import React, { useContext } from "react";
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
        </Link>
        <button onClick={() => setTezgahlar(!tezgahlar)} className="ml-2">
          {tezgahlar ? "↑" : "↓"}
        </button>
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
          <ul className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
            <ul>
              <h4>
                <Link to="/dogal-taslar/mermer">Mermer</Link>
                <button onClick={() => setMermer(!mermer)} className="ml-2">
                  {mermer ? "↑" : "↓"}
                </button>
              </h4>
              {mermer && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                  <Link to="/dogal-taslar/mermer/beyaz-mermer">
                    Beyaz Mermer
                  </Link>
                  <Link to="/dogal-taslar/mermer/gri-mermer">Gri Mermer</Link>
                  <Link to="/dogal-taslar/mermer/kahverengi-mermer">
                    Kahverengi Mermer
                  </Link>
                  <Link to="/dogal-taslar/mermer/mavi-mermer">Mavi Mermer</Link>
                  <Link to="/dogal-taslar/mermer/siyah-mermer">
                    Siyah Mermer
                  </Link>
                  <Link to="/dogal-taslar/mermer/yesil-mermer">
                    Yeşil Mermer
                  </Link>
                  <Link to="/ozel-koleksiyon">Özel Mermer Koleksiyonu</Link>
                </div>
              )}
            </ul>
            <Link to="/dogal-taslar/bej-mermer">Bej Mermer</Link>
            <Link to="/dogal-taslar/traverten">Traverten</Link>
            <Link to="/dogal-taslar/kuvars">Kuvars</Link>
            <Link to="/dogal-taslar/granit">Granit</Link>
            <Link to="/dogal-taslar/oniks">Oniks</Link>
            <Link to="/dogal-taslar/limestone">Linkmestone</Link>
            <Link to="/dogal-taslar/andezit">Andezit</Link>
            <Link to="/dogal-taslar/bazalt">Bazalt</Link>
            <Link to="/dogal-taslar/dolomit">Dolomit</Link>
            <Link to="/dogal-taslar/dis-mekan">Dış Mekan</Link>
          </ul>
        )}
      </div>
      <div className="plakalar">
        <Link to="/plakalar" className="font-bold">
          Plakalar
        </Link>
        <button onClick={() => setPlakalar(!plakalar)} className="ml-2">
          {plakalar ? "↑" : "↓"}
        </button>
        {plakalar && (
          <ul className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
            <Link to="/plakalar/yari-degerli">Yarı Değerli Plakalar</Link>
            <Link to="/plakalar/mermer">Mermer Plakalar</Link>
            <Link to="/plakalar/bej-mermer">Bej Mermer Plakalar</Link>
            <Link to="/plakalar/granit">Granit Plakalar</Link>
            <ul>
              <Link to="/plakalar/porselen-plakalar">Porselen Plakalar</Link>
              <button
                onClick={() => setPorselenPlaka(!porselenPlaka)}
                className="ml-2"
              >
                {porselenPlaka ? "↑" : "↓"}
              </button>
              {porselenPlaka && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                  <Link to="/plakalar/porselen-plakalar/sintered">
                    Sintered Stone Plakalar
                  </Link>
                  <Link to="/plakalar/porselen-plakalar/levantec">
                    Levantec Porselen Plakalar
                  </Link>
                  <Link to="/plakalar/porselen-plakalar/estestone">
                    Estestone Porselen Plakalar
                  </Link>
                  <Link to="/plakalar/porselen-plakalar/lamar">
                    Lamar Porselen Plakalar
                  </Link>
                </div>
              )}
            </ul>
            <ul>
              <Link to="/plakalar/kuvars-plakalar">Kuvars Plakalar</Link>
              <button
                onClick={() => setKuvarsPlaka(!kuvarsPlaka)}
                className="ml-2"
              >
                {kuvarsPlaka ? "↑" : "↓"}
              </button>
              {kuvarsPlaka && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                  <Link to="/plakalar/kuvars-plakalar/caesarstone">
                    Caesarstone Kuvars Plakalar
                  </Link>
                  <Link to="/plakalar/kuvars-plakalar/calisco">
                    Calisco Kuvars Plakalar
                  </Link>
                  <Link to="/plakalar/kuvars-plakalar/belenco">
                    Belenco Kuvars Plakalar
                  </Link>
                  <Link to="/plakalar/kuvars-plakalar/cimstone">
                    Çimstone Kuvars Plakalar
                  </Link>
                </div>
              )}
            </ul>
            <Link to="/plakalar/oniks">Oniks Plakalar</Link>
            <Link to="/plakalar/limestone">Limestone Plakalar</Link>
            <Link to="/plakalar/traverten">Traverten Plakalar</Link>
            <Link to="/plakalar/andezit-bazalt">Andezit - Bazalt Plakalar</Link>
          </ul>
        )}
      </div>
      <div className="bloklar">
        <Link to="/bloklar" className="font-bold">
          Bloklar
        </Link>
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
      <div className="urunler">
        <Link to="/urunler" className="font-bold">
          Ürünler
        </Link>
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
      <div className="terrazo">
        <Link to="/terrazo" className="font-bold">
          Terrazo
        </Link>
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
