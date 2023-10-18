import React from "react";

import kuvars from "../assets/kuvars.avif";
import bejMermer from "../assets/bejMermer.avif";
import mermer from "../assets/mermer.avif";
import oniks from "../assets/oniks.avif";
import porselen from "../assets/porselen.avif";
import traverten from "../assets/traverten.avif";
import marka from "../assets/markalar.jpg";
import ocaklar from "../assets/ocaklar.png";
import plakalar from "../assets/plakalar.jpg";
import dekoratif from "../assets/dekoratif.jpg";
import cnc from "../assets/cnc.jpg";
import mozaik from "../assets/mozaikler.jpg";
import magazalar from "../assets/magazalar.jpg";

import bookmatch from "../assets/projects/bookmatch.jpeg";
import ciragan from "../assets/projects/ciragan.jpg";
import havuzkenari from "../assets/projects/havuzkenari.jpg";
import mozzart from "../assets/projects/mozzart.jpg";
import perapalace from "../assets/projects/perapalace.jpeg";
import sagalassos from "../assets/projects/sagalassos.jpg";
import vivakapadokya from "../assets/projects/vivakapadokya.jpg";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const Home = () => {
  return (
    <div>
      <div className="mermerTezgah flex flex-col items-center justify-center bg-slate-50 ">
        {/* Mermer tezgah fotoları */}
        <section className="photosOfMermerTezgah flex flex-wrap justify-center gap-4 bg-slate-50">
          <div className="text-center my-4">
            <h1 className="font-bold text-3xl my-2 text-[#52536e] ">
              Mermer ve Tezgahlar
            </h1>
            <p className="font-semibold w-[75%] mx-auto text-[#777777]">
              1943’ten bugüne doğal taş üretiminde Türkiye’nin öncülerinden olan
              Efesus Stone’da mutfak, banyo ve diğer yaşam alanlarınız için
              mükemmel malzeme tercihinizi yapın. Binlerce taş ve 199’dan fazla
              renkten oluşan kataloglarımızı inceleyin.
            </p>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <div className="w-full h-[270px] overflow-hidden">
              <Link to="/dogal-taslar">
                <img
                  src={mermer}
                  alt="Mermer"
                  className="w-full h-[270px] hover:scale-[1.25] transition duration-500 hover:cursor-pointer "
                />
              </Link>
            </div>
            <Link to="/dogal-taslar">
              <p className="hover:cursor-pointer font-bold">Mermer</p>
            </Link>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <div className="w-full h-[270px] overflow-hidden">
              <Link to="/dogal-taslar">
                <img
                  src={kuvars}
                  alt="Kuvars"
                  className="w-full h-[270px] hover:scale-[1.25] transition duration-500 hover:cursor-pointer "
                />
              </Link>
            </div>
            <Link to="/dogal-taslar">
              <p className="hover:cursor-pointer font-bold">Kuvars</p>
            </Link>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center overflow-hidden ">
            <Link to="/dogal-taslar">
              <img
                src={porselen}
                alt="Porselen"
                className="w-full h-[270px] hover:scale-[1.25] transition duration-500 hover:cursor-pointer "
              />
            </Link>
            <Link to="/dogal-taslar">
              <p className="hover:cursor-pointer font-bold">Porselen</p>
            </Link>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <div className="w-full h-[270px] overflow-hidden">
              <Link to="/dogal-taslar">
                <img
                  src={bejMermer}
                  alt="Bej Mermer"
                  className="w-full h-[270px] hover:scale-[1.25] transition duration-500 hover:cursor-pointer "
                />
              </Link>
            </div>
            <Link to="/dogal-taslar">
              <p className="hover:cursor-pointer font-bold">Bej Mermer</p>
            </Link>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <div className="w-full h-[270px] overflow-hidden">
              <Link to="/dogal-taslar">
                <img
                  src={traverten}
                  alt="Traverten"
                  className="w-full h-[270px] hover:scale-[1.25] transition duration-500 hover:cursor-pointer "
                />
              </Link>
            </div>
            <Link to="dogal-taslar">
              <p className="hover:cursor-pointer font-bold">Traverten</p>
            </Link>
          </div>
          <div className="w-[75%] text-center md:w-[25%] flex flex-col justify-center items-center ">
            <div className="w-full h-[270px] overflow-hidden">
              <Link to="/dogal-taslar">
                <img
                  src={oniks}
                  alt="Oniks"
                  className="w-full h-[270px] hover:scale-[1.25] transition duration-500 hover:cursor-pointer "
                />
              </Link>
            </div>
            <Link to="/dogal-taslar">
              <p className="hover:cursor-pointer font-bold">Oniks</p>
            </Link>
          </div>
          <div className=" w-[75%] text-center">
            <Link to="/dogal-taslar">
              <button className="rounded-md  bg-yellow-300 p-2 font-semibold my-4 hover:shadow-md hover:shadow-slate-500 transition ease-in-out ">
                Daha Fazla
              </button>
            </Link>
          </div>
        </section>

        {/* 6 blog yazı kısmı */}
        <section className="flex flex-col w-[85%] px-8 py-6 bg-slate-50">
          <h2 className="text-center text-2xl font-bold text-[#52536e] mb-8">
            Mermer ve Doğal Taşların Zarif Dünyasına Hoş Geldiniz!
          </h2>
          <div className="grid grid-cols-1 text-center lg:text-left lg:grid-cols-3 gap-8 mb-2">
            <div className="topLeft">
              <h3 className="font-bold text-[#555555] text-xl mb-2">
                Eşsiz Estetik ve Doğal Güzellik Bir Arada
              </h3>
              <p className="text-[#777777]">
                Mermerin zamanı durdurma yeteneğiyle tanışın. Sıradanlığın
                ötesindeki estetik anlayışını yaşam alanlarınıza taşıyacak bir
                dünya sunuyoruz. Her bir mermer kesiti, mekanınıza sonsuz şıklık
                ve zarafet katmak üzere özenle seçildi.
              </p>
            </div>
            <div className="topMid">
              <h3 className="font-bold text-[#555555] text-xl mb-2">
                Yaratıcılığınızı Mermer ile İfade Edin
              </h3>
              <p className="text-[#777777]">
                Mutfak tezgahlarından banyo zeminlerine, oturma odası
                masalarından merdiven basamaklarına kadar, her bir mekânın
                karakterini mermerle yükseltin. Her mermer türü, farklılığı
                yansıtan damarları ve renk tonlarıyla mekânınıza özgünlük katar.
              </p>
            </div>
            <div className="topRight">
              <h3 className="font-bold text-[#555555] text-xl mb-2">
                Kalite ve Dayanıklılık
              </h3>
              <p className="text-[#777777]">
                Her bir mermer plakası, doğanın asırlar süren ustalığının bir
                yansımasıdır. İster iç mekânda ister dış mekânda kullanın,
                mermerler üstün dayanıklılığıyla uzun yıllar boyunca güzelliğini
                muhafaza eder.
              </p>
            </div>
            <div className="bottomLeft">
              <h3 className="font-bold text-[#555555] text-xl mb-2">
                Beyazın Saflığından Siyahın Asaletine
              </h3>
              <p className="text-[#777777]">
                Beyazın saf dokunuşundan siyahın şık asaletine, gri, bej,
                kahverengi, sarı, vişne, gold vb. geniş renk yelpazemizle
                tarzınıza uygun granit veya mermer doğal taşı bulmanızı
                sağlıyoruz. Modern minimalizmden klasik zarafete kadar, her
                tarza ve zevke hitap eden bir seçenek bulabilirsiniz.
              </p>
            </div>
            <div className="bottomMid">
              <h3 className="font-bold text-[#555555] text-xl mb-2">
                Doğal Taş ve Mermer Uzmanlığı
              </h3>
              <p className="text-[#777777]">
                Efesus Stone olarak 1943 yılından beri mermerin dilini anlayan
                bir ekibiz. Her projenin özel ihtiyaçlarına uygun mermer seçimi
                ve tasarımı konusundaki uzmanlığımızla size rehberlik ediyoruz.
                Projelerinizi en yüksek standartlarda gerçeğe dönüştürmek için
                buradayız.
              </p>
            </div>
            <div className="bottomRight">
              <h3 className="font-bold text-[#555555] text-xl mb-2">
                Doğal Taşlar için Bizimle İletişime Geçin
              </h3>
              <p className="text-[#777777]">
                Sizin için özel olarak seçtiğimiz mermer koleksiyonlarımızı
                görmek ve detaylı bilgi almak için hemen iletişime geçin. İç
                mekânlarınıza doğal bir dokunuş katın, yaşam alanlarınızı
                mermerin zarif dünyasıyla buluşturun!
              </p>
            </div>
          </div>
        </section>

        {/* İlham veren Projeler */}
        <section className="bg-[#f1f1f1] p-2 w-full">
          <h2 className="text-2xl text-center font-bold text-[#52536e] p-2 ">
            İlham Veren Projeler
          </h2>
          {/* 4800 2700 */}
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <img src={mozzart} alt="marble" className="" />
              <p className="absolute left-[50%] bottom-[5px] translate-x-[-50%] translate-y-[-50%] font-bold text-2xl text-center backdrop-blur-sm">
                Mozart Benghazi LİBYA
              </p>
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={bookmatch} alt="marble" className="" />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={sagalassos} alt="marble" className="" />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={ciragan} alt="marble" className="" />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={vivakapadokya} alt="marble" className="" />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={havuzkenari} alt="marble" className="" />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={perapalace} alt="marble" className="" />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={ciragan} alt="marble" className="" />
            </SwiperSlide>
          </Swiper>
          {/* <img src={mozzart} alt="" /> */}
        </section>

        {/* Plakalar ve Dekoratif Ürünler */}
        <section className="p-2 flex flex-col items-center gap-4 ">
          <div>
            <h2 className="text-2xl text-center font-bold p-2 text-[#555555] ">
              Plakalar ve Dekoratif Ürünler
            </h2>
            <p className="text-[#777777]">
              Efesus Stone’da, mermer ve tüm doğal taş çeşitleri için plakalar
              ile birlikte masalardan, şöminelere, sütun ve kolonlardan
              mozaiklere kadar dekoratif ürünlere, CNC ve Waterjet kesim ürün
              kataloglarını da inceleyebilirsiniz.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bigPics flex flex-col gap-2">
              <Link to="/" className="overflow-hidden">
                <img
                  src={plakalar}
                  alt=""
                  className="hover:scale-[1.15] transition ease-in-out duration-500"
                />
              </Link>
              <Link to="/" className="overflow-hidden">
                <img
                  src={dekoratif}
                  alt=""
                  className="hover:scale-[1.15] transition ease-in-out duration-500"
                />
              </Link>
            </div>
            <div className="smallPics flex flex-col gap-2 justify-between">
              <div className="cnc overflow-hidden">
                <Link to="/" className="overflow-hidden">
                  <img
                    src={cnc}
                    alt=""
                    className="hover:scale-[1.15] transition ease-in-out duration-500"
                  />
                </Link>
              </div>
              <div className="mozaikMagaza flex w-full justify-between">
                <Link to="/" className="overflow-hidden">
                  <img
                    src={mozaik}
                    alt=""
                    className="hover:scale-[1.15] transition ease-in-out duration-500"
                  />
                </Link>
                <Link to="/" className="overflow-hidden">
                  <img
                    src={magazalar}
                    alt=""
                    className="hover:scale-[1.15] transition ease-in-out duration-500"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Markalar */}
        <section className="p-2 bg-[#f1f1f1] w-full flex flex-col items-center">
          <h2 className="text-2xl text-center font-bold text-[#555555] p-2">
            Kuvars ve Porselen Tezgah Markalarımız
          </h2>
          <p className="text-[#777777]">
            Bir dünya markası hedefiyle 1943 yılında kurulan EFESUS STONE, bugün
            199’dan fazla renkle tarzını yansıtan, mermer, kuvars ve porselen
            tezgahlarına kadar sektörünün yüksek değerli markalarından biridir.
          </p>
          <img src={marka} alt="" />
        </section>

        {/* Mermer Ocakları */}
        <section className="flex flex-col text-center lg:text-left lg:flex-row gap-8 items-center justify-center p-4 bg-slate-50">
          <img src={ocaklar} alt="ocaklar" className="w-[50%]" />
          <div className="stoneMermerOcaklar">
            <h2 className="text-2xl text-center font-bold p-2 text-[#555555]">
              MarboLuxe Mermer Ocakları
            </h2>
            <p className="my-2 text-[#777777]">
              Doğal taş çeşitlerinde 8 ocağıyla birlikte araştırma ve geliştirme
              süreçlerinde mimari gelişmeleri tahmin ve takip etme, bunlara
              yanıt verme yeteneği, çevre ve sürdürülebilirliğin
              önceliklendirilmesi{" "}
              <span className="italic font-semibold text-lg"> Marboluxe</span>{" "}
              STONE marka değerini yükseltiyor.
            </p>
            <button className="bg-orange-500 text-[#f0efef] p-2 font-bold rounded-md hover:shadow-md transition hover:shadow-slate-500 ease-in-out">
              Ocakları İncele
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
