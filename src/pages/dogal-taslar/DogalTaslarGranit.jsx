import React, { useEffect, useState } from "react";
import { dogalTaslarGranit } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const DogalTaslarGranit = () => {
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
    if (page === dogalTaslarGranit.length - 1) {
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
          <p>{t("granit")}</p>
        </div>
      </div>
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="hidden sm:block flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4]">
          <p className="xl:pl-8 xl:m-4 py-4 pb-8 text-[#777777]">
            Mutfaklarınızın baş tacı olan granit tezgah çeşitleri için Marboluxe
            Stone’un granit mermer fiyatlarını ve modellerini hemen inceleyin!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarGranit[page].map((tas, index) => {
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
              {dogalTaslarGranit.map((item, index) => (
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
              Granit Çeşitleri ve Fiyatları
            </h2>
            <p className="text-[#777777]">
              İnsanoğlu geçmişten bu günümüze kadar yaşam alanı yapımında doğal
              taşlardan istifade etmiştir. Tarihin farklı dönemlerinde bu doğal
              taşlar arısında önemli bir yer alan Granit doğal taşının farklı
              örneklerini görmemiz mümkün. Uzun ömürlü yapısı, doğal görünümü ve
              farklı renk seçeneklerine sahip olan; Granit çeşitleri ve
              Fiyatları, Granitin kullanım alanlarını, granit ile mermer
              arasındaki farkların neler olduğunu sizlerle paylaşmak istiyorum.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">Granit Nedir?</h2>
            <p className="text-[#777777]">
              Magmatik kaya çeşitleri içerisinde sert ve kristal yapılı
              minareler barındıran doğal taşlara granit denilmektedir. Erimiş
              kayaçların ani soğuması sonucunda oluşan granitler yerin altında
              bulunmaktadır ve kullanıma sunulmak için farklı tekniklerle
              buralardan çıkarılması gerekir. Bulunduğu bölgenin coğrafi
              yapısına göre farklı renk seçeneklerine sahip olan granitler
              genellikle; gri, beyaz, pembe ve turuncu renklerden oluşur.
              Mineralojik yapısı granit taşlarının bu renk çeşitliliğine neden
              olmaktadır. Ülkemizin farklı noktalarında Dünyanın en kaliteli
              doğal taş madenlerinin bulunduğu bilinmektedir. Bu madenlerin
              oluşması da milyonlarca yıl almaktadır. Doğanın insanoğluna
              sunduğu bu doğal güzellikler yapı malzemeleri arasında en çok
              tercih edilen ürün olma özelliği kazandırmaktadır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Mermer ile Granit Arasındaki Fark Nedir?
            </h2>
            <p className="text-[#777777]">
              Doğal taşlar arasında kullanılan ve bilenen mermer ile Granit
              Arasındaki Fark Nedir? Sorusu sıklıkla sorulmaktadır. Yaşam
              alanlarının farklı noktalarında tercih edilen ve kullanılan bu
              doğal taşlar arasında yapısal olarak farklılıklar bulunmaktadır.
              Bu farkın oluşmasındaki en önemli kriter ise iki doğal taşın
              farklı oluşum evrelerinden kaynaklanmaktadır. Granit mermer doğal
              taşına göre çok daha geç bir sürede oluşumunu tamamladığı için
              daha sert bir yapıya sahiptir. Bununla birlikte iki doğal taşın
              arasındaki farkları sıralamak gerekirse; Granit, mermere göre
              oluşum evresini daha geç tamamladığı için daha sert bir yapıya
              sahiptir. Bu nedenle daha sağlam ve dayanıklı bir yapıya sahiptir.
              Granit leke tutmaz yapısı nedeniyle mermere oranla daha
              kullanışlıdır ve temizliği çok daha kolaydır. Oluşum esnasında
              granitler magmatik kristallerden oluştuğu için ısıya mermerlere
              oranla daha fazla dayanıklıdır Sert yapısı nedeniyle granitler
              daha az aşınmaya maruz kaldığı için mermerden daha uzun süreli bir
              kullanım imkanına sahiptir. Granitler çok daha farklı renk
              seçeneklerine sahip oldukları için mermerlere oranla daha fazla
              kullanım alanına sahiptir Mermer ile Granit Arasındaki Fark Nedir
              sorusu için verdiğimiz örneklerden de anlaşılacağı üzere granitler
              mermerlere oranla daha sağlam ve daha uzun ömürlü bir yapıya
              sahiptir. Bu nedenle Ülkemizde özellikle mutfak tezgahlarında
              granitler mermerlere oranla daha fazla tercih edilmektedir. Leke
              tutmaması, aşınmaması ve temizliğinin çok daha kolay olması bu
              ürünü mermerden bir adım öne çıkartmaktadır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Granit Kullanım Alanları
            </h2>
            <p className="text-[#777777]">
              Doğal taşlar arasında sertlik derecesi ve farklı renk
              seçenekleriyle Granit taşları oldukça sık tercih edilmektedir.
              Birbirinden farklı yaşam alanlarının kaplanması veya döşenmesinde
              bu taşlar tercih sırasında ilk sırayı alır. Darbeye ve ısıya
              dayanıklı bir yapıda oluşu bu taşın hem iç mekanlarda hem de dış
              mekanlarda tercih edilmesinde etkisi büyüktür. Ayrıca uzun ömürlü
              bir yapıya sahip olmalarının yanında bakımının veya temizliğinin
              kolay yapılıyor olması bu taşa olan ilginin artmasına etki
              etmektedir. Doğal yapısı ve farklı renk seçeneklerine sahip olan
              granit mermer doğal taşlarının kullanım alanlarını iki ana başlık
              altında değerlendirmek çok daha doğru olacaktır. Bunları iç mekan
              kullanım alanları ve dış mekan kullanım alanları olarak
              değerlendirebiliriz.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Granit İç Mekan Kullanım Alanları
            </h2>
            <p className="text-[#777777]">
              Yaşam alanlarının iç mekanlarında granit kullanımı oldukça
              fazladır. Doğal bir görünüm elde etmek adına olduğu kadar temiz
              veya hijyenik bir yapı malzemesi kullanılmak istenmesi granite
              olan ilginin artmasına etki etmektedir. Bu sebeplerle iç
              mekanlarda başta mutfak tezgahları olmak üzere, banyo
              tezgahlarında, iç zemin döşemelerinde, merdiven basamaklarında, iç
              duvar kaplamalarında, masa ve sehpalarda kullanılmaktadır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Granit Dış Mekan Kullanım Alanları
            </h2>
            <p className="text-[#777777]">
              Sert yapısı sayesinde dış etkenlere karşı oldukça dayanıklı olan
              granit mermer birçok farklı alanda kullanılmaktadır. Özellikle
              yapıların dış cephe kaplamalarında sıklıkla tercih edilmektedir.
              Ayrıcı, dış mekan yer döşemelerinde güvenle kullanılabilmektedir.
              Bunların dışında granit dış mekanlarda; merdiven basamaklarında,
              havuz ve veranda bölgesi döşemelerinde, bahçe düzenlemelerinde ve
              ocak başı gibi alanlarda rahatlıkla kullanılabilir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Granit mi Daha Pahalı Mermer mi?
            </h2>
            <p className="text-[#777777]">
              İnsanların yaşam alanlarını güzelleştirmek veya farklı bir görünüm
              elde etmek adına doğal taşları sıklıkla tercih ettiği
              bilinmektedir. Kullanılacak alana veya kullanım amacına uygun olan
              granit mermer tercihi bu konuda en önemli kriter olarak karşımıza
              çıkmaktadır. Granit Çeşitleri ve Fiyatları konusunda araştırma
              yapanların bir çoğu; Granit mi Daha Pahalı Mermer mi? Sorusunu
              sıklıkla sormakta ve cevabını aramaktadır. Granit ve Mermer
              arasındaki farkların neler olduğunu yukarıda sizlerle
              paylaşmıştık. Ayrıca kullanılacak bölgenin, istenilen ebatların ve
              talep edilen renk kartelasının fiyat verme konusunda büyük önemi
              bulunmaktadır. Bu nedenle öncelikli olarak granit mermer fiyatları
              kıyaslaması yapabilmek adına bu kriterlerin doğru
              değerlendirilmesi gerekmektedir. İstenilen ölçüler ve renk
              belirlenmeli ve fiyat karşılaştırması buna göre yapılmalıdır.
              Kullanım kolaylığı ve daha uzun ömürlü yapıya sahip olan
              granitlerin mermerlere oranla; biraz daha yüksek fiyatlı olduğunu
              belirtmek isterim. Tabi ki bu tüm mermer granit karşılaştırmaları
              için geçerli değildir. Az önce de belirttiğimiz üzere bu fiyat
              aralığını tamamen tercih edilen ürünün; ebat, renk ve
              bulunabilirlik özelliğine bağlı olduğu bilmeniz gerekmektedir.
              Tercih edilecek olan ürün bilgilerinin belirlenmesi sonucunda;
              talep edilen ürünün temin edilebilme özelliği ve güncel fiyat
              bilgisi için bizimle hemen iletişime geçebilirsiniz.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Granit Mermer Fiyatları Ne Kadar?
            </h2>
            <p className="text-[#777777]">
              Granit mermer darbelere ve dış etkenlere karşı oldukça dayanıklı
              bir doğal üründür. Kullanım amacına uygun olarak ölçümlenen ve
              belirlenen renk kartelasına göre farklı estetik yapıya sahip olan
              bu ürünün fiyatları belirlenirken bir takım kriterler göz önüne
              alınır. Bunların başında istenilen renk ve ebat bilgisidir. Ayrıca
              kullanılacak olan ürünün temin edilebilirliği bu konuda oldukça
              önemlidir. Granit iç ve dış mekanların bir çok alanında
              kullanılmak ile birlikte iç mekanlarda mutfak ve banyo bölgesinde
              en yaygın kullanım alanına sahiptir. Bu alanlar içerisinde ise
              mutfak tezgahları için tercih edilen granit bu alanda ilk sıradaki
              yerini korumaktadır. Özellikle ev hanımları çizilmez ve leke
              tutmaz yapısı nedeniyle granit tezgahlarına büyük ilgi
              göstermektedir. Ayrıca mutfak dolaplarına uygun renk skalasına
              sahip olunması bu ürünün daha fazla kişi tarafından tercih
              edilmesinde kilit rol üstlenmektedir. Sizde evinizin mutfağında
              granit mermer ürünlerini tercih edebilir ve bunun sonucunda uzun
              yıllar sorunsuz bir tezgaha sahip olabilirsiniz. Bu konuda yenilik
              içerisinde olanlar veya araştırma yapanlar Granit Çeşitleri ve
              Fiyatları hakkında bilgi sahibi olmak isterler. Az önce de
              belirttiğimiz üzere bu sorunun cevabını tek bir rakamla cevaplamak
              mümkün değildir. Talep ettiğiniz renk ve ebatlarına göre farklı
              fiyatlar ile karşılaşmanız mümkün. Bununla birlikte granit mermer
              için uygulanan işçilikler de fiyatların değişmesine etki
              etmektedir. Bu konuda en doğru ve net bilgi sahibi olmak adına
              bizimle hemen iletişime geçebilir ve tüm granit mermerleri
              hakkında ayrıntılı bilgi sahibi olabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogalTaslarGranit;
