import React, { useContext, useEffect, useState } from "react";
import { tezgahlarKuvarsBelenco } from "../../../utils";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SideBar from "../../../components/SideBar";
import { MarboContext } from "../../../context/MarboContext";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const TezgahlarKuvarsBelenco = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const { t } = useTranslation();

  const { setDogalTaslar, setPlakalar } = useContext(MarboContext);

  const backHandler = () => {
    if (page === 0) {
      console.log("firstPage");
      return;
    }
    setPage(page - 1);
    return;
  };

  const nextHandler = () => {
    if (page === tezgahlarKuvarsBelenco.length - 1) {
      console.log("lastPage");
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    setPlakalar(false);
    setDogalTaslar(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="h-[120px] items-center flex-wrap flex flex-col justify-around md:items-start bg-[#f1f1f1] pl-24">
        <h2>{t("tezgahlar")}</h2>
        <div className="flex justify-center items-center flex-wrap gap-1">
          <Link to="/">Marboluxe</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <Link to="/tezgahlar">{t("tezgahlar")}</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <Link to="/tezgahlar/kuvars">{t("kuvars tezgah")}</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <p>{t("belenco")}</p>
        </div>
      </div>
      <div className="main-holder-plakalar flex justify-between w-[90%] mx-auto ">
        <div className="hidden sm:block flex-[1] ">
          <SideBar />
        </div>
        <div className="p-4 flex flex-col items-center flex-[4] mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4">
            {tezgahlarKuvarsBelenco[page].map((tas, index) => {
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
            <div className="flex flex-wrap gap-2">
              {tezgahlarKuvarsBelenco.map((item, index) => (
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
          <div className="w-full flex flex-col gap-4 mt-4 border-t pt-2">
            <h2 className="text-3xl font-bold text-[#52536e]">TASARIM</h2>
            <p className="text-[#777777]">
              Belenco, sunduğu zengin renk, desen ve doku seçenekleri ile özgün
              çözümler arayan mekan tasarımcılarının, sınırsız düşünmelerine
              öncülük eder. Zengin ürün gamına sahiptir. Gücünü, Türkiye’de
              sektöründe ilk ve tek olan Ar-Ge Merkezi’nden alır. Moda ve trend
              belirleyendir, dünyadaki tasarım trendleri ile uyumlu özgün yüzey
              tasarımları ile sektörün öncü ve takip edilen markasıdır.
              Türkiye’de alanında uluslararası ödüllere sahip tek markadır.
              Geliştirdiği yüzeyler dünyanın en prestijli tasarım
              yarışmalarından aldığı ödüller ile onaylanmıştır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              HİJYEN & BAKIM KOLAYLIĞI
            </h2>
            <p className="text-[#777777]">
              Belenco Kuvars Yüzeyler, gözeneksiz ve kompakt yapısı ile üzerinde
              bakteri veya mikroorganizma üremesine izin vermez. LGA Qualitest
              GMBH tarafından verilen hijyen raporuna sahiptir. LGA, Belenco’nun
              kolay temizlendiğini, temizlik sonrası mikrobiyolojik hijyen
              acısından tamamen güvenli olduğunu onaylar. Sahip olduğu NSF
              sertifikası ise Belenco’nun üzerinde yiyeceklerin güvenle
              hazırlanabileceğini tasdik eder. Belenco basit bir günlük temizlik
              ile uzun yıllar ilk günkü parlaklığını ve doğal canlılığını korur.
              Nemli, pamuklu bir bez ve az miktarda yumuşak nötr bir sıvı sabun
              (bulaşık sabunu v.b.) günlük temizlik için yeterlidir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              DOĞAL MALZEME, DOĞAL IŞILTI
            </h2>
            <p className="text-[#777777]">
              Belenco Kuvars Yüzeyler’in ışıl ışıl görünümü içerdiği kuvarsın
              doğal parlaklığından gelir. Parlaklık sağlayıcı hiçbir kimyasal
              içermezler. Yüzeylerine sonradan cila ya da parlatma yapılmasına
              gerek yoktur.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">DOĞAYA DOST</h2>
            <p className="text-[#777777]">
              Kuvars doğadaki en bol minerallerden biridir ve bu nedenle Belenco
              Kuvars Yüzeyler sürdürülebilir ve çevreye duyarlı ürünlerdir.
              Kirlenmeye ve lekelenmeye dayanıklı olması ile temizlik
              giderlerinde sağladığı tasarruf ve geri dönüşüm teknolojilerine
              yaptığı yatırımla Belenco Kuvars Yüzeyler doğaya dosttur.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              RENK TUTARLILIĞI
            </h2>
            <p className="text-[#777777]">
              Renk ve desen tutarlılığı vazgeçilmez standarttır. Aynı üretim
              tarihli plakalarda ton ve doku tutarlılığı esastır. Diğer tip
              tezgah malzemelerinde, özellikle büyük metrajlı projelerde yaşanan
              ürün devamlılığının sağlanamaması problemi Belenco’da yaşanmaz.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">SAĞLAMLIK</h2>
            <p className="text-[#777777]">
              Doğadaki en sert mineral taşlardan biri olan kuvars, Belenco’da
              tasarım ve teknolojiyle birleşerek aşınma, çizilme ve darbe
              dayanımı yüksek bir yüzey malzemesine dönüşür.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">LEKE DAYANIMI</h2>
            <p className="text-[#777777]">
              Belenco, sıvı emmeyen gözeneksiz yapısı ile kirlenmeye karşı
              dirençli bir yüzeydir. Bileşiminin %90’nından fazlasını oluşturan
              kuvars, kimyasalların yıpratıcı etkilerini sorun olmaktan çıkarır.
              Çay, kahve, sirke, limon, renkli baharatlar gibi diğer tezgah
              malzemelerinin kalıcı olarak lekelenmesine ya da yüzeylerinde
              aşınmaya sebep olabilecek maddeler Belenco’ya etki etmez.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">Garanti</h2>
            <p className="text-[#777777]">
              Belenco Kuvars Yüzeyler, özel bir bakım gerektirmez. Zamansız
              şıklığı ve dayanıklı yapısı Kullanım, Bakım ve Garanti Rehberi"nde
              belirtilen koşullar dahilinde 15 yıl garantilidir.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TezgahlarKuvarsBelenco;
