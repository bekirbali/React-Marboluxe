import React, { useContext, useEffect, useState } from "react";
import { urunlerCnc } from "../../../utils";
import { Link, useNavigate } from "react-router-dom";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import SideBar from "../../../components/SideBar";
import { MarboContext } from "../../../context/MarboContext";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const UrunlerCnc = () => {
  const [page, setPage] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const { setWaterjet, setCnc, setDekoratifUrunler } = useContext(MarboContext);

  const pageHandler = (e) => {
    setPage(e.target.innerText - 1);
    window.scrollTo(0, 0);
  };

  const backHandler = () => {
    if (page === 0) {
      console.log("firstPage");
      return;
    }
    setPage(page - 1);
    return;
  };

  const nextHandler = () => {
    if (page === urunlerCnc.length - 1) {
      console.log("lastPage");
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    setWaterjet(false);
    setCnc(true);
    setDekoratifUrunler(false);
    setActivePage(page + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <>
      <div className="h-[120px] items-center flex-wrap flex flex-col justify-around md:items-start bg-[#f1f1f1] pl-24">
        <h2>{t("urunler")}</h2>
        <div className="flex justify-center items-center flex-wrap gap-1">
          <Link to="/">Marboluxe</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <Link to="/urunler">{t("urunler")}</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <p>{t("cnc urunler")}</p>
        </div>
      </div>
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="hidden sm:block flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4] mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4">
            {urunlerCnc[page].map((tas, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center shadow-sm shadow-cyan-700 max-w-[300px]"
                >
                  <div
                    onClick={() => navigate(`${tas.name}`, { state: tas })}
                    className="w-full overflow-hidden"
                  >
                    <img
                      loading="lazy"
                      src={tas.image}
                      alt="test"
                      className="w-full hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
                    />
                  </div>
                  <p className="text-center p-2 h-20 items-center flex">
                    {tas.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="buttons flex gap-4 mt-4">
            <button>
              <BsFillArrowLeftCircleFill
                size={24}
                color="gray"
                onClick={backHandler}
              />
            </button>
            <div className="flex flex-wrap gap-2">
              {urunlerCnc.map((item, index) => (
                <p
                  key={index}
                  onClick={pageHandler}
                  className={`border-2 border-[#434343] hover:bg-gray-500 hover:text-white hover:cursor-pointer ease-in-out duration-300  rounded-full w-6 h-6 flex items-center justify-center p-3
                  ${activePage === index + 1 ? "bg-gray-500 text-white" : ""}
                  `}
                >
                  {index + 1}
                </p>
              ))}
            </div>
            <button>
              <BsFillArrowRightCircleFill
                size={24}
                color="gray"
                onClick={nextHandler}
              />
            </button>
          </div>
          <div className="w-full flex flex-col gap-4 mt-4 border-t pt-2">
            <h2 className="text-3xl font-bold text-[#52536e]">CNC Nedir?</h2>
            <p className="text-[#777777]">
              CNC, işleme takımlarının (matkaplar, delme takımları, torna
              tezgahları gibi) ve 3B yazıcıların bir bilgisayar aracılığıyla
              otomatik olarak kontrol edilerek şekil verilecek iş parçasının
              üzerinde operasyonda bulunan talaşlı imalat işlemidir. CNC kesim
              ile hazır tasarımları hassasiyetle uygulayabilir, dilerseniz
              tasarım fikirlerinizi gerçeğe dönüştürebilirsiniz. Bir CNC
              makinesi, kodlar ile programlanmış talimatı takip ederek manuel
              bir operatöre ihtiyaç duymadan, teknik standartları karşılamak
              için belli bir malzeme bazındaki iş parçasını istenilen şekle
              gelene kadar, manuelden daha hassas bir şekilde keser. CNC kesimin
              avantajı ise çoğu doğal taşı kusursuz bir şekilde kesebilmesidir.
              <ul>
                <li>* Mermer Masa</li>
                <li>* Mermer Sehpa</li>
                <li>* CNC Duvar Dekorasyonları</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UrunlerCnc;
