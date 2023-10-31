import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoForMarboLuxe.jpeg";
import "../app.css";

const SideBar = () => {
  return (
    <div>
      <h2 className="">KATEGORİLER</h2>
      <div className="border-b-2 border-gray-500 w-12"></div>
      <div>
        <h3>Dogal Taşlar</h3>
        <ul>
          <ul>
            <h4>Mermer</h4>
            <li>Beyaz Mermer</li>
            <li>Gri Mermer</li>
            <li>Kahverengi Mermer</li>
            <li>Mavi Mermer</li>
            <li>Siyah Mermer</li>
            <li>Yeşil Mermer</li>
            <li>Özel Mermer Koleksiyonu</li>
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
    </div>
  );
};

export default SideBar;
