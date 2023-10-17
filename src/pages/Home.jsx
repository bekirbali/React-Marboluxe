import React from "react";
import kuvars from "../assets/kuvars.avif";
import bejMermer from "../assets/bejMermer.avif";
import mermer from "../assets/mermer.avif";
import oniks from "../assets/oniks.avif";
import porselen from "../assets/porselen.avif";
import traverten from "../assets/traverten.avif";
import ilham from "../assets/ilhamveren.jpg";
import dekoratif from "../assets/dekoratifÜrünler.jpg";
import marka from "../assets/markalar.jpg";
import ocaklar from "../assets/mermerOcakları.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="mermerTezgah flex flex-col items-center justify-center bg-slate-300 ">
        {/* Mermer tezgah fotoları */}
        <section className="photosOfMermerTezgah flex flex-wrap justify-center gap-4 bg-slate-700 text-white">
          <div className="text-center my-4">
            <h1 className="font-bold text-3xl my-2 ">Mermer ve Tezgahlar</h1>
            <p className="font-semibold w-[75%] mx-auto">
              1943’ten bugüne doğal taş üretiminde Türkiye’nin öncülerinden olan
              Efesus Stone’da mutfak, banyo ve diğer yaşam alanlarınız için
              mükemmel malzeme tercihinizi yapın. Binlerce taş ve 199’dan fazla
              renkten oluşan kataloglarımızı inceleyin.
            </p>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <div className="w-full h-[270px] overflow-hidden">
              <img
                src={mermer}
                alt=""
                className="w-full h-[270px] hover:scale-[1.25] transition duration-500 hover:cursor-pointer "
              />
            </div>
            <p className="hover:cursor-pointer">Mermer</p>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <div className="w-full h-[270px] overflow-hidden">
              <img
                src={kuvars}
                alt=""
                className="w-full h-[270px] hover:scale-[1.25] transition duration-500 hover:cursor-pointer "
              />
            </div>
            <p className="hover:cursor-pointer">Kuvars</p>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center overflow-hidden ">
            <img
              src={porselen}
              alt=""
              className="w-full h-[270px] hover:scale-[1.25] transition duration-500 hover:cursor-pointer "
            />
            <p className="hover:cursor-pointer">Porselen</p>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <div className="w-full h-[270px] overflow-hidden">
              <img
                src={bejMermer}
                alt=""
                className="w-full h-[270px] hover:scale-[1.25] transition duration-500 hover:cursor-pointer "
              />
            </div>
            <p className="hover:cursor-pointer">Bej Mermer</p>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <div className="w-full h-[270px] overflow-hidden">
              <img
                src={traverten}
                alt=""
                className="w-full h-[270px] hover:scale-[1.25] transition duration-500 hover:cursor-pointer "
              />
            </div>
            <p className="hover:cursor-pointer">Traverten</p>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <div className="w-full h-[270px] overflow-hidden">
              <img
                src={oniks}
                alt=""
                className="w-full h-[270px] hover:scale-[1.25] transition duration-500 hover:cursor-pointer "
              />
            </div>
            <p className="hover:cursor-pointer">Oniks</p>
          </div>
          <div className=" w-[75%] text-center">
            <button className="rounded-md  bg-yellow-400 p-2 font-semibold my-4 hover:shadow-md hover:shadow-slate-500 transition ease-in-out ">
              Daha Fazla
            </button>
          </div>
        </section>

        {/* 6 blog yazı kısmı */}
        <section className="flex flex-col w-[85%] px-8 py-6">
          <h2 className="text-center text-3xl font-bold mb-8">
            Mermer ve Doğal Taşların Zarif Dünyasına Hoş Geldiniz!
          </h2>
          <div className="grid grid-cols-1 text-center lg:text-left lg:grid-cols-3 gap-8 mb-2">
            <div className="topLeft">
              <h3 className="font-semibold text-xl mb-2">
                Eşsiz Estetik ve Doğal Güzellik Bir Arada
              </h3>
              <p className="">
                Mermerin zamanı durdurma yeteneğiyle tanışın. Sıradanlığın
                ötesindeki estetik anlayışını yaşam alanlarınıza taşıyacak bir
                dünya sunuyoruz. Her bir mermer kesiti, mekanınıza sonsuz şıklık
                ve zarafet katmak üzere özenle seçildi.
              </p>
            </div>
            <div className="topMid">
              <h3 className="font-semibold text-xl mb-2">
                Yaratıcılığınızı Mermer ile İfade Edin
              </h3>
              <p className="">
                Mutfak tezgahlarından banyo zeminlerine, oturma odası
                masalarından merdiven basamaklarına kadar, her bir mekânın
                karakterini mermerle yükseltin. Her mermer türü, farklılığı
                yansıtan damarları ve renk tonlarıyla mekânınıza özgünlük katar.
              </p>
            </div>
            <div className="topRight">
              <h3 className="font-semibold text-xl mb-2">
                Kalite ve Dayanıklılık
              </h3>
              <p className="">
                Her bir mermer plakası, doğanın asırlar süren ustalığının bir
                yansımasıdır. İster iç mekânda ister dış mekânda kullanın,
                mermerler üstün dayanıklılığıyla uzun yıllar boyunca güzelliğini
                muhafaza eder.
              </p>
            </div>
            <div className="bottomLeft">
              <h3 className="font-semibold text-xl mb-2">
                Beyazın Saflığından Siyahın Asaletine
              </h3>
              <p className="">
                Beyazın saf dokunuşundan siyahın şık asaletine, gri, bej,
                kahverengi, sarı, vişne, gold vb. geniş renk yelpazemizle
                tarzınıza uygun granit veya mermer doğal taşı bulmanızı
                sağlıyoruz. Modern minimalizmden klasik zarafete kadar, her
                tarza ve zevke hitap eden bir seçenek bulabilirsiniz.
              </p>
            </div>
            <div className="bottomMid">
              <h3 className="font-semibold text-xl mb-2">
                Doğal Taş ve Mermer Uzmanlığı
              </h3>
              <p className="">
                Efesus Stone olarak 1943 yılından beri mermerin dilini anlayan
                bir ekibiz. Her projenin özel ihtiyaçlarına uygun mermer seçimi
                ve tasarımı konusundaki uzmanlığımızla size rehberlik ediyoruz.
                Projelerinizi en yüksek standartlarda gerçeğe dönüştürmek için
                buradayız.
              </p>
            </div>
            <div className="bottomRight">
              <h3 className="font-semibold text-xl mb-2">
                Doğal Taşlar için Bizimle İletişime Geçin
              </h3>
              <p className="">
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
          <div>
            <h2 className="text-2xl text-center font-bold p-2>Plakalar ve Dekoratif ">
              Plakalar ve Dekoratif Ürünler
            </h2>
            <p>
              Efesus Stone’da, mermer ve tüm doğal taş çeşitleri için plakalar
              ile birlikte masalardan, şöminelere, sütun ve kolonlardan
              mozaiklere kadar dekoratif ürünlere, CNC ve Waterjet kesim ürün
              kataloglarını da inceleyebilirsiniz.
            </p>
          </div>
          <div>
            <div className="bigPics">
              <Link to="/">
                <img src="" alt="" />
              </Link>
              <Link to="/">
                <img src="" alt="" />
              </Link>
            </div>
            <div className="smallPics">
              <Link to="/">
                <img src="" alt="" />
              </Link>
              <Link to="/">
                <img src="" alt="" />
              </Link>
              <Link to="/">
                <img src="" alt="" />
              </Link>
              <Link to="/">
                <img src="" alt="" />
              </Link>
            </div>
          </div>
          <img src={dekoratif} alt="" />
        </section>

        {/* Markalar */}
        <section className="p-2 bg-slate-700 w-full flex flex-col items-center">
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
        <section className="flex flex-col text-center lg:text-left lg:flex-row gap-8 items-center justify-center">
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
