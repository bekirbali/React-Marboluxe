import React from "react";

const Footer = () => {
  return (
    <footer className="flex bg-slate-600 text-white ">
      <div className="hakkımızda flex-1">
        <h2 className="font-bold text-2xl">Hakkımızda</h2>
        <p>
          Reisoğlu Mermer, 1943’ten bugüne doğal taş üretiminde Türkiye’nin öncü
          firmalarından biridir. Mermer, traverten, granit, oniks, limra,
          andezit ve bazalt üretimi yapan firmamız aynı zamanda mermer ocağı
          işletmeciliği, imalatı, ihracatı ve ithalatı gibi birçok alanda da
          hizmet sunmaktadır. Efesus Stone; dünya çapında doğal taş, kuvars ve
          porselen pazarlarında aranılan bir marka olup; yurtiçi ve yurtdışı
          inşaat sektörünün, mimarların ve tasarımcıların projelerine etkin bir
          şekilde cevap vermektedir
        </p>
      </div>
      <div className="bizeUlaşın flex flex-col gap-4 flex-1 justify-center items-center">
        <h2 className="font-bold text-2xl">Bize Ulaşın</h2>
        <h3 className="font-semibold">Merkez Fabrika</h3>
        <p>
          Ankara Karayolu Üzeri 22.km, 03750 İscehisar / Afyonkarahisar /
          Türkiye (+90) 531 981 47 32 (+90) 272 341 36 01 (5 Hat)
        </p>

        <h3 className="font-semibold">Kadıköy Showroom</h3>
        <p>
          Fenerbahçe, Bağdat Cd. No:82, 34726 Kadıköy / İstanbul / Türkiye (+90)
          539 847 22 44 (+90) 216 550 99 12
        </p>
        <h3 className="font-semibold">Pazarlama Ofisi</h3>
        <p>
          Akmescit Mah. Türbe Cad. No:47/A, 03100 Merkez / Afyonkarahisar /
          Türkiye (+90) 531 981 47 32 (+90) 272 214 22 28
        </p>
      </div>
    </footer>
  );
};

export default Footer;
