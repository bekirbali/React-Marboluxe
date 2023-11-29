import React, { useContext } from "react";

import { searchArray } from "../utils";
import { MarboContext } from "../context/MarboContext";
import { useNavigate } from "react-router-dom";

const SearchResult = () => {
  const { searchText } = useContext(MarboContext);

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 gap-4">
      {searchArray.map((item, index) =>
        item
          .filter((marble) =>
            marble.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((test) => {
            return (
              <div
                className="flex flex-col"
                onClick={() => navigate(`${test.name}`, { state: test })}
              >
                <img src={test.image} alt="" />
                <div className="flex gap-2">
                  <p>{test.name}</p> - <p>{test.linkName1}</p>
                </div>
              </div>
            );
          })
      )}
    </div>
  );
};

export default SearchResult;
