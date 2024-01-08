import React, { useContext, useEffect, useState } from "react";
import { tezgahlarKuvars } from "../../../utils";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBar";
import { MarboContext } from "../../../context/MarboContext";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const TezgahlarKuvars = () => {
  const [page, setPage] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const { setDogalTaslar, setPlakalar, setKuvarsTezgah, setPorselenTezgah } =
    useContext(MarboContext);

  const pageHandler = (e) => {
    setPage(e.target.innerText - 1);
    window.scrollTo(0, 0);
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
    if (page === tezgahlarKuvars.length - 1) {
      console.log("lastPage");
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    setPlakalar(false);
    setDogalTaslar(false);
    setKuvarsTezgah(true);
    setPorselenTezgah(false);
    setActivePage(page + 1);
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
          <p>{t("kuvars tezgah")}</p>
        </div>
      </div>
      <div className="main-holder-plakalar flex justify-between w-[90%] mx-auto ">
        <div className="hidden sm:block flex-[1] ">
          <SideBar />
        </div>
        <div className="p-4 flex flex-col items-center flex-[4]">
          <p className="xl:pl-8 xl:m-4 py-4 pb-8 text-[#777777]">
            Kuvars tezgah modelleri adından da anlaşılacağı üzere kuvars taşı
            ile üretilmektedir. Kuvars ve Porselen Tezgahlar hakkında bilgi
            sahibi olmak istiyorsanız hemen bizimle iletişime geçin.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4">
            {tezgahlarKuvars[page].map((tas, index) => {
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
              {tezgahlarKuvars.map((item, index) => (
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
              Kuvars Tezgah Nedir?
            </h2>
            <p className="text-[#777777]">
              Hayalinizdeki mutfağa ulaşmanız için tezgah seçiminiz çok
              önemlidir. Mutfak tezgahı yapımında granit, mermer gibi
              kullanılmakta olan bir diğer materyal ise kuvars. Kuvars
              tezgahlar, adından da anlaşılacağı üzere kuvars malzeme ile
              üretilmektedir. Bu taş, mineral taşlar arasında en sert olan
              taşlardan biridir. Sağladığı sağlamlık sayesinde uzun ömürlü ve
              sağlam bir tezgah malzemesidir. Oldukça sert olması dolayısıyla
              olumsuz koşullardan etkilenmezler ve hasar görmeleri son derece
              zordur. Farklı renkler ve desenlerde bulunan kuvars taşı, mutfak
              tezgahı yapımı için uygun bir seçenek olarak karşımıza
              çıkmaktadır. Peki kuvars tezgahların özellikleri nedir, neden
              tercih yaparken göz atmanız gerekiyor? Sıklıkla tercih edilen
              kuvars tezgah modelleri hakkında merak edilenlere göz atalım…
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Kuvars Tezgahların Özellikleri
            </h2>
            <p className="text-[#777777]">
              Kuvars tezgahların üretilmekte oldukları kuvars minerali, en sert
              mineral taşlar arasında yer almakta. Bu nedenle metal gibi
              malzemeler kuvars tezgahları kolay kolay çizemez. Bu sayede, daha
              uzun ömürlü ve aşınmaya daha dayanıklı bir tezgah opsiyonu sağlar
              ve bakımı kolaydır. Sağlamlık konusunda önemli yararlar sağlayan
              kuvars, aynı zamanda lekelenmeye karşı ve temizlik konusunda da
              kullanımı kolaylaştırmaktadır. Kuvars tezgah seçenekleri, evde
              bulunan temizlik malzemeleri ile kolayca temizlenebilmektedir.
              Sunduğu gözeneksiz yapısı sayesinde sıvıların emilimini
              engellemekte olması temizlik kolaylığı sunmasını sağlamaktadır. Bu
              yapısı sayesinde aynı zamanda küf gibi yapıların tezgahınızda
              oluşması ihtimalini en aza indirmektedirler. Görünüm olarak ise
              parlak ve farklı renklerde karşımıza çıkar. Şık bir görünüm
              katmaları sayesinde evinizde kullanım kolaylığına ek estetik
              olarak da tatmin eden bir görüntü sunmaktadır. Birçok avantajı
              sayesinde bu taş, tezgah seçimi yapacak olanlar için kesinlikle
              göz atılması gereken bir malzeme olarak ön plana çıkıyor.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Kuvars Tezgah Modelleri
            </h2>
            <p className="text-[#777777]">
              Belenco, Çimstone, Calisco ve Ceasarstone gibi markaların farklı
              kuvars mutfak tezgahları renk ve desen olarak farklılıklar
              göstermektedir. Kullanılan kuvars, doğada farklı renklerde
              bulunmaktadır. Ametist, sitrin, sütlü kuvars gibi renkleri olan bu
              madde ile bir sürü farklı model tasarlanmaktadır. Kolay
              işlenebilmesi sayesinde farklı desen ve görünümdeki modelleri elde
              etmek mümkündür. Doğal taş görünümü, modern renkler gibi farklı
              tasarımlara uygun modeller elde ederek şık bir görünüm yaratma
              imkanı sağlamakta. Bu sayede istediğiniz tezgah tasarımına
              ulaşmanızı daha mümkün kılıyor. Kuvarstan yapılan tezgahlardan
              istediğinizi seçmek sizin zevk ve beğeninize kalmış…
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Kuvars Mutfak Tezgahı Renkleri Nelerdir?
            </h2>
            <p className="text-[#777777]">
              Kuvars tezgahlar genellikle geniş bir renk yelpazesi ile
              müşterilere birçok farklı model imkanı sunmaktadır. Minimalist
              görünüme sahip beyaz ve nötr tonlarda modeller ile sade bir mutfak
              ortamı yaratın. Veya, dilerseniz modern renkleri tercih ederek
              daha canlı bir mutfağa sahip olun. Dilerseniz, farklı desen ve
              renk tonları ile kendinize bir tasarım ile hayalinizdeki mutfağı
              gerçeğe dönüştürebilirsiniz. Zevkinize göre tasarımları sayesinde
              kuvars size bolca seçenek sunuyor. Farklı renk seçenekleri ve
              dokulara sahip kuvars tezgahlara göz atarak seçiminizi
              yapabilirsiniz. Eviniz ve sizin için en ideal seçimi yapmak için
              kuvars mutfak tezgahı ve kuvars banyo tezgahı seçeneklerine göz
              atın!
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Kuvars Tezgahlar ve Sunduğu Avantajlar
            </h2>
            <p className="text-[#777777]">
              Kuvars tezgahların sunduğu en önemli avantajlardan birisi
              dayanıklılıktır. Sert bir yapıya sahip olan kuvars yüzeyler
              çizilmeye karşı büyük dayanıklılık göstermektedir. Bu sayede
              mutfak işleri esnasında metal gereçler tarafından çizilmesi
              zordur. Sağladığı bir diğer önemli avantaj ise hijyen
              konusundadır. Gözenekli olmayan yapısı sayesinde kirleri yüzeyde
              tutmaktadır ve bu sayede temizlenmesi doğal taşlara göre daha
              kolaydır. Aynı zamanda leke tutmaz bir yapıya sahiplerdir. Bunlara
              ek olarak ısıya da dayanıklılardır. Bu sayede yanlışlıkla tencere
              sıcak koymak gibi durumlarda hasar oluşmasını engellemektedirler.
              Sundukları farklı tasarım olanakları ve işleme kolaylıkları
              sayesinde de istediğiniz modeli elde etme ihtimaliniz vardır.
              Sundukları şık görüntü de tüm bunlara ek olarak sunduğu bir
              avantajdır. Dilediğiniz tasarıma sahip, çekici bir görünüme sahip
              bir tezgah için kullanım kolaylıklarından vazgeçmenize gerek yok.
              Kuvars tezgahlar size bütün bunları tek bir tezgahta sunuyor.
              Mutfak tezgahınız için seçimi yaparken kuvars tezgah modelleri iyi
              bir seçenek olacaktır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Kuvars Tezgah Fiyatları
            </h2>
            <p className="text-[#777777]">
              Kuvars tezgahlar sundukları avantajlar sayesinde mutfak tezgahı
              seçimi yaparken iyi bir seçenek olarak karşımıza çıkmaktadır.
              Popüler bir seçim olan kuvars tezgahların fiyatlarının da bu
              nedenle sıklıkla merak konusudur. Kuvars tezgahların fiyatları
              kullanılacak olan malzemenin türü ve boyutuna göre değişiklik
              göstermektedir. Mutfak tezgahınızın boyutu ve istediğiniz
              özellikler fiyatta değişikliğe sebep olacaktır. En güncel fiyatlar
              hakkında bilgi sahibi olmak istiyorsanız hemen bizimle iletişime
              geçin…
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              KuvarsTaşı Çeşitleri
            </h2>
            <p className="text-[#777777]">
              Kristalli yapıda olanlarının yanı sıra kristal yapıları gözle
              görünmeyen şekilde olanları da vardır. Bunlar donuk veya yarı
              saydam özellikler gösterirler. Kristal olanları ise camsı özellik
              gösterir. Kolay kırılan bir yapısı vardır. Genel olarak kaya
              kristali veya berrak kuvars olarak adlandırılan saf kuvars,
              renksiz ve şeffaf veya yarı saydamdır. Yaygın kuvars renkleri ve
              çeşitleri;
              <ul>
                <li>* Beyaz Kuvars Taşı</li>
                <li>* Mavi Kuvars Taşı</li>
                <li>* Pembe Kuvars Taşı</li>
                <li>* Yeşil Kuvars Taşı</li>
                <li>* Dumanlı Kuvars Taşı</li>
                <li>* Sütlü Kuvars Taşı</li>
                <li>* Sitrin</li>
                <li>* Ametist</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TezgahlarKuvars;
