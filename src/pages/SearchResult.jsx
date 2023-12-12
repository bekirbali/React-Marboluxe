import React, { useContext, useEffect, useState } from "react";

import { searchArray } from "../utils";
import { MarboContext } from "../context/MarboContext";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const SearchResult = () => {
  const { searchText, dropdown } = useContext(MarboContext);
  const [filteredSearchArray, setFilteredSearchArray] = useState([]);

  const navigate = useNavigate();

  const settingArray = () => {
    const filtered = searchArray.filter((marble) =>
      marble.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredSearchArray(filtered);
    console.log(filtered);
  };

  useEffect(() => {
    settingArray();
  }, [searchText]);

  return (
    <>
      <div className="h-[120px] items-center flex-wrap flex flex-col justify-around md:items-start bg-[#f1f1f1] pl-24">
        <h2 className="text-2xl font-bold">
          "{searchText}" İçin Arama Sonuçları
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-1">
          <Link to="/">Marboluxe</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <p>{searchText}</p>
        </div>
      </div>
      <div className="main-holder-plakalar flex justify-between w-[90%] mx-auto min-h-[62vh]">
        <div className="hidden sm:block flex-[1] ">
          <SideBar />
        </div>
        <div className="p-4 flex flex-col items-center mb-24 flex-[4] mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4">
            {filteredSearchArray.length
              ? filteredSearchArray.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => navigate(`${item.name}`, { state: item })}
                    className="flex flex-col items-center justify-center shadow-sm shadow-cyan-700 max-w-[300px] hover:cursor-pointer"
                  >
                    <img src={item.image} alt="" />
                    <p className="hover:cursor-pointer">{item.name}</p>
                  </div>
                ))
              : "no matched"}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
