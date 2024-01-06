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

const ProjectsDetails = () => {
  const location = useLocation();
  const { state } = location;

  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [currentArray, setCurrentArray] = useState("");

  const scrollRef = useRef();

  const scrollHandler = () => {
    console.log(scrollRef.current.scrollTop);
    console.log(modal);
  };

  useEffect(() => {
    setCurrentArray(state.array);
    console.log(state.context);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={scrollRef}
      onScroll={scrollHandler}
      onClick={() => console.log(scrollRef.current.scrollTop)}
      style={{ height: "100vh", overflow: "hidden" }}
      className="relative overflow-hidden"
    >
      <div className="h-[120px] w-full flex justify-center items-center bg-slate-700 text-white">
        <h1 className="font-bold text-3xl">PROJELER</h1>
      </div>
      <div className="flex justify-around h-[500px] p-4 w-[90%] mx-auto">
        <div onClick={() => setModal(true)} className="flex gap-4">
          {state.context.map((test) => {
            return (
              <>
                <img src={test} alt="" className="w-[600px]" />
              </>
            );
          })}
        </div>
        {modal && (
          <div className="absolute w-[100vw] h-[100vh] top-0 ">
            <DetailModal
              image={state.image}
              modal={modal}
              setModal={setModal}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsDetails;
