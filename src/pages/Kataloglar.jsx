import React, { useState } from "react";
import { dogalTaslar } from "../utils";

const Kataloglar = () => {
  return (
    <>
      <div className="flex flex-col h-[120px] justify-center items-center bg-slate-700 text-white">
        <h1 className=" font-bold text-3xl uppercase">Marboluxe Stone</h1>
        <p className="font-semibold text-2xl"> Online Catalogs</p>
        <p className="font-semibold text-l">
          You can review our catalogs of marble, imported natural stones,
          quarries and marble slabs.
        </p>
      </div>
      <div className="p-4 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
          {dogalTaslar[0].map((tas, index) => {
            return (
              <>
                {/* <iframe
                  src={`https://docs.google.com/viewer?url=https://docs.google.com/document/d/19btn0KTGfkqRLdfrc7YStfXcvv9YKdH_ikEJfxEfcLA/edit&embedded=true`}
                  width="100%"
                  height="600px"
                  title="test"
                /> */}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Kataloglar;
