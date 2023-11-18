import { dogalTaslarBazalt } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const DogalTaslarBazalt = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

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
          <p>{t("bazalt")}</p>
        </div>
      </div>
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4] mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarBazalt[0].map((tas, index) => {
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
          <div className="w-full flex flex-col gap-4 mt-4 border-t pt-2">
            <h2 className="text-3xl font-bold text-[#52536e]">Bazalt</h2>
            <p className="text-[#777777]">
              Bazalt inşaat literatüründe cam yünü veya taş yünü olarak
              tanımlanan ama aslında mermer gibi bir doğal taş çeşidi olan
              madendir. Fakat endüstride çeşitli işlemlerden geçirilerek
              zenginleştirilmiş ve yalıtım malzemesi şekline getirilmiştir.
              Ayrıca zemin döşemesi amaçlı olarak kaldırım ve küp taşı olarak
              tercih edilmektedir. Diğer taşlara göre daha sert bir yapıya
              sahiptir. Dayanıklılığı her zaman öndedir ve oldukça kolay bulunan
              bir taştır. Çok rahat bulunduğu için kullanım alanları da hızla
              artmıştır. Kayseri, Antep, Ankara, İzmir, Çorlu, Urfa, Diyarbakır
              gibi şehirler başta olmak üzere Türkiye’nin birçok şehrinden
              çıkarılmaktadır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">Bazalt Nedir?</h2>
            <p className="text-[#777777]">
              Magmatik kökenli bir doğal taş çeşidi olan bazalt, dış püskürük
              kayaç türüdür. Halk arasında çok sıkça olarak duyulan bazalt
              (Kayseri taşı), volkanik kaynaklı bir doğal taştır. Volkanik
              püskürme sonucu oluşan bu kayaç türünü diğer taşlardan ayıran en
              önemli özelliği çok sert ve dayanıklı yapıda olmasıdır. Bazalt
              genellikle gri veya siyah renktedir ancak diğer demir oksitlere ve
              hidroksitlere oksitlenmesi nedeniyle hızlıca kahverengi veya pas
              kırmızısına dönüşmektedir. Ayrışma veya yüksek konsantrasyonlarda
              plajiyoklaz nedeniyle, bazı bazaltlar oldukça açık renkli
              olabilmektedir. Bazalt, büyük mineral kristallerinin büyümesi için
              çok hızlı bir şekilde erimiş kaya soğuması nedeniyle ince taneli
              bir mineral dokuya sahiptir; genellikle daha ince taneli bir
              matrise gömülmüş daha büyük kristaller içerir. Çok sıcak ve soğuk
              iklimlerde kullanılabilme özelliğine sahiptir En büyük özelliği
              homojen bir taş olması nedeniyle çok düzgün bir hat olanağı
              sağlamasıdır. Problemsiz yüzeyler yapılabildiği için kaldırım ve
              yollarda tercih edilen önemli taşlar arasında yer alıyor. Her
              şekilde doğanın koşullarına karşı dayanıklı, ince taneli, yoğun
              yapılı ve ağırlıklara karşı oldukça dayanıklı bir taştır. Bazalt
              taşı, aşınması oldukça güçtür. Yüksek basınçlara dayanıklı
              olduğundan ince işçilik içinde oldukça uygun bir yapıya sahiptir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Bazalt Kullanım Alanları
            </h2>
            <p className="text-[#777777]">
              Bazalt taşı, dünyanın en sağlam ve en dayanıklı doğal taşıdır. Tüm
              zorlu şartlara üstün dayanıklılık göstermesi sayesinde de, doğal
              taşlar arasında en çok tercih edilen olmayı başarmaktadır. Sunduğu
              muhteşem özellikler sayesinde bazalt taşının kullanım alanı da
              oldukça geniştir. Bazaltlar homojen, solmayan, renkleri ve
              cilasız, silinmiş veya kaba yontulmuş yüzey biçimleri ile son on
              yılda yurtiçi ve yurtdışı doğal taş kullanıcılarının tercihi olan
              "rustik" tarz, tarihi dokuyu anımsama, pastel ve dingin renk
              formatıyla birebir uyuşmaktadır. Bu özelliğine atmosferin
              bozuşturma tesirlerine karşı dayanıklılığı ve ısı-ses izolasyonu
              sağlama özellikleri eklenince birçok projede kaplama taş olarak
              kullanılmaya başlanmıştır. Bazalt taşı, agrega, kırma taş olarak
              da bazı beton bileşimlerinde yer alabiliyor. Bu bileşimler, yoğun
              mineral yapısı sebebiyle seramik üretiminde, cam sanayisinde etkin
              olarak hammadde kullanılıyor. Isı depolama sistemlerinde de
              bazalt, hammadde olarak oldukça ekonomik ve pratik çözümler
              sunuyor. Çeşitli kaplama uygulamalarında kullanılan taş yünü
              malzemesinin üretiminde bazalttan faydalanılıyor. Bazalt taşının
              kullanım alanları genişliyor. Yapı ve dekor sektörünün ilk
              başlarda düşündüğü bu doğal taş, heykeltıraşların da tercihleri
              arasında. Bazalttan hediyelik eşya olarak biblolar, heykelcikler
              üretilebiliyor.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Bazalt Fiyatları
            </h2>
            <p className="text-[#777777]">
              Bazalt, çok çeşitli amaçlar için kullanılmaktadır. En çok inşaat
              projelerinde bir agrega olarak kullanılmak üzere ezilmektedir.
              Bazalt tıpkı granit gibi boyut taşı olarak bilinmektedir. Bazalt
              kayalarının ince levhaları kesilmekte ve bazen yer karoları, bina
              kaplamaları, anıtlar ve diğer taş nesneler olarak kullanılmak
              üzere parlatılıp değerlendirilmektedir. Stok bilgisi, temin
              edilebilme ve en uygun bazalt fiyatları bilgisi için Merkez
              Fabrika ve Kadıköy Showroom ile irtibata geçebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogalTaslarBazalt;
