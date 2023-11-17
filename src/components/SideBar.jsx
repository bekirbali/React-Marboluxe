import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../app.css";
import { MarboContext } from "../context/MarboContext";
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const {
    tezgahlar,
    setTezgahlar,
    dogalTaslar,
    setDogalTaslar,
    plakalar,
    setPlakalar,
    urunler,
    setUrunler,
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

  const { t } = useTranslation();

  return (
    <div className="mt-10 max-w-[220px] mx-auto flex flex-col gap-4 mb-10 ">
      <h2 className="font-bold">{t("kategoriler")}</h2>
      <div className="border-b-2 border-gray-500 w-12"></div>

      <div className="tezgahlar border-b-2 border-gray-300 pb-2 ">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/tezgahlar"
        >
          {t("tezgahlar")}
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
                {t("kuvars tezgah")}
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
                    {t("caesarstone")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/tezgahlar/kuvars/calisco"
                  >
                    {t("calisco")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/tezgahlar/kuvars/belenco"
                  >
                    {t("belenco")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/tezgahlar/kuvars/cimstone"
                  >
                    {t("cimstone")}
                  </NavLink>
                </div>
              )}
            </ul>
            <ul className="porselen">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/tezgahlar/porselen"
              >
                {t("porselen tezgah")}
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
                    {t("sintered")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/tezgahlar/porselen/levantec"
                  >
                    {t("levantec")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/tezgahlar/porselen/estestone"
                  >
                    {t("estestone")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/tezgahlar/porselen/lamar"
                  >
                    {t("lamar")}
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
          {t("dogal taslar")}
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
                  {t("mermer")}
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
                    {t("beyaz mermer")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/dogal-taslar/mermer/gri-mermer"
                  >
                    {t("gri mermer")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/dogal-taslar/mermer/kahverengi-mermer"
                  >
                    {t("kahverengi mermer")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/dogal-taslar/mermer/mavi-mermer"
                  >
                    {t("mavi mermer")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/dogal-taslar/mermer/siyah-mermer"
                  >
                    {t("siyah mermer")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/dogal-taslar/mermer/yesil-mermer"
                  >
                    {t("yesil mermer")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/ozel-koleksiyon"
                  >
                    {t("ozel mermer koleksiyonu")}
                  </NavLink>
                </div>
              )}
            </ul>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/bej-mermer"
            >
              {t("bej mermer")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/traverten"
            >
              {t("traverten")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/kuvars"
            >
              {t("kuvars")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/granit"
            >
              {t("granit")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/oniks"
            >
              {t("oniks")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/limestone"
            >
              {t("limestone")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/andezit"
            >
              {t("andezit")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/bazalt"
            >
              {t("bazalt")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/dolomit"
            >
              {t("dolomit")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dogal-taslar/dis-mekan"
            >
              {t("dis mekan")}
            </NavLink>
          </ul>
        )}
      </div>
      <div className="plakalar border-b-2 border-gray-300 pb-2 ">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/plakalar"
        >
          {t("plakalar")}
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
              {t("yari degerli")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/plakalar/mermer"
            >
              {t("mermer plakalar")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/plakalar/bej-mermer"
            >
              {t("bej mermer plakalar")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/plakalar/granit"
            >
              {t("granit plakalar")}
            </NavLink>
            <ul>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/plakalar/porselen-plakalar"
              >
                {t("porselen plakalar")}
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
                    {t("sintered plakalar")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/plakalar/porselen-plakalar/levantec"
                  >
                    {t("levantec plakalar")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/plakalar/porselen-plakalar/estestone"
                  >
                    {t("estestone plakalar")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/plakalar/porselen-plakalar/lamar"
                  >
                    {t("lamar plakalar")}
                  </NavLink>
                </div>
              )}
            </ul>
            <ul>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/plakalar/kuvars-plakalar"
              >
                {t("kuvars plakalar")}
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
                    {t("caesarstone plakalar")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/plakalar/kuvars-plakalar/calisco"
                  >
                    {t("calisco plakalar")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/plakalar/kuvars-plakalar/belenco"
                  >
                    {t("belenco plakalar")}
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/plakalar/kuvars-plakalar/cimstone"
                  >
                    {t("cimstone plakalar")}
                  </NavLink>
                </div>
              )}
            </ul>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/plakalar/oniks"
            >
              {t("oniks plakalar")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/plakalar/limestone"
            >
              {t("limestone plakalar")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/plakalar/traverten"
            >
              {t("traverten plakalar")}
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/plakalar/andezit-bazalt"
            >
              {t("andezit bazalt plakalar")}
            </NavLink>
          </ul>
        )}
      </div>
      <div className="urunler border-b-2 border-gray-300 pb-2 ">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/urunler"
        >
          {t("urunler")}
        </NavLink>
        <button onClick={() => setUrunler(!urunler)} className="ml-2">
          {urunler ? "↑" : "↓"}
        </button>
        {urunler && (
          <ul className="ml-2 border-l-2 border-gray-300 pl-2">
            <ul className="cnc">
              <NavLink to="/urunler/cnc">{t("cnc urunler")}</NavLink>
              <button onClick={() => setCnc(!cnc)} className="ml-2">
                {cnc ? "↑" : "↓"}
              </button>
              {cnc && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                  <NavLink to="/urunler/cnc/duvar">
                    {t("duvar dekorasyonlari")}
                  </NavLink>
                  <NavLink to="/urunler/cnc/masalar">{t("masalar")}</NavLink>
                  <NavLink to="/urunler/cnc/sehpalar">{t("sehpalar")}</NavLink>
                  <NavLink to="/urunler/cnc/tabureler">
                    {t("tabureler")}
                  </NavLink>
                </div>
              )}
            </ul>
            <ul className="waterjet">
              <NavLink to="/urunler/waterjet">{t("waterjet")}</NavLink>
              <button onClick={() => setWaterjet(!waterjet)} className="ml-2">
                {waterjet ? "↑" : "↓"}
              </button>
              {waterjet && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                  <NavLink to="/urunler/waterjet/madalyon">
                    {t("waterjet madalyon")}
                  </NavLink>
                  <NavLink to="/urunler/waterjet/mozaik">
                    {t("waterjet mozaik")}
                  </NavLink>
                  <NavLink to="/urunler/waterjet/bordur">
                    {t("waterjet bordur")}
                  </NavLink>
                  <NavLink to="/urunler/waterjet/karo">
                    {t("waterjet karo")}
                  </NavLink>
                </div>
              )}
            </ul>
            <ul className="dekoratif-urunler">
              <NavLink to="/urunler/dekoratif">
                {t("dekoratif urunler")}
              </NavLink>
              <button
                onClick={() => setDekoratifUrunler(!dekoratifUrunler)}
                className="ml-2"
              >
                {dekoratifUrunler ? "↑" : "↓"}
              </button>
              {dekoratifUrunler && (
                <div className="ml-2 border-l-2 border-gray-300 pl-2 flex flex-col">
                  <NavLink to="/urunler/dekoratif/supurgelik">
                    {t("supurgelik")}
                  </NavLink>
                  <NavLink to="/urunler/dekoratif/kolon">{t("kolon")}</NavLink>
                  <NavLink to="/urunler/dekoratif/kurna">{t("kurna")}</NavLink>
                  <NavLink to="/urunler/dekoratif/sutun">{t("sutun")}</NavLink>
                  <NavLink to="/urunler/dekoratif/korkuluk">
                    {t("korkuluk")}
                  </NavLink>
                  <NavLink to="/urunler/dekoratif/sove">{t("sove")}</NavLink>
                  <NavLink to="/urunler/dekoratif/dus">
                    {t("dus teknesi")}
                  </NavLink>
                  <NavLink to="/urunler/dekoratif/bahce">
                    {t("bahce suslemesi")}
                  </NavLink>
                  <NavLink to="/urunler/dekoratif/aksesuar">
                    {t("aksesuar")}
                  </NavLink>
                  <NavLink to="/urunler/dekoratif/aplik">{t("aplik")}</NavLink>
                  <NavLink to="/urunler/dekoratif/sampuanlik">
                    {t("sampuanlik")}
                  </NavLink>
                </div>
              )}
            </ul>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideBar;
