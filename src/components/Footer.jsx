import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center bg-slate-600 text-white p-2 h-[200px]">
      <div className="hakkımızda flex-1">
        <h2 className="font-bold text-xl md:text-2xl">Hakkımızda</h2>
        <p>
          Marboluxe Mermer, 1943’ten bugüne doğal taş üretiminde Türkiye’nin
          öncü firmalarından biridir.
        </p>
      </div>
      <div className="bizeUlaşın flex flex-col gap-2 flex-1 justify-center">
        <h2 className="font-bold text-xl md:text-2xl">Bize Ulaşın</h2>
        <h3 className="font-semibold">Merkez Fabrika</h3>
        <p>
          Ankara Karayolu Üzeri 22.km, 03750 İscehisar / Afyonkarahisar /
          Türkiye
        </p>
      </div>
    </footer>
  );
};

export default Footer;
