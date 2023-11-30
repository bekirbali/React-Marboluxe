import { createContext, useState } from "react";

export const MarboContext = createContext();

const MarboContextProvider = ({ children }) => {
  const [tezgahlar, setTezgahlar] = useState(false);
  const [dogalTaslar, setDogalTaslar] = useState(false);
  const [plakalar, setPlakalar] = useState(false);
  const [bloklar, setBloklar] = useState(false);
  const [urunler, setUrunler] = useState(false);
  const [terrazo, setTerrazo] = useState(false);
  const [mermer, setMermer] = useState(false);
  const [porselenPlaka, setPorselenPlaka] = useState(false);
  const [kuvarsPlaka, setKuvarsPlaka] = useState(false);
  const [kuvarsTezgah, setKuvarsTezgah] = useState(false);
  const [porselenTezgah, setPorselenTezgah] = useState(false);
  const [cnc, setCnc] = useState(false);
  const [waterjet, setWaterjet] = useState(false);
  const [dekoratifUrunler, setDekoratifUrunler] = useState(false);
  const [mozaik, setMozaik] = useState(false);
  // for the 6 article about stone on the Turkish home page
  const [show, setShow] = useState(false);
  const [searchText, setSearchText] = useState("");
  const values = {
    show,
    setShow,
    searchText,
    setSearchText,
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
  };
  return (
    <MarboContext.Provider value={values}>{children}</MarboContext.Provider>
  );
};

export default MarboContextProvider;
