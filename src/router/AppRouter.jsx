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
import Urunler from "../pages/urunler/Urunler";
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
import TezgahlarKuvars from "../pages/tezgahlar/kuvars/TezgahlarKuvars";
import TezgahlarKuvarsBelenco from "../pages/tezgahlar/kuvars/TezgahlarKuvarsBelenco";
import TezgahlarKuvarsCaesar from "../pages/tezgahlar/kuvars/TezgahlarKuvarsCaesar";
import TezgahlarKuvarsCalisco from "../pages/tezgahlar/kuvars/TezgahlarKuvarsCalisco";
import TezgahlarKuvarsCim from "../pages/tezgahlar/kuvars/TezgahlarKuvarsCim";
import TezgahlarPorselen from "../pages/tezgahlar/porselen/TezgahlarPorselen";
import TezgahlarPorselenEstestone from "../pages/tezgahlar/porselen/TezgahlarPorselenEstestone";
import TezgahlarPorselenLamar from "../pages/tezgahlar/porselen/TezgahlarPorselenLamar";
import TezgahlarPorselenLevantec from "../pages/tezgahlar/porselen/TezgahlarPorselenLevantec";
import TezgahlarPorselenSintered from "../pages/tezgahlar/porselen/TezgahlarPorselenSintered";
import UrunlerCnc from "../pages/urunler/cnc/UrunlerCnc";
import UrunlerCncDuvarlar from "../pages/urunler/cnc/UrunlerCncDuvarlar";
import UrunlerCncMasalar from "../pages/urunler/cnc/UrunlerCncMasalar";
import UrunlerCncSehpalar from "../pages/urunler/cnc/UrunlerCncSehpalar";
import UrunlerCncTabureler from "../pages/urunler/cnc/UrunlerCncTabureler";
import UrunlerWaterjet from "../pages/urunler/waterjet/UrunlerWaterjet";
import UrunlerWaterjetBordur from "../pages/urunler/waterjet/UrunlerWaterjetBordur";
import UrunlerWaterjetKaro from "../pages/urunler/waterjet/UrunlerWaterjetKaro";
import UrunlerWaterjetMadalyon from "../pages/urunler/waterjet/UrunlerWaterjetMadalyon";
import UrunlerWaterjetMozaik from "../pages/urunler/waterjet/UrunlerWaterjetMozaik";
import UrunlerDekoratif from "../pages/urunler/dekoratif/UrunlerDekoratif";
import UrunlerDekoratifAksesuar from "../pages/urunler/dekoratif/UrunlerDekoratifAksesuar";
import UrunlerDekoratifAplik from "../pages/urunler/dekoratif/UrunlerDekoratifAplik";
import UrunlerDekoratifBahce from "../pages/urunler/dekoratif/UrunlerDekoratifBahce";
import UrunlerDekoratifDus from "../pages/urunler/dekoratif/UrunlerDekoratifDus";
import UrunlerDekoratifKolon from "../pages/urunler/dekoratif/UrunlerDekoratifKolon";
import UrunlerDekoratifKorkuluk from "../pages/urunler/dekoratif/UrunlerDekoratifKorkuluk";
import UrunlerDekoratifKurna from "../pages/urunler/dekoratif/UrunlerDekoratifKurna";
import UrunlerDekoratifSampuanlik from "../pages/urunler/dekoratif/UrunlerDekoratifSampuanlik";
import UrunlerDekoratifSove from "../pages/urunler/dekoratif/UrunlerDekoratifSove";
import UrunlerDekoratifSupurgelik from "../pages/urunler/dekoratif/UrunlerDekoratifSupurgelik";
import UrunlerDekoratifSutun from "../pages/urunler/dekoratif/UrunlerDekoratifSutun";

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
          <Route path="plakalar/andezit-bazalt/:name" element={<Details />} />
          <Route path="plakalar/bej-mermer" element={<PlakalarBejMermer />} />
          <Route path="plakalar/bej-mermer/:name" element={<Details />} />
          <Route path="plakalar/granit" element={<PlakalarGranit />} />
          <Route path="plakalar/granit/:name" element={<Details />} />
          <Route path="plakalar/limestone" element={<PlakalarLimestone />} />
          <Route path="plakalar/limestone/:name" element={<Details />} />
          <Route path="plakalar/mermer" element={<PlakalarMermer />} />
          <Route path="plakalar/mermer/:name" element={<Details />} />
          <Route path="plakalar/oniks" element={<PlakalarOniks />} />
          <Route path="plakalar/oniks/:name" element={<Details />} />
          <Route path="plakalar/traverten" element={<PlakalarTraverten />} />
          <Route path="plakalar/traverten/:name" element={<Details />} />
          <Route
            path="plakalar/yari-degerli"
            element={<PlakalarYariDegerli />}
          />
          <Route path="plakalar/yari-degerli/:name" element={<Details />} />
          {/* Kuvars Plakalar */}
          <>
            <Route
              path="plakalar/kuvars-plakalar"
              element={<PlakalarKuvars />}
            />
            <Route
              path="plakalar/kuvars-plakalar/:name"
              element={<Details />}
            />
            <Route
              path="plakalar/kuvars-plakalar/belenco"
              element={<PlakalarKuvarsBelenco />}
            />
            <Route
              path="plakalar/kuvars-plakalar/belenco/:name"
              element={<Details />}
            />
            <Route
              path="plakalar/kuvars-plakalar/calisco"
              element={<PlakalarKuvarsCalisco />}
            />
            <Route
              path="plakalar/kuvars-plakalar/calisco/:name"
              element={<Details />}
            />
            <Route
              path="plakalar/kuvars-plakalar/caesarstone"
              element={<PlakalarKuvarsCaesar />}
            />
            <Route
              path="plakalar/kuvars-plakalar/caesarstone/:name"
              element={<Details />}
            />
            <Route
              path="plakalar/kuvars-plakalar/cimstone"
              element={<PlakalarKuvarsCim />}
            />
            <Route
              path="plakalar/kuvars-plakalar/cimstone/:name"
              element={<Details />}
            />
          </>
          {/* Porselen Plakalar */}
          <>
            <Route
              path="plakalar/porselen-plakalar"
              element={<PlakalarPorselen />}
            />
            <Route
              path="plakalar/porselen-plakalar/:name"
              element={<Details />}
            />
            <Route
              path="plakalar/porselen-plakalar/estestone"
              element={<PlakalarPorselenEstestone />}
            />
            <Route
              path="plakalar/porselen-plakalar/estestone/:name"
              element={<Details />}
            />
            <Route
              path="plakalar/porselen-plakalar/lamar"
              element={<PlakalarPorselenLamar />}
            />
            <Route
              path="plakalar/porselen-plakalar/lamar/:name"
              element={<Details />}
            />
            <Route
              path="plakalar/porselen-plakalar/levantec"
              element={<PlakalarPorselenLevantec />}
            />
            <Route
              path="plakalar/porselen-plakalar/levantec/:name"
              element={<Details />}
            />
            <Route
              path="plakalar/porselen-plakalar/sintered"
              element={<PlakalarPorselenSintered />}
            />
            <Route
              path="plakalar/porselen-plakalar/sintered/:name"
              element={<Details />}
            />
          </>
        </>

        {/* Tezgahlar */}
        <>
          <Route path="tezgahlar" element={<Tezgahlar />} />
          <Route path="tezgahlar/:name" element={<Details />} />
          {/* Kuvars Tezgahlar */}
          <>
            <Route path="tezgahlar/kuvars" element={<TezgahlarKuvars />} />
            <Route path="tezgahlar/kuvars/:name" element={<Details />} />
            <Route
              path="tezgahlar/kuvars/belenco"
              element={<TezgahlarKuvarsBelenco />}
            />
            <Route
              path="tezgahlar/kuvars/belenco/:name"
              element={<Details />}
            />
            <Route
              path="tezgahlar/kuvars/caesar"
              element={<TezgahlarKuvarsCaesar />}
            />
            <Route path="tezgahlar/kuvars/caesar/:name" element={<Details />} />
            <Route
              path="tezgahlar/kuvars/calisco"
              element={<TezgahlarKuvarsCalisco />}
            />
            <Route
              path="tezgahlar/kuvars/calisco/:name"
              element={<Details />}
            />
            <Route
              path="tezgahlar/kuvars/cimstone"
              element={<TezgahlarKuvarsCim />}
            />
            <Route
              path="tezgahlar/kuvars/cimstone/:name"
              element={<Details />}
            />
          </>
          {/* Porselen Tezgahlar */}
          <>
            <Route path="tezgahlar/porselen" element={<TezgahlarPorselen />} />
            <Route path="tezgahlar/porselen/:name" element={<Details />} />
            <Route
              path="tezgahlar/porselen/estestone"
              element={<TezgahlarPorselenEstestone />}
            />
            <Route
              path="tezgahlar/porselen/estestone/:name"
              element={<Details />}
            />
            <Route
              path="tezgahlar/porselen/lamar"
              element={<TezgahlarPorselenLamar />}
            />
            <Route
              path="tezgahlar/porselen/lamar/:name"
              element={<Details />}
            />
            <Route
              path="tezgahlar/porselen/levantec"
              element={<TezgahlarPorselenLevantec />}
            />
            <Route
              path="tezgahlar/porselen/levantec/:name"
              element={<Details />}
            />
            <Route
              path="tezgahlar/porselen/sintered"
              element={<TezgahlarPorselenSintered />}
            />
            <Route
              path="tezgahlar/porselen/sintered/:name"
              element={<Details />}
            />
          </>
        </>

        {/* Urunler */}
        <>
          <Route path="urunler" element={<Urunler />} />
          <Route path="urunler/:name" element={<Details />} />
          {/* Cnc Urunler */}
          <>
            <Route path="urunler/cnc" element={<UrunlerCnc />} />
            <Route path="urunler/cnc/:name" element={<Details />} />
            <Route path="urunler/cnc/duvar" element={<UrunlerCncDuvarlar />} />
            <Route path="urunler/cnc/duvar/:name" element={<Details />} />
            <Route path="urunler/cnc/masalar" element={<UrunlerCncMasalar />} />
            <Route path="urunler/cnc/masalar/:name" element={<Details />} />
            <Route
              path="urunler/cnc/sehpalar"
              element={<UrunlerCncSehpalar />}
            />
            <Route path="urunler/cnc/sehpalar/:name" element={<Details />} />
            <Route
              path="urunler/cnc/tabureler"
              element={<UrunlerCncTabureler />}
            />
            <Route path="urunler/cnc/tabureler/:name" element={<Details />} />
          </>
          {/* Waterjet Urunler */}
          <>
            <Route path="urunler/waterjet/" element={<UrunlerWaterjet />} />
            <Route path="urunler/waterjet/:name" element={<Details />} />
            <Route
              path="urunler/waterjet/bordur"
              element={<UrunlerWaterjetBordur />}
            />
            <Route path="urunler/waterjet/bordur:name" element={<Details />} />
            <Route
              path="urunler/waterjet/karo"
              element={<UrunlerWaterjetKaro />}
            />
            <Route path="urunler/waterjet/karo:name" element={<Details />} />
            <Route
              path="urunler/waterjet/madalyon"
              element={<UrunlerWaterjetMadalyon />}
            />
            <Route
              path="urunler/waterjet/madalyon:name"
              element={<Details />}
            />
            <Route
              path="urunler/waterjet/mozaik"
              element={<UrunlerWaterjetMozaik />}
            />
            <Route path="urunler/waterjet/mozaik:name" element={<Details />} />
          </>
          {/* Dekoratif Urunler */}
          <>
            <Route path="urunler/dekoratif" element={<UrunlerDekoratif />} />
            <Route path="urunler/dekoratif/:name" element={<Details />} />
            <Route
              path="urunler/dekoratif/aksesuar"
              element={<UrunlerDekoratifAksesuar />}
            />
            <Route
              path="urunler/dekoratif/aksesuar/:name"
              element={<Details />}
            />
            <Route
              path="urunler/dekoratif/aplik"
              element={<UrunlerDekoratifAplik />}
            />
            <Route path="urunler/dekoratif/aplik/:name" element={<Details />} />
            <Route
              path="urunler/dekoratif/bahce"
              element={<UrunlerDekoratifBahce />}
            />
            <Route path="urunler/dekoratif/bahce/:name" element={<Details />} />
            <Route
              path="urunler/dekoratif/dus"
              element={<UrunlerDekoratifDus />}
            />
            <Route path="urunler/dekoratif/dus/:name" element={<Details />} />
            <Route
              path="urunler/dekoratif/kolon"
              element={<UrunlerDekoratifKolon />}
            />
            <Route path="urunler/dekoratif/kolon/:name" element={<Details />} />
            <Route
              path="urunler/dekoratif/korkuluk"
              element={<UrunlerDekoratifKorkuluk />}
            />
            <Route
              path="urunler/dekoratif/korkuluk/:name"
              element={<Details />}
            />
            <Route
              path="urunler/dekoratif/kurna"
              element={<UrunlerDekoratifKurna />}
            />
            <Route path="urunler/dekoratif/kurna/:name" element={<Details />} />
            <Route
              path="urunler/dekoratif/sampuanlik"
              element={<UrunlerDekoratifSampuanlik />}
            />
            <Route
              path="urunler/dekoratif/sampuanlik/:name"
              element={<Details />}
            />
            <Route
              path="urunler/dekoratif/sove"
              element={<UrunlerDekoratifSove />}
            />
            <Route path="urunler/dekoratif/sove/:name" element={<Details />} />
            <Route
              path="urunler/dekoratif/supurgelik"
              element={<UrunlerDekoratifSupurgelik />}
            />
            <Route
              path="urunler/dekoratif/supurgelik/:name"
              element={<Details />}
            />
            <Route
              path="urunler/dekoratif/sutun"
              element={<UrunlerDekoratifSutun />}
            />
            <Route path="urunler/dekoratif/sutun/:name" element={<Details />} />
          </>
        </>
        <Route path="ocaklar" element={<Ocaklar />} />
        <Route path="ocaklar/:name" element={<Details />} />
        <Route path="kataloglar" element={<Kataloglar />} />
        <Route path="kataloglar/:name" element={<Details />} />
        <Route path="ozel-koleksiyon" element={<OzelKoleksiyon />} />
        <Route path="ozel-koleksiyon/:name" element={<Details />} />
        <Route path="projeler" element={<Projeler />} />
        <Route path="projeler/:name" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
