import React, { useEffect, useState } from "react";
import { dogalTaslar, projects } from "../utils";
import { useNavigate } from "react-router-dom";

const Projeler = () => {
  const [filterText, setFilterText] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const navigate = useNavigate();

  const filterHandler = (e) => {
    if (e.target.innerText) {
      setFilterText(e.target.innerText);
      return;
    } else return;
  };

  const settingArray = () => {
    const filtered = projects.filter((project) =>
      project.filter.toLowerCase().includes(filterText.toLowerCase())
    );

    setFilteredProjects(filtered);
    console.log(filtered);
  };

  useEffect(() => {
    settingArray();
  }, [filterText]);

  return (
    <>
      <div className="h-[120px] flex justify-center items-center bg-slate-700 text-white">
        <h1 className="font-bold text-3xl">PROJELER</h1>
      </div>
      <div className="tabs">
        <ul
          onClick={filterHandler}
          className="flex flex-wrap gap-4 mt-4 pl-6 items-center justify-center tabs-list "
        >
          <li>ALL</li>
          <li>MALL</li>
          <li>BATHROOM</li>
          <li>OUTDOOR</li>
          <li>INTERIOR</li>
          <li>RESIDENCE</li>
          <li>OFFICE</li>
          <li>HOTEL</li>
          <li>RESTAURANT</li>
          <li>RESTORATION</li>
        </ul>
      </div>
      <div className="p-4 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-4">
          {filterText === "tümü"
            ? projects.map((tas, index) => {
                return (
                  <div
                    key={index}
                    className="projects overflow-hidden relative flex flex-col items-center justify-center shadow-sm shadow-cyan-600 max-w-[300px]"
                  >
                    <div
                      onClick={() =>
                        navigate(`${tas.name}`, { state: tas, message: "test" })
                      }
                      className="w-full h-[310px] overflow-hidden text-center flex justify-center"
                    >
                      <img
                        src={tas.image}
                        alt="test"
                        className="w-full h-full  transition duration-700 hover:cursor-pointer"
                      />
                    </div>
                    <p className="projects-p text-center h-20 items-center flex justify-center absolute flex-wrap w-[220px] backdrop-blur-sm">
                      {tas.name}
                    </p>
                  </div>
                );
              })
            : filteredProjects.map((tas, index) => {
                return (
                  <div
                    key={index}
                    className="projects overflow-hidden relative flex flex-col items-center justify-center shadow-sm shadow-cyan-600 max-w-[300px]"
                  >
                    <div
                      onClick={() =>
                        navigate(`${tas.name}`, { state: tas, message: "test" })
                      }
                      className="w-full h-[310px] overflow-hidden text-center flex justify-center"
                    >
                      <img
                        src={tas.image}
                        alt="test"
                        className="w-full h-full  transition duration-700 hover:cursor-pointer"
                      />
                    </div>
                    <p className="projects-p text-center h-20 items-center flex justify-center absolute flex-wrap w-[220px] backdrop-blur-sm">
                      {tas.name}
                    </p>
                  </div>
                );
              })}
        </div>
      </div>
      <>
        <div className="h-[120px] w-full flex justify-center items-center bg-slate-700 text-white">
          <h1 className="font-bold text-3xl">PROJELER</h1>
        </div>
        <div className="p-4 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-4">
            {projects.map((tas, index) => {
              return (
                <div
                  key={index}
                  className="projects overflow-hidden relative flex flex-col items-center justify-center shadow-sm shadow-cyan-600 max-w-[300px]"
                >
                  <div
                    onClick={() =>
                      navigate(`${tas.name}`, { state: tas, message: "test" })
                    }
                    className="w-full h-[310px] overflow-hidden text-center flex justify-center"
                  >
                    <img
                      src={tas.image}
                      alt="test"
                      className="w-full h-full  transition duration-700 hover:cursor-pointer"
                    />
                  </div>
                  <p className="projects-p text-center h-20 items-center flex justify-center absolute flex-wrap w-[220px] backdrop-blur-sm">
                    {tas.name}
                  </p>
                </div>
              );
            })}
          </div>{" "}
        </div>
      </>
    </>
  );
};

export default Projeler;
