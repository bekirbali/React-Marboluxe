import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoForMarboLuxe.jpeg";
import "../app.css";

const SideBar = () => {
  const [mermer, setMermer] = useState(false);
  return (
    <div>
      <h2 className="">KATEGORİLER</h2>
      <div className="border-b-2 border-gray-500 w-12"></div>
      <div>
        <h3>Dogal Taşlar</h3>
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
    </div>
  );
};

export default SideBar;
