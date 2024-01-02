import React, { useContext, useEffect, useState } from "react";
import { plakalar } from "../../utils/index";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { MarboContext } from "../../context/MarboContext";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Plakalar = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { setPlakalar, setDogalTaslar, setTezgahlar, setUrunler } =
    useContext(MarboContext);

  const backHandler = () => {
    if (page === 0) {
      console.log("firstPage");
      return;
    }
    setPage(page - 1);
    return;
  };

  const nextHandler = () => {
    if (page === plakalar.length - 1) {
      console.log("lastPage");
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    setPlakalar(true);
    setDogalTaslar(false);
    setTezgahlar(false);
    setUrunler(false);
    console.log(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <div className="h-[120px] items-center flex-wrap flex flex-col justify-around md:items-start bg-[#f1f1f1] pl-24">
        <h2>{t("plakalar")}</h2>
        <div className="flex justify-center items-center flex-wrap gap-1">
          <Link to="/">Marboluxe</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <p>{t("plakalar")}</p>
        </div>
      </div>
      <div className="main-holder-plakalar flex justify-between w-[90%] mx-auto ">
        <div className="hidden sm:block flex-[1] ">
          <SideBar />
        </div>
        <div className="p-4 flex flex-col items-center flex-[4] mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4">
            {plakalar[page].map((tas, index) => {
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
                      className="w-full h-full hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
                    />
                  </div>
                  <p className="text-center p-2 h-20 items-center flex">
                    {tas.name}
                  </p>
                </div>
              );
            })}
          </div>
          {
            <div className="buttons flex flex-wrap gap-4 mt-4">
              <button>
                <BsFillArrowLeftCircleFill
                  size={24}
                  color="gray"
                  onClick={backHandler}
                />
              </button>
              <div className="flex flex-wrap gap-2">
                {plakalar.map((item, index) => (
                  <p
                    key={index}
                    onClick={(e) => setPage(e.target.innerText - 1)}
                    className="border-2 border-[#434343] hover:bg-gray-500 hover:text-white hover:cursor-pointer ease-in-out duration-300  rounded-full w-6 h-6 flex items-center justify-center p-3"
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
          }
          <div className="w-full flex flex-col gap-4 mt-4 border-t pt-2">
            <h2 className="text-3xl font-bold text-[#52536e]">PLAKA</h2>
            <p className="text-[#777777]">
              Milattan önceki devirlerde inşa edilmiş birçok eserde mermere
              rastlanmaktadır. Bu eserlerde kullanılan mermerlerin türleri çok
              çeşitli olmakla birlikte ebatlarının çok büyük olduğu dikkat
              çekmektedir. Tarihi, antik tapınaklarda, mermer heykel'lerde,
              saraylarda, Mısır firavun mezarlarında, piramitlerde, surlarda,
              kalelerde, stadyum ve açık hava tiyatrolarında mermere sıklıkla
              rastlanmaktadır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              PLAKA ÖZELLİKLERİ
            </h2>
            <p className="text-[#777777]">
              Mermer plakalar, farklı renk ve desenlerinden dolayı estetik
              görünümlere sahiptir. Farklı türden mermer ve traverten çeşitleri
              kalın plakalar halinde kesilerek, yüzey ve zemin kaplaması olarak
              da kullanılabilmektedir. Mermer plakalardaki damarların yönleri
              kesim yönüne göre değişiklik göstermektedir. Buna göre eğer
              çizgiler birbirini takip ediyorsa "Vein Cut" olarak adlandırılır.
              Bu kesim sonucunda ise birden fazla mermer plakanın birbiri ile
              yanyana getirilip birleşmesi sonucunda "Bookmatch" adı verilen
              tasarımsal duvar ya da büyük ebatlı plaka fayanslar elde
              edebilirsiniz. Diğer kesim türü olan "Cross Cut" ise genelde sade
              ve düz renklerin oluşturduğu bir görünüme sahip olmaktadır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              PLAKA KULLANIM ALANLARI
            </h2>
            <p className="text-[#777777]">
              Mermer plaka ve traverten plaka pek çok büyük yapı projesi için
              oldukça uygun malzemelerdir. Mermer plakalarda yüzey dokularında
              cilalı ya da mat cilalı olan modeller en çok tercih
              edilenlerdendir. Son zamanlarda kumlanmış plakalar da kullanım
              sıklıklarını artırmaları ile popülerliklerini yükseltmişlerdir.
              Renk ve modelden önce; plakanın nerede kullanılacağına karar
              vermek daha doğru olacaktır. Bu şekilde verilen kararlar
              mermerlerinizin mekânınız ile tam bir uyum sağlamasını
              garantileyecektir. Mermer plaka, inşaat sektöründe yapı ve
              dekorasyon malzemesi olarak tercih edilmektedir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              PLAKA EBATLARI
            </h2>
            <p className="text-[#777777]">
              Mermer plaka, görsel açıdan dikkat çekici olsa da işlevsel anlamda
              insanların dikkatini çeken konu ölçülerdir. Tüketici taleplerine
              uygun bir şekilde hazırlanan mermerlerin tek bir ölçüden ziyade
              talebe özel hazırlanması anlayışı hakimdir. Mermer plaka
              kalınlıklarında özel imalatlarda kalınlıkların belirlenmesinde
              ürüne göre de hareket edildiği unutulmamalıdır. Bilindiği üzere
              mermer oldukça ağır ve kaliteli doğal taşlar arasında yer
              almaktadır. Bu yüzden olması gerekenden daha ince veya kalın
              olması durumlarında istenen uzun ömürlü sonuçlara ulaşım sıkıntısı
              yaşanabilmektedir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              PLAKA FİYATLARI
            </h2>
            <p className="text-[#777777]">
              Plaka fiyatları ürünün hammaddesi, boyutuna ve ebatına göre
              değişmektedir. Mermer plaka fiyatları, çoğunlukla yapı malzemesi
              olarak kullanılmaktadır. Öncelikle bu tür malzemelerin rakamları
              belirlenirken kalite ilk ölçütlerden biri olarak lanse
              edilmektedir. Mermer doğal bir taş olduğu için fiyatları
              değişkenlik göstermektedir. Kısacası mermer plaka kullanımının ne
              kadar olacağı rakamları kesinleştirmektedir.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plakalar;
