import React, { useContext, useEffect, useState } from "react";
import { tezgahlarPorselen } from "../../../utils";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SideBar from "../../../components/SideBar";
import { MarboContext } from "../../../context/MarboContext";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const TezgahlarPorselen = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const { setDogalTaslar, setPlakalar, setKuvarsTezgah, setPorselenTezgah } =
    useContext(MarboContext);

  const backHandler = () => {
    if (page === 0) {
      console.log("firstPage");
      return;
    }
    setPage(page - 1);
    return;
  };

  const nextHandler = () => {
    if (page === tezgahlarPorselen.length - 1) {
      console.log("lastPage");
      return;
    }
    setPage(page + 1);
  };

  // const pageHandler = (e) => {
  //   if (e.target.value === "prev") {
  //     if (page === 0) {
  //       console.log("firstPage");
  //       return;
  //     }
  //     setPage(page - 1);
  //     return;
  //   }
  //   if (e.target.value === "next") {
  //     if (page === tezgahlarPorselen.length - 1) {
  //       console.log("lastPage");
  //       return;
  //     }
  //     setPage(page + 1);
  //   }
  // };

  useEffect(() => {
    setPlakalar(false);
    setDogalTaslar(false);
    setKuvarsTezgah(false);
    setPorselenTezgah(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="h-[120px] items-center flex-wrap flex flex-col justify-around md:items-start bg-[#f1f1f1] pl-24">
        <h2>Tezgahlar</h2>
        <div className="flex justify-center items-center flex-wrap gap-1">
          <Link to="/">Marboluxe</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <Link to="/tezgahlar">Tezgahlar</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <p>Porselen Tezgahlar</p>
        </div>
      </div>
      <div className="main-holder-plakalar flex justify-between w-[90%] mx-auto ">
        <div className="flex-[1] ">
          <SideBar />
        </div>
        <div className="p-4 flex flex-col items-center flex-[4]">
          <p className="xl:pl-8 xl:m-4 py-4 pb-8 text-[#777777]">
            Porselen tezgah modelleri çeşitlilik gösteriyor mu? Porselen mutfak
            tezgahı fiyatları ortalama ne kadar, önerilen mutfak ve banyo
            porselen tezgah markaları…
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4">
            {tezgahlarPorselen[page].map((tas, index) => {
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
            {tezgahlarPorselen.map((item, index) => (
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
            <h2 className="text-3xl font-bold text-[#52536e]">
              Porselen Tezgah Nedir? 2023 Tezgah Modelleri
            </h2>
            <p className="text-[#777777]">
              Porselen tezgahlar, günümüzde oldukça trend olan bir tezgah
              kaplama çeşididir. Porselen maddesi, yüksek sıcaklıkta pişirilen
              kil hammaddesi ile içinde yer alan minerallerin birleşmesi
              sonucunda oldukça dayanıklı bir hale gelmekte ve şık bir görünüme
              kavuşmaktadır. Ayrıca porselen malzeme, hassas bir üretim
              sürecinden geçmekte ve mutfak tezgahınızın kaplaması için hazır
              hale gelmektedir. Porselen tezgahların bizler için sağladığı pek
              çok avantaj mevcuttur. Bu nedenle, özellikle yakın dönemde
              porselen mutfak tezgahı oldukça popüler bir hal almıştır. Peki,
              porselen tezgah modelleri çeşitlilik gösteriyor mu? Porselen
              tezgahların fiyatı ortalama ne kadar? En çok önerilen porselen
              mutfak ve banyo tezgah markaları neler? İşte ihtiyacınız olan tüm
              detaylar…
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Porselen Tezgahların Özellikleri
            </h2>
            <p className="text-[#777777]">
              Porselen tezgahlar, mutfağınız için uzun yıllar kullanacağınız,
              oldukça dayanıklı bir seçenek olarak karşımıza çıkmaktadır.
              Lekelere, darbeye ve çizilmeye karşı dirençli bir yapıya sahiptir.
              Özellikle mutfaklar için tercih edilen bu porselen tezgahları,
              çeşitli mutfak kazalarına karşı dayanıklı bir şekilde
              üretilmektedir. Bununla birlikte, son derece hijyenik bir
              seçenektir. Yüzey kaplaması sayesinde porselen formdaki tezgahlar,
              bakteri oluşumunun önüne geçer ve leke oluşumuna karşı çıkar.
              Böylece, yıllarca şık bir şekilde mutfağınızda göreceğiniz bir
              tezgah çeşidi olarak dikkat çekmektedir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Porselen Banyo ve Mutfak Tezgahının Avantajları
            </h2>
            <p className="text-[#777777]">
              Porselen tezgahlar mutfakta pek çok avantaja sahiptir. Örneğin,
              porselen dayanıklıdır ve temizliği son derece kolaydır. Malzeme
              kalitesi sayesinde lekeleri tutmak yerine iterek kendinden
              uzaklaştırır. Böylece silerek temizlik sonucunda tezgahınızı ilk
              günkü haliyle korumanız mümkün hale gelmektedir. Bunun yanı sıra,
              porselen tezgahlar oldukça estetik seçeneklerdir. Renk, desenleri
              ve dokuları ile porselen tezgahlar, hemen hemen tüm mutfak
              tiplerine yakışan bir görünüme sahiptir. Sıcağa dayanıklı yapısı,
              çizilmeye ve lekeleri tutmaya karşı direnci, bakteri oluşumunu
              engelleyici özelliği ve göze hitap eden görünümü ile porselen
              tezgahlar, mutfağınız için kurtarıcı seçeneklerdir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Porselen Tezgah Modelleri
            </h2>
            <p className="text-[#777777]">
              Porselen tezgahlarının seçim aşamasında işin içine pek çok faktör
              dahil olmaktadır. En çok dikkat etmemiz gereken detay estetik ve
              tasarım gibi görünse de aslında satın alacağınız tezgahı uzun bir
              süre kullanmak istiyorsanız arka planda kalan özelliklere
              odaklanmanız gerekir. Örneğin, tezgahın hijyen bakımından
              kullanışlı olması öne çıkan özelliklerden bir tanesidir. Bununla
              birlikte, tezgahın sıcaklık toleransının daha yüksek olması,
              pişirme işlemlerinde tencereden gelecek olan sıcaklığı emebilmesi,
              oldukça önemli bir noktadır. Ayrıca, kurulum ve kesim esnasında
              size yardımcı olacak ekibin de profesyonel olması, bu süreçte
              yaşayabileceğiniz olası sıkıntıların önüne geçecektir. Mutfak ve
              banyo tezgah seçimi aşamasında garanti olanaklarını incelemeniz,
              Porselen tezgah firmaları tarafından sunulan satış sonrası
              hizmetleri değerlendirmeniz de karar esnasında fikrinizi
              etkileyebilir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Porselen Tezgahın Bakım ve Temizliği
            </h2>
            <p className="text-[#777777]">
              Tezgahınızı temiz tutmak ve dikkatli kullanmak, elbette kullanım
              ömrünü arttıracaktır. Bu noktada dikkat etmeniz gereken bazı
              öneriler mevcut. İlk olarak, tezgahınızın günlük temizliğine özen
              göstermeniz gerekmektedir. Tezgahınızı her kullanımdan sonra nemli
              bez ile silmeniz tavsiye edilir. Bu iş için bir temizlik süngeri
              de tercih edebilirsiniz. Bununla birlikte, leke oluşumunu önleme
              amacıyla tezgaha dökülen sıvıları uzun süre bekletmemek önem arz
              eder. Her ne kadar leke tutmayan bir yüzeye sahip olsa da, bu
              sızdırmaz yüzeyin zaman içerisinde aşınmasını önlemek adına bazı
              adımları atmanın bir sakıncası olmayacaktır. Seçeceğiniz temizlik
              ürünlerinin de pH dengesi bakımından dengeli olması, tezgahınızın
              daha uzun ömürlü olmasını sağlayacaktır. Ayrıca, sert fırçaların
              aşındırıcı etkisinden kaçınmak adına temizlik için yumuşak
              fırçaları tercih etmeniz gerekir. Her ne kadar porselen tezgahlar
              dayanıklı da olsa, kesici ve sert metal nesneler ile sıcak
              tencereleri yüzeyden uzak tutmak mantıklı bir seçenek olacaktır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Porselen Tezgah Fiyatları
            </h2>
            <p className="text-[#777777]">
              Tezgah fiyatları, tezgah özelliklerine göre değişkenlik
              göstermektedir. Örneğin, seçtiğiniz tezgahın tasarımı, markası,
              ana madde kalitesi bu etkenlerdendir. Porselen tezgahınızı
              seçerken, tezgahın mutfak tasarımınıza uygun olması da büyük önem
              arz etmektedir. Rengi, desen ve doku seçenekleri arasında doğru
              seçimi yapmak, kişisel tercihlerinize bağlıdır. Bu noktada, satış
              elemanından destek isteyebilir ve sizin için en doğru seçenek
              üzerine karar verebilirsiniz.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Porselen Tezgah Markaları
            </h2>
            <p className="text-[#777777]">
              <ul>
                <li>
                  <span className="font-bold text-[#555777]"> Sintered</span>{" "}
                  Stone Porselen Mutfak ve Banyo Tezgahları
                </li>
                <li>
                  <span className="font-bold text-[#555777]"> Levantec</span>{" "}
                  Porselen Banyo ve Mutfak Tezgahları
                </li>
                <li>
                  <span className="font-bold text-[#555777]"> Estestone</span>{" "}
                  Porselen Mutfak ve Banyo Tezgahı
                </li>
                <li>
                  <span className="font-bold text-[#555777]"> Lamar</span>{" "}
                  Porselen Mutfak Tezgahı
                </li>
              </ul>
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Porselen Nerelerde Kullanılır?
            </h2>
            <p className="text-[#777777]">
              Porselen birçok mutfak ve ev eşyalarının üretilmesinde, dekoratif
              objelerde, elektrik yalıtımı gereken durumlarda, bazı laboratuvar
              ekipmanlarında, diş protezlerinde ve havuz kaplama malzemelerinde
              kullanılır. Örneğin havuz karolarında porselen kullanması havuz
              bakımı ve temizliği açısından çeşitli faydalar sağlamaktadır.
              Yüksek basınçla sıkıştırılarak ve yüksek sıcaklıkta pişirilerek
              üretilen porselen karolar uzun yıllar boyu sağlam kalacak şekilde
              havuzlarda kullanılmaktadır. Dayanıklılık özelliklerinin yanında
              pürüzsüz yapıları nedeniyle suyu fazla emmezler ve fazla leke
              tutmazlar. Bu özellikleri sebebiyle porselen karolar kullanıcılara
              temizlik ve uzun bir kullanım ömrü sağlamaktadır. Türkiye'de
              porselen yapımının geçmişi eski olmakla birlikte bir sanayi dalı
              olarak ancak son yıllarda gelişme gösterdi. Bu içeriğimizde sizler
              için porselen tezgahlar hakkında genel bilgilere yer verdik.
              Porselen tezgah fiyatları için ürün çeşitlerimize göz atabilir,
              mermer, granit, kuvar tezgah seçeneklerimize bakabilir ve sizin
              için en doğru seçeneğe karar verebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TezgahlarPorselen;
