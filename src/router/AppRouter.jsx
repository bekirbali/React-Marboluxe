import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import DogalTaslar from "../pages/dogal-taslar/DogalTaslar";
import DogalTaslarMermer from "../pages/dogal-taslar/mermer/DogalTaslarMermer";
import Home from "../pages/Home";
import Kataloglar from "../pages/Kataloglar";
import Ocaklar from "../pages/Ocaklar";
import OzelKoleksiyon from "../pages/OzelKoleksiyon";
import Plakalar from "../pages/plakalar/Plakalar";
import Projeler from "../pages/Projeler";
import Tezgahlar from "../pages/tezgahlar/Tezgahlar";
import Urunler from "../pages/Urunler";
import Footer from "../components/Footer";
import Details from "../components/Details";
import DogalTaslarMermerBeyaz from "../pages/dogal-taslar/mermer/DogalTaslarMermerBeyaz";
import DogalTaslarMermerGri from "../pages/dogal-taslar/mermer/DogalTaslarMermerGri";
import DogalTaslarMermerKahverengi from "../pages/dogal-taslar/mermer/DogalTaslarMermerKahverengi";
import DogalTaslarMermerMavi from "../pages/dogal-taslar/mermer/DogalTaslarMermerMavi";
import DogalTaslarMermerSiyah from "../pages/dogal-taslar/mermer/DogalTaslarMermerSiyah";
import DogalTaslarMermerYesil from "../pages/dogal-taslar/mermer/DogalTaslarMermerYesil";
import DogalTaslarAndezit from "../pages/dogal-taslar/DogalTaslarAndezit";
import DogalTaslarBazalt from "../pages/dogal-taslar/DogalTaslarBazalt";
import DogalTaslarBejMermer from "../pages/dogal-taslar/DogalTaslarBejMermer";
import DogalTaslarDisMekan from "../pages/dogal-taslar/DogalTaslarDisMekan";
import DogalTaslarDolomit from "../pages/dogal-taslar/DogalTaslarDolomit";
import DogalTaslarGranit from "../pages/dogal-taslar/DogalTaslarGranit";
import DogalTaslarKuvars from "../pages/dogal-taslar/DogalTaslarKuvars";
import DogalTaslarLimestone from "../pages/dogal-taslar/DogalTaslarLimestone";
import DogalTaslarOniks from "../pages/dogal-taslar/DogalTaslarOniks";
import DogalTaslarTraverten from "../pages/dogal-taslar/DogalTaslarTraverten";
import PlakalarKuvars from "../pages/plakalar/kuvars/PlakalarKuvars";
import PlakalarAndezitBazalt from "../pages/plakalar/PlakalarAndezitBazalt";
import PlakalarBejMermer from "../pages/plakalar/PlakalarBejMermer";
import PlakalarGranit from "../pages/plakalar/PlakalarGranit";
import PlakalarLimestone from "../pages/plakalar/PlakalarLimestone";
import PlakalarMermer from "../pages/plakalar/PlakalarMermer";
import PlakalarOniks from "../pages/plakalar/PlakalarOniks";
import PlakalarTraverten from "../pages/plakalar/PlakalarTraverten";
import PlakalarYariDegerli from "../pages/plakalar/PlakalarYariDegerli";
import PlakalarPorselen from "../pages/plakalar/porselen/PlakalarPorselen";
import PlakalarKuvarsBelenco from "../pages/plakalar/kuvars/PlakalarKuvarsBelenco";
import PlakalarKuvarsCalisco from "../pages/plakalar/kuvars/PlakalarKuvarsCalisco";
import PlakalarKuvarsCaesar from "../pages/plakalar/kuvars/PlakalarKuvarsCaesar";
import PlakalarKuvarsCim from "../pages/plakalar/kuvars/PlakalarKuvarsCim";
import PlakalarPorselenEstestone from "../pages/plakalar/porselen/PlakalarPorselenEstestone";
import PlakalarPorselenLamar from "../pages/plakalar/porselen/PlakalarPorselenLamar";
import PlakalarPorselenLevantec from "../pages/plakalar/porselen/PlakalarPorselenLevantec";
import PlakalarPorselenSintered from "../pages/plakalar/porselen/PlakalarPorselenSintered";

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Dogal Taslar */}
        <>
          <Route path="dogal-taslar" element={<DogalTaslar />} />
          {/* Dogal Taslar Mermer */}
          <Route path="dogal-taslar/mermer" element={<DogalTaslarMermer />} />
          <>
            <Route
              path="dogal-taslar/mermer/beyaz-mermer"
              element={<DogalTaslarMermerBeyaz />}
            />
            <Route
              path="dogal-taslar/mermer/gri-mermer"
              element={<DogalTaslarMermerGri />}
            />
            <Route
              path="dogal-taslar/mermer/kahverengi-mermer"
              element={<DogalTaslarMermerKahverengi />}
            />
            <Route
              path="dogal-taslar/mermer/mavi-mermer"
              element={<DogalTaslarMermerMavi />}
            />
            <Route
              path="dogal-taslar/mermer/siyah-mermer"
              element={<DogalTaslarMermerSiyah />}
            />
            <Route
              path="dogal-taslar/mermer/yesil-mermer"
              element={<DogalTaslarMermerYesil />}
            />
            <Route path="dogal-taslar/:name" element={<Details />} />
            <Route path="dogal-taslar/mermer/:name" element={<Details />} />
            <Route
              path="dogal-taslar/mermer/beyaz-mermer/:name"
              element={<Details />}
            />
            <Route
              path="dogal-taslar/mermer/gri-mermer/:name"
              element={<Details />}
            />
            <Route
              path="dogal-taslar/mermer/kahverengi-mermer/:name"
              element={<Details />}
            />
            <Route
              path="dogal-taslar/mermer/mavi-mermer/:name"
              element={<Details />}
            />
            <Route
              path="dogal-taslar/mermer/siyah-mermer/:name"
              element={<Details />}
            />
            <Route
              path="dogal-taslar/mermer/yesil-mermer/:name"
              element={<Details />}
            />
          </>
          <Route path="dogal-taslar/andezit" element={<DogalTaslarAndezit />} />
          <Route path="dogal-taslar/andezit/:name" element={<Details />} />
          <Route path="dogal-taslar/bazalt" element={<DogalTaslarBazalt />} />
          <Route path="dogal-taslar/bazalt/:name" element={<Details />} />
          <Route
            path="dogal-taslar/bej-mermer"
            element={<DogalTaslarBejMermer />}
          />
          <Route path="dogal-taslar/bej-mermer/:name" element={<Details />} />
          <Route
            path="dogal-taslar/dis-mekan"
            element={<DogalTaslarDisMekan />}
          />
          <Route path="dogal-taslar/dis-mekan/:name" element={<Details />} />
          <Route path="dogal-taslar/dolomit" element={<DogalTaslarDolomit />} />
          <Route path="dogal-taslar/dolomit/:name" element={<Details />} />
          <Route path="dogal-taslar/granit" element={<DogalTaslarGranit />} />
          <Route path="dogal-taslar/granit/:name" element={<Details />} />
          <Route path="dogal-taslar/kuvars" element={<DogalTaslarKuvars />} />
          <Route path="dogal-taslar/kuvars/:name" element={<Details />} />
          <Route
            path="dogal-taslar/limestone"
            element={<DogalTaslarLimestone />}
          />
          <Route path="dogal-taslar/limestone/:name" element={<Details />} />
          <Route path="dogal-taslar/oniks" element={<DogalTaslarOniks />} />
          <Route path="dogal-taslar/oniks/:name" element={<Details />} />
          <Route
            path="dogal-taslar/traverten"
            element={<DogalTaslarTraverten />}
          />
          <Route path="dogal-taslar/traverten/:name" element={<Details />} />
        </>

        {/* Plakalar */}
        <>
          <Route path="plakalar" element={<Plakalar />} />
          <Route path="plakalar/:name" element={<Details />} />
          <Route
            path="plakalar/andezit-bazalt"
            element={<PlakalarAndezitBazalt />}
          />
          <Route path="plakalar/bej-mermer" element={<PlakalarBejMermer />} />
          <Route path="plakalar/granit" element={<PlakalarGranit />} />
          <Route path="plakalar/limestone" element={<PlakalarLimestone />} />
          <Route path="plakalar/mermer" element={<PlakalarMermer />} />
          <Route path="plakalar/oniks" element={<PlakalarOniks />} />
          <Route path="plakalar/traverten" element={<PlakalarTraverten />} />
          <Route
            path="plakalar/yari-degerli"
            element={<PlakalarYariDegerli />}
          />
          {/* Kuvars Plakalar */}
          <>
            <Route
              path="plakalar/kuvars-plakalar"
              element={<PlakalarKuvars />}
            />
            <Route
              path="plakalar/kuvars-plakalar/belenco"
              element={<PlakalarKuvarsBelenco />}
            />
            <Route
              path="plakalar/kuvars-plakalar/calisco"
              element={<PlakalarKuvarsCalisco />}
            />
            <Route
              path="plakalar/kuvars-plakalar/caesarstone"
              element={<PlakalarKuvarsCaesar />}
            />
            <Route
              path="plakalar/kuvars-plakalar/cimstone"
              element={<PlakalarKuvarsCim />}
            />
          </>
          <Route
            path="plakalar/porselen-plakalar"
            element={<PlakalarPorselen />}
          />
          <Route
            path="plakalar/porselen-plakalar/estestone"
            element={<PlakalarPorselenEstestone />}
          />
          <Route
            path="plakalar/porselen-plakalar/lamar"
            element={<PlakalarPorselenLamar />}
          />
          <Route
            path="plakalar/porselen-plakalar/levantec"
            element={<PlakalarPorselenLevantec />}
          />
          <Route
            path="plakalar/porselen-plakalar/sintered"
            element={<PlakalarPorselenSintered />}
          />
        </>
        <Route path="kataloglar" element={<Kataloglar />} />
        <Route path="kataloglar/:name" element={<Details />} />
        <Route path="ocaklar" element={<Ocaklar />} />
        <Route path="ocaklar/:name" element={<Details />} />
        <Route path="ozel-koleksiyon" element={<OzelKoleksiyon />} />
        <Route path="ozel-koleksiyon/:name" element={<Details />} />
        <Route path="projeler" element={<Projeler />} />
        <Route path="projeler/:name" element={<Details />} />
        <Route path="tezgahlar" element={<Tezgahlar />} />
        <Route path="tezgahlar/:name" element={<Details />} />
        <Route path="urunler" element={<Urunler />} />
        <Route path="urunler/:name" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
