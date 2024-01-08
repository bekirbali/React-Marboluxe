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
        <h1 className="font-bold text-3xl">{t("PROJELER")}</h1>
      </div>
      <div className="min-h-[70vh] flex flex-wrap justify-center items-center gap-2 overflow-hidden my-2">
        {state.context.map((photo, index) => {
          return (
            <div
              key={index}
              onClick={() => clickHandler(index)}
              className="h-[500px] w-[75%] md:w-[49%] lg:w-[24%]"
            >
              <img src={photo} alt="" className="w-full h-full" />
            </div>
          );
        })}
      </div>
      {modal && (
        <div className="absolute w-[100vw] h-[100vh] top-0 ">
          <DetailModal image={state.context[i]} setModal={setModal} />
        </div>
      )}
    </div>
  );
};

export default ProjectsDetails;
