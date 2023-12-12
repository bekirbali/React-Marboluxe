import React, { useEffect, useState } from "react";
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

const Details = () => {
  const location = useLocation();
  const { state } = location;

  const navigate = useNavigate();

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
              className="hover:scale-[1.15] w-[800px] h-[500px] transition duration-700 hover:cursor-pointer"
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

      {/* Similar Products */}
      <div className="similar-products w-[75%] mx-auto mt-5 mb-5">
        <h2 className="pl-2 border-t-2 pt-2 text-2xl font-bold mb-8">
          İlgili Ürünler
        </h2>
        {currentArray === "dogalTaslar" && (
          <div className="flex flex-wrap justify-center gap-4">
            {dogalTaslar[0].slice(0, 8).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center shadow-sm shadow-cyan-700 max-w-[300px]"
              >
                <div
                  onClick={() =>
                    navigate(`/dogal-taslar/${item.name}`, { state: item })
                  }
                  className="w-full overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt="test"
                    className="w-full h-full hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
                  />
                </div>
                <p className="text-center p-2 h-20 items-center flex">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        )}
        {currentArray === "plakalar" && (
          <div className="flex flex-wrap justify-center gap-4">
            {plakalar[0].slice(0, 8).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center shadow-sm shadow-cyan-700 max-w-[300px]"
              >
                <div
                  onClick={() =>
                    navigate(`/plakalar/${item.name}`, { state: item })
                  }
                  className="w-full overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt="test"
                    className="w-full h-full hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
                  />
                </div>
                <p className="text-center p-2 h-20 items-center flex">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        )}
        {currentArray === "tezgahlar" && (
          <div className="flex flex-wrap justify-center gap-4">
            {tezgahlar[0].slice(0, 8).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center shadow-sm shadow-cyan-700 max-w-[300px]"
              >
                <div
                  onClick={() =>
                    navigate(`/tezgahlar/${item.name}`, { state: item })
                  }
                  className="w-full overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt="test"
                    className="w-full h-full hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
                  />
                </div>
                <p className="text-center p-2 h-20 items-center flex">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        )}
        {currentArray === "urunler" && (
          <div className="flex flex-wrap justify-center gap-4">
            {urunler[0].slice(0, 8).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center shadow-sm shadow-cyan-700 max-w-[300px]"
              >
                <div
                  onClick={() =>
                    navigate(`/urunler/${item.name}`, { state: item })
                  }
                  className="w-full overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt="test"
                    className="w-full h-full hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
                  />
                </div>
                <p className="text-center p-2 h-20 items-center flex">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        )}
        {currentArray === "ozelKoleksiyon" && (
          <div className="flex flex-wrap justify-center gap-4">
            {ozelKoleksiyon[0].slice(0, 8).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center shadow-sm shadow-cyan-700 max-w-[300px]"
              >
                <div
                  onClick={() =>
                    navigate(`/ozel-koleksiyon/${item.name}`, { state: item })
                  }
                  className="w-full overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt="test"
                    className="w-full h-full hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
                  />
                </div>
                <p className="text-center p-2 h-20 items-center flex">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
