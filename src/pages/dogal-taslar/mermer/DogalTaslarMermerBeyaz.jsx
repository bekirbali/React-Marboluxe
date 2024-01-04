import React, { useEffect, useState } from "react";
import { dogalTaslarMermerBeyaz } from "../../../utils";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBar";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const DogalTaslarMermerBeyaz = () => {
  const [page, setPage] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const navigate = useNavigate();

  const { t } = useTranslation();

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
    if (page === dogalTaslarMermerBeyaz.length - 1) {
      console.log("lastPage");
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    setActivePage(page + 1);
  }, [page]);

  return (
    <>
      <div className="h-[120px] items-center flex-wrap flex flex-col justify-around md:items-start bg-[#f1f1f1] pl-24">
        <h2>{t("dogal taslar")}</h2>
        <div className="flex justify-center items-center flex-wrap gap-1">
          <Link to="/">Marboluxe</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <Link to="/dogal-taslar">{t("dogal taslar")}</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <Link to="/dogal-taslar/mermer">{t("mermer")}</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <p>{t("beyaz mermer")}</p>
        </div>
      </div>
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="hidden sm:block flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4]">
          <p className="xl:pl-8 xl:m-4 py-4 pb-8 text-[#777777]">
            <span className="font-bold">Beyaz Beyaz</span> mermer, ev tadilat
            projelerinde sıklıkla kullanılan güzel bir doğal taştır. Taş aynı
            zamanda dünyanın en ünlü heykel ve yapılarından bazılarını inşa
            etmek için kullanılmıştır. Ev sahipleri, saf güzelliği ve taşın
            verdiği sofistike his nedeniyle uzun süredir beyaz mermere
            hayrandır. Bu beyaz doğal taş, mutfak tezgahları, backsplash, makyaj
            masası veya diğer ev yapısı olarak harika görünüyor. Siyah mermer
            gibi muhteşem ve klasik çekiciliği olan bir taş arıyorsanız,{" "}
            <span className="font-bold">beyaz mermerler</span> de mükemmel bir
            seçimdir.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarMermerBeyaz[page].map((tas, index) => {
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
              {dogalTaslarMermerBeyaz.map((item, index) => (
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
              Beyaz Mermer: Estetiğin Saf Dokunuşu
            </h2>
            <p className="text-[#777777]">
              <span className="font-bold">Beyaz mermer</span>, doğal taş
              dünyasının en zarif ve çarpıcı seçeneklerinden biridir. İç
              mekanlara ve dış mekanlara sofistike bir görünüm katmak için
              tercih edilen bu benzersiz malzeme, farklı çeşitleri, modelleri ve
              fiyat aralıkları ile geniş bir yelpazede sunulmaktadır. Bu yazıda,
              beyaz mermerin farklı yönlerini keşfedeceğiz.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Beyaz Mermer Çeşitleri ve Fiyatları
            </h2>
            <p className="text-[#777777]">
              Doğanın muhteşem bir sanat eseri olarak sunduğu beyaz mermerler,
              farklı çeşitleriyle her projeye uyum sağlayacak geniş bir seçenek
              sunar. Carrara, Calacatta, Thassos, Statuario ve Marboluxe
              Stone'nun kendi mermer ocaklarından çıkarılan Afyon Beyaz ve
              Marmara Beyaz gibi tanınmış beyaz mermer çeşitleri, içerisinde
              kahverengi izler bulunan Agate White modeli, döşeme, kaplamalarda
              veya sehpa, masa gibi tasarım amaçlarıyla kullanılacak eşyalarda
              kullanılan ve içerisinde siyah renkte bulunan Panda White modeli
              gibi birbirinden farklı renk damarlı desenler ve renk tonları ile
              iç mekanlara ve dış mekanlara sofistike bir zarafet getirir. Beyaz
              mermer fiyatları, çeşidi, kalitesi ve özellikleri gibi faktörlere
              bağlı olarak değişebilir. Düz beyaz modeller genellikle daha uygun
              fiyatlı bir seçenek sunarken, nadir ve yoğun damarlı türler daha
              yüksek fiyat aralıklarına sahip olabilir. Projenizin
              gereksinimleri ve bütçeniz doğrultusunda uygun bir seçim yapmak
              önemlidir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Beyaz Mermer Modelleri: Estetiği Yeniden Tanımlamak
            </h2>
            <p className="text-[#777777]">
              Beyaz mermer, farklı kesim ve işleme yöntemleriyle çeşitli
              modellerde sunulabilir. Düz beyaz mermer, minimalist ve modern bir
              estetik arayanlar için mükemmel bir tercihken damarlı ve desenli
              modeller, mekâna hareket ve derinlik katarak göz alıcı bir etki
              yaratır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Düz Beyaz Mermer: Safiyetin Basitliği
            </h2>
            <p className="text-[#777777]">
              <span className="font-bold">Düz beyaz mermer</span>, saf ve sade
              bir güzellik arayanlar için mükemmel bir seçenektir. İç mekanlarda
              zemin kaplamaları, duvar kaplamaları ve tezgah üstleri gibi
              alanlarda kullanılan bu model, temiz ve modern bir estetik sunar.
              Düz beyaz doğal taşlar, genellikle uygun fiyatlı olmasıyla da
              tercih edilir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Sonuç: Beyaz Mermerin Zerafeti
            </h2>
            <p className="text-[#777777]">
              <span className="font-bold">Beyaz mermer</span>, zamanın ötesinde
              bir zarafeti ve estetiği temsil eder. Farklı çeşitleri ve
              modelleri ile her tarza ve projeye uygun seçenekler sunar. Eğer
              projenizde sade ve sofistike bir dokunuş arıyorsanız, kesinlikle
              göz önünde bulundurmanız gereken bir seçenektir. Kalitesi,
              zarafeti ve doğanın eşsiz dokusu ile beyaz mermerler,
              mekânlarınıza benzersiz bir değer katar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogalTaslarMermerBeyaz;
