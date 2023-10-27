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
import Breadcrumbs from "../components/Breadcrumbs";
import Details from "../components/Details";

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dogal-taslar" element={<DogalTaslar />} />
        <Route path="dogal-taslar/:name" element={<Details />} />
        <Route path="kataloglar" element={<Kataloglar />} />
        <Route path="ocaklar" element={<Ocaklar />} />
        <Route path="ozel-koleksiyon" element={<OzelKoleksiyon />} />
        <Route path="plakalar" element={<Plakalar />} />
        <Route path="projeler" element={<Projeler />} />
        <Route path="tezgahlar" element={<Tezgahlar />} />
        <Route path="urunler" element={<Urunler />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
