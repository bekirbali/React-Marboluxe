import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import DogalTaslar from "../pages/DogalTaslar";
import Home from "../pages/Home";
import Kataloglar from "../pages/Kataloglar";
import Ocaklar from "../pages/Ocaklar";
import OzelKoleksiyon from "../pages/OzelKoleksiyon";
import Plakalar from "../pages/Plakalar";
import Projeler from "../pages/Projeler";
import Tezgahlar from "../pages/Tezgahlar";
import Urunler from "../pages/Urunler";
import Footer from "../components/Footer";
import Details from "../components/Details";

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dogal-taslar" element={<DogalTaslar />} />
        <Route path="dogal-taslar/:name" element={<Details />} />
        <Route path="kataloglar" element={<Kataloglar />} />
        <Route path="kataloglar/:name" element={<Details />} />
        <Route path="ocaklar" element={<Ocaklar />} />
        <Route path="ocaklar/:name" element={<Details />} />
        <Route path="ozel-koleksiyon" element={<OzelKoleksiyon />} />
        <Route path="ozel-koleksiyon/:name" element={<Details />} />
        <Route path="plakalar" element={<Plakalar />} />
        <Route path="plakalar/:name" element={<Details />} />
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
