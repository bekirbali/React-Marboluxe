import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import DetailModal from "./DetailModal";

import { useTranslation } from "react-i18next";

const ProjectsDetails = () => {
  const location = useLocation();
  const { state } = location;

  const [i, setI] = useState(0);
  const [modal, setModal] = useState(false);

  const { t } = useTranslation();

  const clickHandler = (index) => {
    setModal(true);
    setI(index);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="h-[120px] flex justify-center items-center bg-slate-700 text-white">
        <div className="text-center">
          <h1 className="font-bold text-3xl uppercase">{t("projeler")}</h1>
          <h3>{state.name}</h3>
        </div>
      </div>
      <div className="min-h-[70vh] w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center overflow-hidden my-2 px-4">
        {state.context.map((photo, index) => {
          return (
            <div
              key={index}
              className="projects overflow-hidden relative flex flex-col items-center justify-center shadow-sm shadow-cyan-600 w-full"
            >
              <div
                onClick={() => clickHandler(index)}
                className="w-full h-[500px] overflow-hidden text-center flex justify-center"
              >
                <img src={photo} alt="" className="w-full h-full" />
              </div>
            </div>
          );
        })}
      </div>
      {modal && (
        <div className="fixed w-[100vw] h-[100vh] top-0 ">
          <DetailModal image={state.context[i]} setModal={setModal} />
        </div>
      )}
    </div>
  );
};

export default ProjectsDetails;
