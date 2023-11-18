import React, { useState } from "react";
import { dogalTaslarBejMermer } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const DogalTaslarBejMermer = () => {
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const backHandler = () => {
    if (page === 0) {
      console.log("firstPage");
      return;
    }
    setPage(page - 1);
    return;
  };

  const nextHandler = () => {
    if (page === dogalTaslarBejMermer.length - 1) {
      console.log("lastPage");
      return;
    }
    setPage(page + 1);
  };

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
          <p>{t("bej mermer")}</p>
        </div>
      </div>
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4]">
          <h1 className="font-bold text-3xl text-[#52536e]">
            Bej Mermer Çeşitleri ve Modelleri
          </h1>
          <p className="xl:pl-8 xl:m-4 py-4 pb-8 text-[#777777]">
            <span className="font-bold">Bej mermer</span>, onu kurduğunuz evin
            her alanını görsel olarak güzelleştirecek harika bir doğal taştır.
            Bej mermer veya krem renkli mermer, bir odada nötr renkli bir yüzey
            görevi görebilir, yani hemen hemen her dekora uyabilir. Çok
            gösterişli olmayan ama yine de şık bir mermer türü arıyorsanız bej
            mermer tam da aradığınız şey olabilir. Bej mermer, herhangi bir ev
            tadilat projesini tamamlamak için mükemmel bir seçimdir.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarBejMermer[page].map((tas, index) => {
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
            {dogalTaslarBejMermer.map((item, index) => (
              <p
                key={index}
                onClick={(e) => setPage(e.target.innerText - 1)}
                className="border-2 border-[#434343] hover:bg-gray-500 hover:text-white hover:cursor-pointer ease-in-out duration-300  rounded-full w-6 h-6 flex items-center justify-center p-3"
              >
                {index + 1}
              </p>
            ))}
            <button>
              <BsFillArrowRightCircleFill
                size={24}
                color="gray"
                onClick={nextHandler}
              />
            </button>
          </div>
          <div className="w-full flex flex-col gap-4 mt-4 border-t pt-2">
            <h2 className="text-3xl font-bold text-[#52536e]">Bej Mermer</h2>
            <p className="text-[#777777]">
              Tarihsel sürece bakıldığında mermer, yapıların ana malzemesi
              olmuştur. Günümüz modern mimarisinde de mermer, kaplama malzemesi
              olarak yaygın kullanım alanına sahiptir. Mermerin en önemli
              görevlerinden biri de yapıya estetik bir görünüm kazandırmaktadır.
              Bu görev, önemli anlamda mermerin yapılarda kullanılan diğer
              malzemelerle olan uyumuna bağlı olmaktadır. Bu anlamda{" "}
              <span className="font-bold">bej mermer</span> doğası itibariyle
              çok uyumlu bir renk içermesi dolayısıyla tercih oranı yüksek bir
              üründür. <span className="font-bold">Bej mermer</span> doğada
              yüksek miktarda bulunabiliyor olması, hem uygulandığı alanı
              boğmayan bir renk olması, hem de birçok diğer renkle uyum
              sağlayabilmesi açısından yoğun olarak kullanılmaktadır.
              Türkiye’deki ocakların çok önemli bir kısmı koyu ve{" "}
              <span className="font-bold">açık bej mermer</span> olarak
              nitelendirilebilecek bir ton aralığındadır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Bej Mermer Nedir?
            </h2>
            <p className="text-[#777777]">
              <span className="font-bold">Bej Mermerler</span> kendisine has
              özel dokusu, naif görünen renkleri ile görsel zenginliğe sahip bir
              ürün olmanın ötesinde kahverengi, bej, krem ve sarımtırak renk
              tonlarını da içeren mermer türüdür. Mermerin insan yaşamında
              yıllardır yer alan ve insanların kullanmaktan sıkılmadığı ürün
              türlerinden biri olduğunu söyleyebiliriz çünkü kendi alanında
              ekonomik çözümler üretmesinin yanı sıra; görsel zenginliği ve göz
              kamaştıran bir ürün oluşuyla dikkat çekmektedir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Bej Mermer Özellikleri
            </h2>
            <p className="text-[#777777]">
              <span className="font-bold">Bej mermer</span> homojen yapısı
              sayesinde lüks projelerde yüksek metraj döşeme taşı olarak talep
              gören seleksiyon diğer koyu doğal taşlar ile uyumlu olarak
              çalışabilmektedir. İş merkezi, havalimanı, otel ve fuar alanları
              gibi geniş alanlara sahip tüm yapılarda iç mekan döşeme, duvar
              kaplama ve kolon kaplama alanlarında bej mermer kullanılmaktadır.
              İçerisine hafif hareketlerin girdiği yüzeyler fabrikalarda
              ayrılarak gruplama yapılmaktadır. Birçok damar yapısı görünümü
              bulunmasından dolayı proje bazlı yapılan talepler de öncelikli
              olarak en uygun damar yapılı taşın belirlenmesi gerekmektedir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Bej Mermer Kullanım Alanları
            </h2>
            <p className="text-[#777777]">
              Uluslararası birçok projede kullanılan{" "}
              <span className="font-bold">bej mermerin</span> Amerika, Arap
              ülkeleri ve Türkiye Cumhuriyeti ülkelerine yüksek metraj ihracatı
              yapılmaktadır. Yüksek metraj döşeme yapılan uygulama projelerinde
              çok fazla alternatifi olmayan taşın krem ve açık tonlarında ki
              görünümü uygulama alanında bütünlüğü ve temiz görünümü
              sağlamaktadır. <span className="font-bold">Bej mermer</span> beş
              yıldızlı otel projelerinde giriş kısımları dahil duvar kaplamaları
              ve basamaklar farklı yapıya sahip ebatlı malzeme ile
              uygulanmaktadır. <span className="font-bold">Bej mermer</span>{" "}
              homojen ve diğer kırçıllı ağ yapısı bulunan bej üretimleri geçiş
              noktalarında kullanılabilmektedir. Üretim kapasitesinin yüksek
              olmasından dolayı taleplere hızlı cevap verilebilmekte ve gerekli
              olan üretim kalite kontrolünden geçirilerek projelere
              sunulmaktadır. Kaliteli uygulaması yapılan taşlar projelere ekstra
              değer katmaktadır. <span className="font-bold">Bej mermer</span>{" "}
              açık krem renk tonlarından dolayı dekorasyon için kullanılan diğer
              aksesuarlar ile uyumlu bir şekilde çalışabilmektedir.{" "}
              <span className="font-bold">Bej mermer</span> geniş alan döşeme ve
              kaplama alanlarında koyu tonlarına nazaran beyaz ve krem tonları
              daha sık kullanmaktadırlar.{" "}
              <span className="font-bold">Bej mermer</span>
              damar yapısı bulunmaması ve kristal yapısının daha sıkı olmasından
              dolayı döşeme alanında şık bir tasarıma sahip olmaktadır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Bej Mermer Fiyatları
            </h2>
            <p className="text-[#777777]">
              Farklı görünüme sahip olanlar geçiş taşı olarak seleksiyon ile
              birlikte kullanılabilmektedir. Diğer taşlara göre daha az metraj
              üretilmesi yüksek metrajlı proje bazlı talepler için üretim
              süresinin iyi planlanması gerekmektedir. Burdur ve civarında
              üretilen doğal taşlar tüm dünya da tanınması sayesinde özellikle
              yurtdışında kendilerine yer bulabilmektedirler.{" "}
              <span className="font-bold">Bej mermer</span> iç mekan geniş alan
              döşeme ve kaplama olarak kullanılan seleksiyonlar uygulama
              genelinde homojenliğin ve bütünlüğün sağlaması konusunda oldukça
              verimli sonuçlar vermektedir. Sağlamlığı artırmak için epoksi file
              uygulaması birçok çeşide uygulanmaktadır. Tezgâh ve lavabo gibi
              dekoratif görünüm istenilen uygulama alanlarında da bej mermer
              nadir olarak kullanılmaktadır.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogalTaslarBejMermer;
