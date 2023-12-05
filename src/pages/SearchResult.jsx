import React, { useContext, useEffect, useState } from "react";

import { searchArray } from "../utils";
import { MarboContext } from "../context/MarboContext";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import { memo } from "react";

const SearchResult = () => {
  const { searchText } = useContext(MarboContext);
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
  }, []);

  return (
    // <div className="main-holder-plakalar flex justify-between w-[90%] mx-auto ">
    //   <div className="hidden sm:block flex-[1] ">
    //     <SideBar />
    //   </div>
    //   <div className="p-4 flex flex-col items-center mb-24 flex-[4] mt-8">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    //       {searchArray.map((item, index) =>
    //         item
    //           .filter((marble) =>
    //             marble.name.toLowerCase().includes(searchText.toLowerCase())
    //           )
    //           .map((test) => {
    //             return (
    //               <div
    //                 key={Math.random()}
    //                 className="flex flex-col items-center justify-center shadow-sm shadow-cyan-700 max-w-[300px]"
    //               >
    //                 <div
    //                   onClick={() => navigate(`${test.name}`, { state: test })}
    //                   className="w-full overflow-hidden"
    //                 >
    //                   <img
    //                     src={test.image}
    //                     alt="test"
    //                     className="w-full hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
    //                   />
    //                 </div>
    //                 <p className="text-center p-2 h-20 items-center flex">
    //                   {test.name} - {test.linkName1}
    //                 </p>
    //               </div>
    //             );
    //           })
    //       )}
    //     </div>
    //   </div>
    // </div>
    // <>
    //   {filteredSearchArray.length < 0 ? (
    //     <>
    //       <div>
    //         <h1>no matched items</h1>
    //       </div>
    //     </>
    //   ) : (
    //     <div className="main-holder-plakalar flex justify-between w-[90%] mx-auto ">
    //       <div className="hidden sm:block flex-[1] ">
    //         <SideBar />
    //       </div>
    //       <div className="p-4 flex flex-col items-center mb-24 flex-[4] mt-8">
    //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    //           {filteredSearchArray.map((item) =>
    //             item.map((marble) => marble.name)
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>
    <div>
      {filteredSearchArray.length
        ? filteredSearchArray.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))
        : "no matched"}
    </div>
  );
};

export default memo(SearchResult);
