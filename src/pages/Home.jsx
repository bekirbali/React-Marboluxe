import React from "react";
import kuvars from "../assets/kuvars.jpg";
import bejMermer from "../assets/bejMermer.jpg";
import mermer from "../assets/mermer.jpg";
import oniks from "../assets/oniks.jpg";
import porselenMini from "../assets/porselenMini.jpg";
import traverten from "../assets/Traverten.jpg";
import ilham from "../assets/ilhamveren.jpg";
import dekoratif from "../assets/dekoratifÜrünler.jpg";
import marka from "../assets/markalar.jpg";
import ocaklar from "../assets/mermerOcakları.jpg";

const Home = () => {
  return (
    <div>
      <div className="mermerTezgah flex flex-col items-center justify-center bg-slate-300 ">
        <div className="text-center my-4">
          <h1 className="font-bold text-3xl my-2 ">Mermer ve Tezgahlar</h1>
          <p className="font-semibold">
            1943’ten bugüne doğal taş üretiminde Türkiye’nin öncülerinden olan
            Efesus Stone’da mutfak, banyo ve diğer yaşam alanlarınız için
            mükemmel malzeme tercihinizi yapın. Binlerce taş ve 199’dan fazla
            renkten oluşan kataloglarımızı inceleyin.
          </p>
        </div>

        {/* Mermer tezgah fotoları */}
        <section className="photosOfMermerTezgah flex flex-wrap justify-center gap-4">
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <img src={mermer} alt="" />
            <p>Mermer</p>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <img src={kuvars} alt="" />
            <p>Kuvars</p>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <img src={porselenMini} alt="" />
            <p>Porselen</p>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <img src={bejMermer} alt="" />
            <p>Bej Mermer</p>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <img src={traverten} alt="" />
            <p>Traverten</p>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <img src={oniks} alt="" />
            <p>Oniks</p>
          </div>
        </section>
        <button className="rounded-md bg-yellow-400 p-2 font-semibold my-4 hover:shadow-md hover:shadow-slate-500 transition ease-in-out ">
          Daha Fazla
        </button>

        {/* 6 blog yazı kısmı */}
        <section className="flex flex-col items-center justify-center px-8">
          <h2 className="text-center text-3xl font-bold mb-3">
            Mermer ve Doğal Taşların Zarif Dünyasına Hoş Geldiniz!
          </h2>
          <div className="grid grid-cols-3 justify-center items-center gap-4">
            <div className="topLeft">
              <h3 className="font-semibold text-xl">
                Eşsiz Estetik ve Doğal Güzellik Bir Arada
              </h3>
              <p className="text-lg">
                Mermerin zamanı durdurma yeteneğiyle tanışın. Sıradanlığın
                ötesindeki estetik anlayışını yaşam alanlarınıza taşıyacak bir
                dünya sunuyoruz. Her bir mermer kesiti, mekanınıza sonsuz şıklık
                ve zarafet katmak üzere özenle seçildi.
              </p>
            </div>
            <div className="topMid">
              <h3 className="font-semibold text-xl">
                Yaratıcılığınızı Mermer ile İfade Edin
              </h3>
              <p className="text-lg">
                Mutfak tezgahlarından banyo zeminlerine, oturma odası
                masalarından merdiven basamaklarına kadar, her bir mekânın
                karakterini mermerle yükseltin. Her mermer türü, farklılığı
                yansıtan damarları ve renk tonlarıyla mekânınıza özgünlük katar.
              </p>
            </div>
            <div className="topRight">
              <h3 className="font-semibold text-xl">Kalite ve Dayanıklılık</h3>
              <p className="text-lg">
                Her bir mermer plakası, doğanın asırlar süren ustalığının bir
                yansımasıdır. İster iç mekânda ister dış mekânda kullanın,
                mermerler üstün dayanıklılığıyla uzun yıllar boyunca güzelliğini
                muhafaza eder.
              </p>
            </div>
            <div className="bottomLeft">
              <h3 className="font-semibold text-xl">
                Beyazın Saflığından Siyahın Asaletine
              </h3>
              <p className="text-lg">
                Beyazın saf dokunuşundan siyahın şık asaletine, gri, bej,
                kahverengi, sarı, vişne, gold vb. geniş renk yelpazemizle
                tarzınıza uygun granit veya mermer doğal taşı bulmanızı
                sağlıyoruz. Modern minimalizmden klasik zarafete kadar, her
                tarza ve zevke hitap eden bir seçenek bulabilirsiniz.
              </p>
            </div>
            <div className="bottomMid">
              <h3 className="font-semibold text-xl">
                Doğal Taş ve Mermer Uzmanlığı
              </h3>
              <p className="text-lg">
                Efesus Stone olarak 1943 yılından beri mermerin dilini anlayan
                bir ekibiz. Her projenin özel ihtiyaçlarına uygun mermer seçimi
                ve tasarımı konusundaki uzmanlığımızla size rehberlik ediyoruz.
                Projelerinizi en yüksek standartlarda gerçeğe dönüştürmek için
                buradayız.
              </p>
            </div>
            <div className="bottomRight">
              <h3 className="font-semibold text-xl">
                Doğal Taşlar için Bizimle İletişime Geçin
              </h3>
              <p className="text-lg">
                Sizin için özel olarak seçtiğimiz mermer koleksiyonlarımızı
                görmek ve detaylı bilgi almak için hemen iletişime geçin. İç
                mekânlarınıza doğal bir dokunuş katın, yaşam alanlarınızı
                mermerin zarif dünyasıyla buluşturun!
              </p>
            </div>
          </div>
        </section>

        {/* İlham veren Projeler */}
        <section className="bg-slate-700 p-2">
          <h2 className="text-2xl text-center font-bold text-white p-2">
            İlham Veren Projeler
          </h2>
          <img src={ilham} alt="ilham" />
        </section>

        {/* Plakalar ve Dekoratif Ürünler */}
        <section className="p-2 bg-slate-300">
          <h2 className="text-2xl text-center font-bold p-2>Plakalar ve Dekoratif ">
            Plakalar ve Dekoratif Ürünler
          </h2>
          <p>
            Efesus Stone’da, mermer ve tüm doğal taş çeşitleri için plakalar ile
            birlikte masalardan, şöminelere, sütun ve kolonlardan mozaiklere
            kadar dekoratif ürünlere, CNC ve Waterjet kesim ürün kataloglarını
            da inceleyebilirsiniz.
          </p>
          <img src={dekoratif} alt="" />
        </section>

        {/* Markalar */}
        <section className="p-2 bg-slate-700">
          <h2 className="text-2xl text-center font-bold text-white p-2">
            Kuvars ve Porselen Tezgah Markalarımız
          </h2>
          <p className="text-white">
            Bir dünya markası hedefiyle 1943 yılında kurulan EFESUS STONE, bugün
            199’dan fazla renkle tarzını yansıtan, mermer, kuvars ve porselen
            tezgahlarına kadar sektörünün yüksek değerli markalarından biridir.
          </p>
          <img src={marka} alt="" />
        </section>

        {/* Mermer Ocakları */}
        <section className="flex gap-8 items-center justify-center">
          <img src={ocaklar} alt="ocaklar" />
          <div className="stoneMermerOcaklar">
            <h2 className="text-2xl text-center font-bold p-2">
              MarboLuxe Mermer Ocakları
            </h2>
            <p className="my-2">
              Doğal taş çeşitlerinde 8 ocağıyla birlikte araştırma ve geliştirme
              süreçlerinde mimari gelişmeleri tahmin ve takip etme, bunlara
              yanıt verme yeteneği, çevre ve sürdürülebilirliğin
              önceliklendirilmesi{" "}
              <span className="italic font-semibold text-lg"> Marboluxe</span>{" "}
              STONE marka değerini yükseltiyor.
            </p>
            <button className="bg-orange-700 text-white p-2 font-bold rounded-md hover:shadow-md transition hover:shadow-slate-500 ease-in-out">
              Ocakları İncele
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
