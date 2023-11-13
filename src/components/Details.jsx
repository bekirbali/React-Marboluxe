import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import DetailModal from "./DetailModal";
import {
  dogalTaslar,
  tezgahlar,
  urunler,
  plakalar,
  ozelKoleksiyon,
} from "../utils";

const Details = () => {
  const location = useLocation();
  const { state } = location;

  const [modal, setModal] = useState(false);
  const [currentArray, setCurrentArray] = useState("");

  useEffect(() => {
    setCurrentArray(state.array);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" relative overflow-hidden">
      <Breadcrumbs />
      <div className="flex justify-around p-4 w-[90%] mx-auto ">
        <div className="flex flex-col items-center justify-center max-w-[50%]">
          <div
            onClick={() => setModal(true)}
            className="w-full overflow-hidden"
          >
            <img
              src={state.image}
              alt="test"
              className="hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
            />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl">{state.name}</h2>
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
      <h2 className="text-center">Benzer Ürünler</h2>
      {/* {currentArray[0].map((item) => {
        return <div>{item.name}</div>;
      })} */}
      {currentArray === "dogalTaslar" && (
        <div> {dogalTaslar[0].slice(0, 8).map((item) => item.name)} </div>
      )}
      {currentArray === "plakalar" && (
        <div> {plakalar[0].slice(0, 8).map((item) => item.name)} </div>
      )}
      {currentArray === "tezgahlar" && (
        <div> {tezgahlar[0].slice(0, 8).map((item) => item.name)} </div>
      )}
      {currentArray === "urunler" && (
        <div> {urunler[0].slice(0, 8).map((item) => item.name)} </div>
      )}
      {currentArray === "ozelKoleksiyon" && (
        <div> {ozelKoleksiyon[0].slice(0, 8).map((item) => item.name)} </div>
      )}
    </div>
  );
};

export default Details;
