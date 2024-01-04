import React, { useContext, useEffect, useState } from "react";
import { urunlerWaterjet } from "../../../utils";
import { Link, useNavigate } from "react-router-dom";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import SideBar from "../../../components/SideBar";
import { MarboContext } from "../../../context/MarboContext";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const UrunlerWaterjet = () => {
  const [page, setPage] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const { setWaterjet, setCnc, setDekoratifUrunler } = useContext(MarboContext);

  const pageHandler = (e) => {
    setPage(e.target.innerText - 1);
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
    if (page === urunlerWaterjet.length - 1) {
      console.log("lastPage");
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    setWaterjet(true);
    setCnc(false);
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
          <p>{t("waterjet")}</p>
        </div>
      </div>
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="hidden sm:block flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4] mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4">
            {urunlerWaterjet[page].map((tas, index) => {
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
              {urunlerWaterjet.map((item, index) => (
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
            <h2 className="text-3xl font-bold text-[#52536e]">
              WATERJET NEDİR?
            </h2>
            <p className="text-[#777777]">
              Waterjet; yüksek hızlı su gücüne dayalı olarak işlev gören, özel
              pompa sistemleri ile donatılmış ve granit dâhil birçok malzemenin
              kesilmesinde kullanılan bir sistemdir. Hemen hemen her türden
              malzemeyi kesebilecek ve delebilecek kapasiteye sahip aynı zamanda
              kesme ve delme işlemleri esnasında tehlikeli atık üretmediği için
              çevreci bir teknolojidir. Her türlü malzemeyi her şekilde keser ve
              atık bertaraf maliyetlerini azaltır. Bu sistem her türlü 3 boyutlu
              tasarımı kesebilmemizi sağlar. Waterjet günümüzde mermer işlerinde
              sıklıkla tercih edilmektedir. Mimari açıdan ve estetik olarak
              gösterişli imalatlar yapılmasını sağlamaktadır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              WATERJET NASIL ÇALIŞIR?
            </h2>
            <p className="text-[#777777]">
              Waterjet hem mimari hem de endüstriyel uygulamalar için üretim
              yöntemleri açısından çok önemli bir yeniliktir. Malzeme kalınlığı
              ve kesim zorluğu açısından geleneksel kesim yöntemlerine karşın,
              waterjet’in çok önemli avantajları vardır. Waterjet; plazma
              kesimi, lazer veya EDM(elektrik deşarj makinesi) kesim
              yöntemlerinden çok daha ileri ve üstün bir kesim yöntemidir. Diğer
              kesim yöntemleriyle kesilemeyen her türlü detaylı şekil waterjet
              ile büyük bir ustalık ve mükemmellikte kesilebilir. Waterjet;
              kusursuz ve çapaksız bir şekilde materyallere uygulanır ve
              kesilir. Waterjet ile kesim hızlı ve ekonomiktir. Kesim sonrası
              kenarlar temiz ve oldukça keskindir. Waterjet kesimi sırasında
              sıcaklık oluşmaz ve bu en büyük avantajlardan biridir. İşlem
              sonrası ürün kenarları sorunsuz ve pürüzsüz olduğu için fazla
              işçilik talep etmemektedir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              WATERJET KESİM AVANTAJLARI
            </h2>
            <p className="text-[#777777]">
              Waterjet’in mermer, granit, traverten ve doğal taş sektöründeki
              kullanımı; farklı renklerdeki plaka veya karoların istenilen her
              türlü formda kesilerek, iç içe, yan yana, puzzle benzeri
              birleştirmek suretiyle bir bütün haline getirilmesi şeklindedir.
              Böylelikle her türlü form ve desende zemin göbekleri, yer veya
              duvar bordürleri, masa tablaları, lavabo veya mutfak tezgâhı
              süslemeleri imal etmek mümkündür. Hatta hayal edilen özel
              tasarımları da istenilen zemine yerleştirilebilir.
              <ul>
                <li>* Kesme çapı oldukça küçüktür.</li>
                <li>* Oldukça detaylı geometrik şekilleri kesebilir.</li>
                <li>* Kesme esnasında malzeme kayıpları çok azdır.</li>
                <li>* Kesme esnasında ısınma olmaz.</li>
                <li>* Çok ince ve kalın malzemeleri kesebilir.</li>
                <li>* Kesme hızı oldukça hızlıdır.</li>
              </ul>
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              WATERJET İLE KESİLEBİLEN MALZEMELER
            </h2>
            <p className="text-[#777777]">
              Waterjet bilgisayar destekli soğuk bir kesim teknolojisidir ve
              birçok maddeyi iki ve üç boyutlu olarak kesebilir. Mermer,
              traverten, granit, porselen, seramik ve her türlü yer döşemeleri
              waterjet ile kesim için uygun malzemelerdir.
              <ul>
                <li>* Mermer</li>
                <li>* Bej Mermer</li>
                <li>* Granit</li>
                <li>* Traverten</li>
                <li>* Porselen</li>
                <li>* Kuvars</li>
                <li>* Limestone</li>
                <li>* Andezit</li>
                <li>* Bazalt</li>
                <li>* Oniks</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UrunlerWaterjet;
