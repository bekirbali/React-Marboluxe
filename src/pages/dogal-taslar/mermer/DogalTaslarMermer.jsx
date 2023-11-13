import React, { useContext, useState } from "react";
import { dogalTaslarMermer } from "../../../utils";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SideBar from "../../../components/SideBar";
import { MarboContext } from "../../../context/MarboContext";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const DogalTaslarMermer = () => {
  const [page, setPage] = useState(0);

  const { setMermer } = useContext(MarboContext);

  const navigate = useNavigate();

  const backHandler = () => {
    if (page === 0) {
      console.log("firstPage");
      return;
    }
    setPage(page - 1);
    return;
  };

  const nextHandler = () => {
    if (page === dogalTaslarMermer.length - 1) {
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
  //     if (page === dogalTaslarMermer.length - 1) {
  //       console.log("lastPage");
  //       return;
  //     }
  //     setPage(page + 1);
  //   }
  // };

  useState(() => {
    setMermer(true);
  }, []);

  return (
    <>
      <Breadcrumbs />
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4]">
          <p className="xl:pl-8 xl:m-4 py-4 pb-8 text-[#777777]">
            <span className="font-bold">Mermer</span>, yüzyıllardır hem
            imparatorlar ve krallar hem de zanaatkârlar ve sanatçılar tarafından
            sevilen en güzel, en aranan taşlardan birisi olmuştur. Her bir{" "}
            <span className="font-bold">blok</span> veya{" "}
            <span className="font-bold">plaka</span> ister kar gibi saf beyaz
            olsun ister renkli damarlarla dolu olsun, benzersiz ve çarpıcı bir
            sanat eseridir.
            <br />
            Benzersiz <span className="font-bold">
              yeni mermer modelleri
            </span>{" "}
            ve uygun <span className="font-bold">mermer fiyatları</span> ile
            mekanlarınızı lüks ve estetik bir görünüme kavuşun!
            <br />
            Özel Efesus Stone koleksiyonlarını şimdi inceleyin!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarMermer[page].map((tas, index) => {
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
            {dogalTaslarMermer.map((item, index) => (
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
              Çarpıcı ve Benzersiz Bir Doğa Eseri: Mermer
            </h2>
            <p className="text-[#777777]">
              Bu taşa bir bakışta, neden nesiller boyu bu kadar çok sevildiğini
              anlamak kolaydır. Bu taştan imal edilen ürünler, mekânlara
              yadsınamaz bir lüks ve zenginlik dokunuşu katar. Güzel bir mermer
              tasarıma hayran kalmayan yoktur. Rönesans döneminin ünlü
              heykeltıraş, ressam, mimar ve şairi Michelangelo’nun, daha işine
              başlamadan her seferinde, blok içinde heykelin zaten tamamlanmış
              olduğunu belirttiği bilinmektedir. Bu İtalyan usta, eserinin zaten
              bu doğal taşta var olduğunu ve kendisinin sadece gereksiz
              malzemeyi kesmesi gerektiğini, taşın içine hapsolmuş formları,
              yalnızca kendisinin görebildiği formları, serbest bıraktığını
              daima vurgulamıştır. Mermerler, Antik Yunanistan çağından beri en
              nefes kesici anıtlar ve sanat eserleri için tercih edilen
              malzemelerden olmuştur. Sıra dışı, büyüleyici güzelliği ile
              mimarlara ve sanatçılara ilham vermiş, yüzyıllar sonra bile bu
              lüks taşa olan hayranlık, hiç azalmamıştır ve günümüzde çoğu
              mimar, iç mimar ve tasarımcı, bloklarda serbest bırakılmayı
              bekleyen yeni şekiller bulmaktadır. Kendine özgü özelliklere sahip
              sayısız <span className="font-bold">mermer çeşidi</span> vardır.
              Beyaz, doğal tonlu veya renkli damarlı olmasının yanı sıra, koyu
              siyahtan zümrüt yeşili veya cömert pembeye kadar değişebilen bir
              renk tabanına sahip başka{" "}
              <span className="font-bold">mermer türleri</span> de vardır. Renk
              ve damar yoğunluğu, her bir blok için benzersizdir, böylece her
              tasarım için benzersiz desenler oluşturur. Binlerce yıl boyunca
              gücü ve güzelliği nedeniyle çok büyük saygı görmüştür. Hem tasarım
              için estetik açıdan büyüleyicidir hem de son derece pratik ve
              sağlam bir yapıya sahiptir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Mermer Nasıl Oluşur?
            </h2>
            <p className="text-[#777777]">
              Peki, <span className="font-bold">mermer nasıl oluşur</span>,
              nasıl ortaya çıkmıştır ve neden uzun zamandır sevilmektedir?
              Mineral kalsitten (CaCO3) oluşan bu doğal taş genellikle mikalar,
              kil mineralleri, kuvars, demir oksitler, pirit ve grafit gibi
              diğer mineralleri içerir. Kalsitten yapılmış yumuşak kalker taşı
              formunda hayatına başlayan bu doğal taş, metamorfik bir kayadır.
              Bu kayanın görünümü, yoğun ısı ve basınç sayesinde zamanla
              kimyasal ve fiziksel biçimde dönüşür. Magma veya tektonik
              plakaların neden olduğu ısı ve basınç altında yeniden
              kristalleşmeye başlar. Isı ve basınç, kayanın dokusunu değiştirir
              ve kalsit kristallerinin büyümesini ve iç içe geçmesini engeller.
              <span className="font-bold">
                Kireçtaşının bir doğal taş formuna dönüşümü
              </span>
              , genellikle, yerkabuğunun geniş alanlarının bölgesel
              metamorfizmanın ısı ve basıncına maruz kaldığı yakınsak levha
              sınırlarında meydana gelir. Kireçtaşından dönüşümün ilk
              aşamalarında, kayadaki kalsit kristalleri oldukça küçüktür.
              Metamorfizma öncesi kireçtaşı içindeki kalsit, genellikle
              taşlaşmış fosil materyal ve biyolojik artıklar şeklindedir.
              Metamorfizma ilerledikçe, kristaller de büyür ve birbirine
              kenetlenen kalsit kristalleri kolayca tanınabilir hale gelir.
              Kireçtaşın orijinal fosil ve tortul yapılarını gizleyen yeniden
              kristalleşmedir. Yeniden kristalleşme,{" "}
              <span className="font-bold">
                kireçtaşı ve mermer arasındaki ayrım
              </span>{" "}
              belirleyicisidir. Düşük düzeyde metamorfizmaya maruz kalan
              mermerler, çok küçük kalsit kristallerine sahiptir. Yeniden
              kristalleşme sırasında mevcut olan mineraller, bazen tüm parçaları
              çok çeşitli renklerde renklendirebilir. Maviler, griler, pembeler
              ve kırmızılar en yaygın olanlarıdır ancak yeşil, mor ve sarı
              bilyeler de bulunabilir. Kil, mika, kuvars, demir oksitler en
              yaygın minerallerden bazılarıdır ve kırmızımsı, gri ve beyaz renk
              tonlarına veya damarlaşmaya neden olurlar. Hematit ve demir
              oksitler de içerisinde sıklıkla bulunur. Hematit ve demir oksitler
              kırmızı, pembe ve kahverengi tonlar oluşturabilirken limonit sarı
              ve derin, zengin bir yeşile de neden olur. Saflık, belirli bir taş
              örneğinde renk değişiminin olmamasını ifade eder. Renkli
              damarlanma birçok insan için çok istenen bir özellik olmasına
              rağmen, en saf olanlar neredeyse tamamen beyaz veya çok açık
              renklidir. Damarlanma, ya orijinal kireçtaşı içinde bulunan ya da
              kireçtaşı bu doğal taşa dönüşürken mevcut bulunan mineral
              birikintilerinden kaynaklanır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Kireçtaşı ile Mermer Nasıl Ayırt Edilir?
            </h2>
            <p className="text-[#777777]">
              <span className="font-bold">
                Kireçtaşı ile arasındaki temel fark
              </span>
              , kireçtaşının tipik olarak kalsiyum karbonat fosillerinden oluşan
              tortul bir kaya olmasıdır. Mermer ise metamorfik bir kayadır.
              Kireçtaşının oluşumu, deniz kabukları, kum ve çamur okyanus, deniz
              ve göllerin dibinde biriktiğinde ve zamanla katılaşarak kayalara
              dönüşmesiyle gerçekleşir. Mermer, tortul kireçtaşı ısıtıldığında
              ve <span className="font-bold">doğal kaya</span> oluşturma
              süreçleriyle sıkıştırıldığında, tanelerin yeniden kristalleşmesi
              ile oluşur. Bir kireçtaşına yakından bakıldığı takdirde,
              genellikle bir kalsit matrisi tarafından bir arada tutulan fosil
              parçalarını görebilmek mümkündür. Kireçtaşı, ayrıca daha
              gözeneklidir çünkü fosil parçaları arasında küçük açıklıklar
              bulunmaktadır. <span className="font-bold">Mermer</span> ise
              genellikle açık renklidir ve yapboz parçaları gibi birbirine
              kenetlenmiş kalsit kristallerinden oluşur. Ayrıca, kalsit olmayan
              minerallerin kapanımları olan renkli çizgiler içerebilir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Mermerin Fiziksel Özellikleri ve Kullanım Alanları
            </h2>
            <p className="text-[#777777]">
              Mermer dünyanın birçok bölgesinde bulunabilen, fiziksel
              özellikleri ile yapısı bakımından özellikle oymacılık için
              mükemmel yumuşaklıktadır ve renklendirmeden bağımsız, en benzersiz
              yönlerinden birisi de yarı saydam oluşudur. Hiçbiri tamamen şeffaf
              olmasa da genellikle heykellerde bu kadar yaygın şekilde
              kullanılmasının nedenlerinden biri, en az birkaç milimetresinin
              görülebilmesi olup yüzey olarak yarı saydam olması ona daha fazla
              derinlik katar. İnsan heykellerini daha opak malzemeden yapılmış
              heykellere göre bütün ve canlı hissettiren mermer, eskiden olduğu
              gibi bugün de hala inşaat sektöründe yaygın şekilde
              kullanılmaktadır. Bu doğal taştan imal ürünler, mütevazi evlerde
              bile bulunur. Yani bu taş, artık sadece imparatorlar ve krallar
              için değildir. Mermer tezgahlar, lavabolar hem güzelliği ve süit
              şıklığı hem de yüzeyinin daima serin ve pürüzsüz kalışından
              fazlasıyla tercih edilir.{" "}
              <span className="font-bold">Mermerin kullanım alanları</span>,
              saymakla bitmez. Elbette, Dünya'nın bu en kaliteli doğal taşı,
              yaşam alanlarının başka yerlerinde de kullanılabilir. Örneğin
              çarpıcı görünen yer zemini, yaşam alanlarının girişine, mutfak ve
              banyolara tezgah olarak ister sade ister oymalı bir şömine de
              oturma odalarına şıklık ve zarafet katabilir. Merdiven basamakları
              ve dış mekan duvar kaplamalarından, farklı aksesuar ürünlerine
              kadar da tercih edilen bu taş, kırma taş veya kesme taş haline de
              getirilir. Kırma taşın kullanım alanı, karayolları, demiryolu
              yatakları, bina temelleri ve diğer inşaat türlerinde agrega olarak
              kullanılmasıdır. Bu doğal taşın belirli ölçülerde parçalar halinde
              kesilmesiyle ise ölçü taşı üretilir. Binalarda, heykellerde,
              anıtlarda, kaldırımlarda ve diğer projelerde ölçü taşı kullanılır.
              Kısacası, geçmişte heykel, anıt ve yapı malzemesi olmak üzere
              kullanılan bu doğal taş hala aynı şekilde kullanılmaya devam
              etmektedir. Bu harika doğal taş, sadece iç ve dış mekanlara ayrı
              bir değer katmakla kalmaz. Aynı zamanda, bakımının kolay, sağlıklı
              ve uzun ömürlü oluşu da, en önemli özelliklerindendir.{" "}
              <span className="font-bold">Doğal taş sektöründe</span> akla ilk
              gelen isimlerden olan Efesus Sone, ihtiyaç duyulan alanlar için
              zengin bir ürün yelpazesine sahip olup yüksek kaliteli doğal
              taşlar üretimi konusunda alanında uzmanlaşmış bir firmadır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Asit Reaksiyonu ve Sertliği
            </h2>
            <p className="text-[#777777]">
              Kalsiyum karbonattan oluşan{" "}
              <span className="font-bold">mermerin özellikleri</span> arasında
              yer alanlardan bir tanesi de, birçok asitle temas halinde
              reaksiyona girerek asidi nötralize etmesidir. En etkili asit
              nötralizasyon malzemelerinden birisi olarak mermer, genellikle
              ezilir ve akarsularda, göllerde ve toprakta asit nötralizasyonu
              için kullanılır. Kimya endüstrisinde de asit nötralizasyonu için
              kullanılmaktadır. Antasit ilaçlar, asit reflüsü azaltmak için
              kullanılan CaCo₃ toz içerir. Kalsitten oluşan{" "}
              <span className="font-bold">mermerin sertlik derecesi</span>, Mohs
              sertlik ölçeğinde üç ila beş arasında olup işlenmesi kolaydır ve
              bu da onu, heykel ve süs eşyaları üretmek için kullanışlı hale
              getirir. Düşük sertliği ve çözünürlüğü, hayvan yemlerinde kalsiyum
              katkısı olarak kullanılmasına izin verir. Özellikle yumurta
              üretimi için tavuk ve süt inekleri için kalsiyum katkı maddeleri
              önemlidir. Banyo ve mutfak armatürlerinin fırçalanmasında da düşük
              sertlikte aşındırıcıdır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Mermer Çeşitleri
            </h2>
            <p className="text-[#777777]">
              Yüzyıllar boyunca dünyanın her yerindeki yapılarda, işletmelerde,
              müzelerde ve evlerde lüks ve sofistike bir malzeme olarak
              kullanılan bu taş, elde edilmek istenen estetik tonlara hitap eden
              sayısız renk ve desen seçeneği ile benzersizdir. Bulundukları
              bölgenin yapısına göre damar, renk ve sertlik derecesinde
              farklılıklar gösteren bu taş, genellikle renklerine göre
              çeşitlendirilir. Türkiye, doğal taş maden ocağı bakımından en
              kaliteli ocaklara sahip ülkeler arasındadır. Ülkemizde konut,
              eğlence ve ticari sektörler için özel müşterilerden önde gelen
              tasarımcılara ve mimarlara kadar herkes tarafından giderek artan
              bir popülerlik kazanmakta olup en kalitelileri Afyon, Balıkesir,
              Denizli, Bilecik, Burdur, Isparta, Muğla, Amasya, Antalya,
              Diyarbakır ve Marmara ocaklarından çıkartılmaktadır. Dünyadaki en
              çok tercih edilen bazı farklı{" "}
              <span className="font-bold">mermer renkleri</span> ise şöyle
              sıralanabilir:
              <ul>
                <li>* Beyaz</li>
                <li>* Siyah</li>
                <li>* Gri</li>
                <li>* Kahverengi</li>
                <li>* Bej</li>
                <li>* Yeşil</li>
                <li>* Sarı</li>
                <li>* Kırmızı</li>
                <li>* Kalküta</li>
                <li>* Krem</li>
                <li>* Mavi</li>
              </ul>
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Mermer Fiyatları 2023
            </h2>
            <p className="text-[#777777]">
              <span className="font-bold">Mermerler</span>, pahalı bir üne sahip
              olmakla birlikte birçok faktöre bağlı olarak büyük ölçüde
              değişmektedir. Sınırlı doğası, dayanıklılığı ve zamansız güzelliği
              onu pahalı kılar. Herhangi bir alana yaydığı lüks deneyim
              nedeniyle tercih edilen bu doğal ürünün çıkartılmasından,
              gösterişli ürünlere dönüştürme işlemine kadar yoğun bir enerji
              gerekir. Fiyatın değişkenlik göstermesindeki en önemli etken ise
              estetik güzelliğidir. Mekanları süsleyen ve sıradan alanları
              muhteşem hale getiren bu benzersiz doğal taşa, ezberden net bir
              fiyat verebilmek mümkün değildir. Rengin, türün, damar yapısının
              ve işçiliğin etkili olduğu fiyatlar için Efesus Stone ile
              iletişime geçilerek net ve sağlıklı bir fiyat bilgisi alınabilir.
              Belirli türlere olan talep, örneğin daha az damarlı, daha yüksek
              kalite ve belirli renkler maliyeti artırır. Yaygın bulunan
              çeşitlerin çoğundan daha nadir bulunan türler daha pahalıya mal
              olur. Modern ev sahipleri, mimari, dekorasyon ve yaşam tarzı
              trendlerini yakından takip etmek ister, bu da fiyatı etkiler.
              Örneğin, <span className="font-bold">gri, siyah, beyaz</span> ve{" "}
              <span className="font-bold">bej</span> türleri revaçta olup
              ileriye dönük müşteriler tarafından talep edilmektedir. Bu da
              pazardaki maliyetini artırmaktadır. Bu taş, çok yönlü olduğu için
              uygulama da aynı zamanda maliyeti etkileyen bir faktördür.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogalTaslarMermer;
