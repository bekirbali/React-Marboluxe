import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import DetailModal from "./DetailModal";
import {
  dogalTaslar,
  tezgahlar,
  urunler,
  plakalar,
  ozelKoleksiyon,
} from "../utils";
import { useTranslation } from "react-i18next";

const ProjectsDetails = () => {
  const location = useLocation();
  const { state } = location;

  const { t } = useTranslation();

  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="h-[120px] flex justify-center items-center bg-slate-700 text-white">
        <h1 className="font-bold text-3xl">{t("PROJELER")}</h1>
      </div>
      <div className="min-h-[70vh] flex flex-wrap justify-center items-center gap-2 overflow-hidden">
        {state.context.map((photo, index) => {
          return (
            <div
              key={index}
              onClick={() => setModal(true)}
              className="h-[500px] w-[75%] md:w-[49%] lg:w-[24%]"
            >
              <img src={photo} alt="" className="w-full h-full" />
            </div>
          );
        })}
      </div>
      {modal && (
        <div className="absolute w-[100vw] h-[100vh] top-0 ">
          <DetailModal image={state.image} modal={modal} setModal={setModal} />
        </div>
      )}
    </>
  );
};

export default ProjectsDetails;
