import { dogalTaslarAndezit } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const DogalTaslarAndezit = () => {
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
          <p>{t("andezit")}</p>
        </div>
      </div>
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4] mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarAndezit[0].map((tas, index) => {
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
                      className="w-full h-full  hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
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
            <h2 className="text-3xl font-bold text-[#52536e]">Andezit</h2>
            <p className="text-[#777777]">
              Andezit, magmanın yer kabuğu derinliklerinden yüzeye çıkarak,
              hızlı şekilde soğumasıyla oluşan volkanik bir kayaçtır. Yüzeyi
              soğumuş lavlarla kaplıdır. İçeriğinde bolca mineraller bulunur.
              Yapısı kristal ve camlardan oluşur. Basınç ağırlığı 800-900
              kg/cm’dir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Andezit Nedir?
            </h2>
            <p className="text-[#777777]">
              Andezit taşı eflatun, mor, pembemsi gibi farklı renklerde olan
              püskürük taşlardır. Bazen de grimsi ve siyahın açık tonları
              şeklinde görmek mümkündür, Andezit kayaçların renkliliğinde
              yaşlarının etkisi bulunmaktadır. Ankara taşı olarak da
              adlandırılır ve bu adlandırılmanın nedeni bu bölgede daha çok
              bulunmasıdır. Benekli, aşınmaya dayanıklı ve kaymaz bir malzeme
              olması nedeniyle yapılarda sıklıkla kullanılmaktadır. Her yapıda
              kullanımı yapılmak üzere yapı malzemeleri tercihleri
              yapılmaktadır. Bu malzemelerin tercihini yapı tasarımcısı mimar ve
              mühendisler yapmaktadır. Tarihi yapıları incelediğimizde bu
              yapıları birçoğunun doğal malzemelerden yapıldığı görülmektedir.
              Bu malzemelerin genelde doğal taşlar olarak tercih edildiğini
              görmek mümkündür. Bu tercihlerin altında malzemelerin dayanımı,
              estetik yapıları, görselliği ve verdiği performans dikkate
              alınarak tercih edilmektedir. Yapıların ömrünü ve kalitesini
              yapımında kullanılan malzemenin kalitesi ve dayanımı
              belirlemektedir. Geçmiş birçok yapıya baktığımızda doğal taşlardan
              en çok kullanımı yapılan ürün olarak andezit taşıgörünmektedir. Bu
              doğal madenin neden bu kadar fazla kullanımı yapıldığını
              incelediğimizde malzemenin dayanım özelliği ve diğer birçok
              avantajı ortaya çıkmaktadır. Malzemeyi incelemek ve anlamak için
              öncelikle kullanımı yapılan ürünleri anlamak gerekmektedir.
              Üretimi yapılan andezit genel olarak ana vatanı Ankara olarak
              bilinmektedir. Geçmişte birçok cumhuriyet yapısında ve Osmanlı
              döneminde yapılan tarihi yapıların birçoğunda bu ürün kullanımı
              yapılmaktadır. Bu yapılarda kullanım alanı olarak genelde cephe
              kaplaması, zemin döşemesi ve özel işlemeler olarak göz önüne
              gelmektedir. Bunun yanında eski Ankara evleri ve yurdumuzun birçok
              bölümünde andezit taşının basınca dayanım katsayısından
              yararlanılarak yığma sistemle duvarlarda kullanılmıştır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Andezit Kullanım Alanları
            </h2>
            <p className="text-[#777777]">
              Andezit levha ve plakalar genellikle duvar kaplamalarında ve
              döşemelerde kullanılırlar. Duvar kaplamaları yapılırken duvarın
              tamamı veya belli bir kısmı andezitle kaplanabilir. Zemin
              kaplaması olarak kaldırımlarda, döşemelerde, tretuvar
              kaplamalarında, merdiven basamaklarında, engelli rampalarının
              kaplamalarında vs. yerlerde görmek mümkündür. Özelikle park ve
              bahçelerde, harpuşta, söve, çiçeklik gibi elemanların yapımında
              sıkça görmek mümkündür. Kaymaz bir malzeme olduğundan rampalarda,
              merdivenlerde ve eğimli yüzeylerde kullanışlıdır. Andezit taşı
              kullanım yerine göre, levha, plaka, bordür gibi farklı şekillerde
              üretilirler. Ayrıca andezit kaplama yapmanın boya ve renk
              gerektirmemesi de kullanım avantajlarından biridir. Dekoratif bir
              özelliğe de sahip olduklarından bank, çiçeklik ve diğer şehir
              mobilyalarında kullanılırlar. Farklı kalınlık ve boyutlarda
              üretimleri de yapılarak her alanda kolayca kullanılabilirler.
              Andezit taşı ısıdan ve dış faktörlerden etkilenmez. Buna rağmen
              andezit taşı fiyatları da oldukça uygundur. Boyama ya da cila
              gerektirmez. Yalıtım malzemesi olarak da kullanılabilir. Özellikle
              yalıtım açısından andezit taşı fiyatları bütçelere fayda
              sağlayabilir. Islak zeminde kolaylıkla kullanılabilir. Bu sebeple
              yalıtım malzemesi olarak da tercih edilir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Andezit Fiyatları
            </h2>
            <p className="text-[#777777]">
              Kaplama ve döşemede tarihsel bir öneme sahip olan andezit taşı en
              çok tercih edilen yapı malzemesidir. Sadece zeminlerde değil
              andezit duvar kaplama özelliğiyle de iç ve dış cephelere dekoratif
              hava katıyorlar. Tarihte, yapılarda ve yollarda kullanılan bu
              taşlar birçok alanda görülmektedir. Genellikle; kaldırımlar,
              bordür uygulamaları, bahçe düzenlemeleri, dış cephe kaplamaları,
              parke uygulamaları, döşemeler, şömineler, şadırvanlar, pencere
              kenarları, çeşmeler, tretuvarlar, mezarlıklar, tarihi yapıların
              restorasyon uygulamalarında kullanılmaktadır. Tüm andezit
              fiyatları ebatlarına ve işçiliğine göre değişiklik göstermektedir.
              Stok bilgisi, temin edilebilme ve en uygun andezit fiyat bilgisi
              için Merkez Fabrika ve Kadıköy Showroom ile irtibata
              geçebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogalTaslarAndezit;
