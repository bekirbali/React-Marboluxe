import { dogalTaslarMermerSiyah } from "../../../utils";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const DogalTaslarMermerSiyah = () => {
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
          <Link to="/dogal-taslar/mermer">{t("mermer")}</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <p>{t("siyah mermer")}</p>
        </div>
      </div>
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="hidden sm:block flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4]">
          <p className="xl:pl-8 xl:m-4 py-4 pb-8 text-[#777777]">
            <span className="font-bold">Siyah mermer</span>, dünyanın en
            kaliteli ve estetik taşlarından biri olarak kabul edilen zarif bir
            doğal taştır. Çarpıcı bir tezgah, backsplash, makyaj masası veya
            başka bir ev yapısı için kullanabilirsiniz. Koyu renk mermer tezgah
            arıyorsanız bu siyah doğal taş zevkinize mutlaka uyacaktır. Bu tür
            doğal taşlarda yer alan damarlar, siyah arka plana karşı etkileyici
            bir kontrast meydana getirir. Evinize karakter katacak bir taş
            arıyorsanız, siyah doğal taş mükemmel bir seçimdir.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarMermerSiyah[0].map((tas, index) => {
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
            <h2 className="text-3xl font-bold text-[#52536e]">
              Siyah Mermer: Estetik ve doğallığın ihtişamını sunan doğal taş
            </h2>
            <p className="text-[#777777]">
              Doğanın derinliklerinde yıllarca süren doğal süreçlerle oluşan{" "}
              <span className="font-bold">siyah mermer</span>, estetik değeri ve
              dayanıklılığı ile dikkat çeker. Siyah mermer, iç mimariden dış
              cephe kaplamalarına, mutfak tezgahlarından banyo zeminlerine kadar
              geniş bir kullanım yelpazesi sunar. İşte siyah mermerin çeşitleri,
              modelleri, fiyatları ve doğal taş olarak benzersiz özellikleri.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Siyah Mermer Nedir?
            </h2>
            <p className="text-[#777777]">
              Siyah mermer, doğanın büyülü işleyişinin bir sonucu olarak oluşan
              nadide doğal taşlardan biridir. Zengin siyah renk tonu ve çarpıcı
              damarlarıyla mekanlara sofistike bir dokunuş katan bu özel taş,
              hem dayanıklılığı hem de estetik çekiciliği ile tanınır. İç
              mimariden dış cephe kaplamalarına kadar geniş bir yelpazede
              kullanılır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Siyah Mermer Çeşitleri ve Modelleri
            </h2>
            <p className="text-[#777777]">
              Birçok çeşit ve modelde gelir. Black Galaxy'nin göktaşı benzeri
              beyaz ışıltıları, Nero Marquina'nın beyaz damarları ve Absolute
              Black'in homojen rengi gibi farklı özelliklere sahip çeşitleri
              mevcuttur. Her bir çeşidin benzersiz desenleri, mekanlara
              sofistike ve modern bir hava katar. Siyah mermerin damarlı veya
              düz renkli modelleri, iç tasarım projelerinde farklı seçenekler
              sunar. Bu çeşitler, tasarım projelerine özgün ve çekici bir
              görünüm katmak için kullanılır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Siyah Mermer Nasıl Parlatılır ve Bakımı Nasıl Yapılır?
            </h2>
            <p className="text-[#777777]">
              Siyah mermerin dayanıklılığını ve güzelliğini korumak için düzenli
              bakım gereklidir. Yüzeydeki lekeleri hafif sabunlu su ile
              temizleyebilirsiniz. Asit içeren temizleyicilerden kaçının. Leke
              oluşumunu önlemek için yüzeyi düzenli olarak silmek ve
              sızdırmazlık işlemleri yapmak da önemlidir. Yüzeyini parlatmak
              için ise özel taş parlatıcıları kullanabilirsiniz. Bu
              parlatıcılar, mermerin doğal parlaklığını geri getirir ve
              mekanınıza canlılık katar. Leke oluşumunu önlemek için yüzeyi
              düzenli olarak silmek ve sızdırmazlık işlemleri yapmak da
              önemlidir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Siyah Mermer Nerede Bulunur?
            </h2>
            <p className="text-[#777777]">
              Siyah mermerin fiyatları, çeşidine, kalitesine ve taşın
              çıkarıldığı bölgeye göre değişebilir. Nadir ve benzersiz
              damarlarına sahip çeşitler genellikle daha yüksek fiyatlarla
              gelir. Ancak, siyah mermerin dayanıklılığı ve estetik değeri, uzun
              vadede bu yatırımın karşılığını fazlasıyla verir. Fiyatlar,
              metrekare başına hesaplanır ve proje ihtiyaçlarına göre
              değişkenlik gösterebilir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Siyah Mermer Fiyatları
            </h2>
            <p className="text-[#777777]">
              Siyah mermerin fiyatı, çeşidine, kalitesine ve çıkarıldığı bölgeye
              göre değişmekte olup bu durumum tüm mermer çeşitleri ve fiyatları
              açısından aynıdır. Daha nadir ve göz alıcı damarlarına sahip
              mermer modelleri genellikle daha yüksek fiyat aralıklarına
              sahiptir. Ancak, siyah mermerin dayanıklılığı ve estetik değeri
              uzun vadede yatırımın karşılığını verir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Siyah Doğal Taş Olarak Benzersiz Özellikler
            </h2>
            <p className="text-[#777777]">
              Sadece estetik açıdan değil, aynı zamanda sağlamlığı ile de öne
              çıkan bu siyah doğal taşın dayanıklılığı, özellikle zemin
              kaplamaları ve tezgahlar için ideal bir seçenek yapar. Siyah
              mermerin yüzeyi, cilalı veya mat olarak tercih edilebilir ve
              mekana sofistike bir dokunuş ekler. İç mekanlardan dış cephelere
              kadar çok çeşitli kullanım alanlarına sahiptir. Mutfak tezgahları,
              banyo zeminleri, merdiven basamakları ve duvar kaplamaları gibi
              birçok alanda estetik ve dayanıklılık sunan bu siyah doğal taş,
              doğal taşların zarafetini ve doğallığını mekanlarınıza taşıyarak,
              estetik ve fonksiyonelliği bir araya getirir. Farklı çeşitleri,
              modelleri ve fiyat aralıklarıyla her tür iç mekan tasarımına uygun
              bir seçenek sunar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogalTaslarMermerSiyah;
