import { dogalTaslarOniks } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const DogalTaslarOniks = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[120px] items-center flex-wrap flex flex-col justify-around md:items-start bg-[#f1f1f1] pl-24">
        <h2>Doğal Taşlar</h2>
        <div className="flex justify-center items-center flex-wrap gap-1">
          <Link to="/">Marboluxe</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <Link to="/dogal-taslar">Doğal Taşlar</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <p>Oniks</p>
        </div>
      </div>
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4]">
          <p className="xl:pl-8 xl:m-4 py-4 pb-8 text-[#777777]">
            Doğadan aldığı ilham ile hayat bulan Stone oniks mermer çeşitleri ve
            fiyatları için özel tasarım koleksiyonumuzla tanışın!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarOniks[0].map((tas, index) => {
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
              Onyx (Oniks) Mermer Çeşitleri
            </h2>
            <p className="text-[#777777]">
              Kalsedon taş grubu ailesinde sayılan Onyx (Oniks) Mermer taşı yarı
              değerli taş grubu içerisinde yer almaktadır. Oluşum süreci diğer
              değerli mermer türlerine göre kalsiyum karbonatın yoğun olduğu
              soğuk su kaynaklarında gerçekleşir. İçerik bakımından daha yoğun
              madeni tuz içeren suların daha yavaş çökelme işlemi sonucunda
              oluşum tamamlanır. Çözülme işleminin yavaş gerçekleşmesi ise Oniks
              Mermerin daha kristalize, saydam ve yoğun bir yapıya bürünmesini
              sağlar. Saydam ve kristalize bir yapısının olması onu diğer mermer
              türleri arasında farklı bir noktaya taşır. Bu durum Onyx Mermerin
              ışığı geçirebilme özelliğine sahip olmasında etkilidir. Diğer
              doğal taşlar garklı olarak ışığı geçirme özelliğinin yarı değerli
              taş grubunda yer almasını sağlar. Bu özellik Oniks taşının mermer
              dışında kullanım alanlarına sahip olmasında en büyük etkendir.
              Yapı malzemesi dışında dekorasyon, süs eşyası ve takı sektöründe
              de bu ürüne ilgi büyüktür.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Onyx (Oniks) Mermer Nedir?
            </h2>
            <p className="text-[#777777]">
              Diğer mermer türlerine göre oniks mermer içeriğinde bulundurduğu
              silisyum mineralleri ile farklı bir özelliğe sahiptir. Saydam ve
              kristalize bir yapıya sahip olmasından dolayı Onyx Mermer; çok
              daha değerli bir doğal taştır. Işığı geçirme özelliği onu farklı
              mimari ve dekorasyon ürünü olarak kullanma imkanı tanır.
              Belirttiğimiz özelliği nedeniyle oldukça değerli ve yer altından
              çıkarılması zor olan Oniks mermerleri kullanıldığı alanlara farklı
              bir estetik ve değer katmaktadır. Doğal taş madenleri bakımından
              oldukça elverişli bir coğrafyaya sahip olmamız; Onyx mermer
              üretimimizi olumlu etkilemektedir. Özellikle Afyon ve Adıyaman
              bölgelerinde oniks mermer ocakları bulunmaktadır. Diğer mermer
              türlerine göre çıkarılması çok daha zor olana bu özel ürün özel
              araç ve makineler kullanılarak kullanıma hazır hale
              getirilmektedir. Çıkarılmasının ve işlenmesinin güçlüğünün yanında
              tüm işlemleri tamamlanan bir oniks mermer diğer mermerlere göre
              çok daha özel bir görünüme sahiptir. Kullanıldığı alanlara çok
              farklı ve zengin bir görünüm kazandıran bu ürün genellikle topluma
              açık binalarda tercih edilmektedir. Işık geçirgen yapısı sayesinde
              aydınlık mekanlarda veya özel ışıklandırmayla ürünün içindeki renk
              cümbüşünü ortaya çıkarabilir ve tüm ilgiyi oniks mermerin üzerine
              çekebilirsiniz.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Oniks Mermer Nerelerde Kullanılır?
            </h2>
            <p className="text-[#777777]">
              Oniks mermer ocaklarından özenle çıkarılan bloklar istenilen
              ölçüler için özenle kesilirler. Daha sonra özel tornalarda şekil
              verme işlemleri gerçekleştirilir. Bu iş için özel makinelerde işin
              uzmanları tarafından titizlikle hazırlanan oniks mermerler
              kullanıma hazır hale getirilir. Diğer mermer türlerine göre çok
              daha az sayıda üretilen bu özel ürün genellikle iç mekan
              dekorasyonlarında kullanılır. Işığı geçiren yapısı nedeniyle iç
              mekanlara ayrı bir zarafet katan oniks mermer ürünleri tamamlayıcı
              tasarım ürünü olarak kullanılır. Otellerin lobilerinde, tiyatro,
              gösteri alanı, toplantı salonları ve lüks restoranlarda sıklıkla
              bu ürün tercih edilmektedir. Uygulama alanlarına farklı ışık
              vererek çok daha güzel ve zengin bir görünüm elde etmek mümkündür.
              Bu tür yerlerin dışında oniks mermer metal veya ahşap ayakların
              üzerinden masa veya sehpa ürünü olarak da tercih edilebilir. Yaşam
              alanlarına farklı bir görsel güzellik katmak adına kullanılan Onyx
              mermer ayrıca dekoratif ürün olarak da kullanılmaktadır. Özel
              olarak hazırlanan heykeller, tabak, çanak, takı aksesuarı ve el
              işi küçük oyma objelerde bu ürünün kullanıldığını görmeniz mümkün.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Onyx Mermer Çeşitleri
            </h2>
            <p className="text-[#777777]">
              Ülkemizde başta Afyon olmak üzere bir çok noktasından oniks mermer
              taşının çıkarıldığını söyleyebilirim. Belirlenen ocaklardan
              titizlikle çıkarılan ve kullanım için hazır hale getirilen onyx
              mermer ürünleri çıkarıldıkları bölgeye has özellikleri üzerlerinde
              taşırlar. Birbirinden farklı renk ve karakteristik özellik taşıyan
              onyx mermer çeşitlerinin neler olduğunu şu şekilde sıralamamız
              mümkün. Beyaz Oniks, Bal Oniks, Bubble Oniks, Cappuccino Oniks,
              Velluto Oniks, Gümüş Oniks, Gold Oniks, Cocacola Oniks, Satin
              Oniks, Salmon Oniks, Dark Desert Oniks ve Light Desert Oniks.
              Yukarıda belirttiğimiz onyx mermer çeşitlerini Ülkemizin en
              kaletile madenlerine sahip Afyon ilimizdeki maden ocaklarımızdan
              çıkarıyor ve titizlikle sizler için hazırlıyoruz. Renk bilgileri
              ve stok durumu için bizimle hemen iletişime geçebilir veya satış
              mağazalarımızdan ürünlerimizi inceleyebilirsiniz.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Onyx Mermer Nereden Çıkıyor?
            </h2>
            <p className="text-[#777777]">
              Doğal taş türleri arasında nadir çıkarılan ve bir o kadar değerli
              olan onyx mermer ocakları ülkemizin bir çok bölgesinde bulunmak
              ile birlikte en değerli maden ocakları Afyon bölgesinde
              bulunmaktadır. Özellikle Afyon Emirdağ bölgesi bu alanda en
              kaliteli oniks ocakları olarak kabul görmektedir. Firmamız bu
              bölgede sahip olduğu maden ocaklarından sizler için onyx mermer
              bloklarını titizlikte çıkarmakta ve işlemektedir. Çıkarıldığı
              bölgeye has renklere sahip olan oniks mermer ürünleri doğal
              olduğundan bloklar arasındaki renk geçişlerinde farklık
              oluşabilmektedir. Aynı renk tonundaki bloklardaki ürünlerin
              içindeki renk geçişlerinin farklılık göstermesi bu sebeple gayet
              doğal karşılanmaktadır. Diğer Mermer veya Granit Mermer ürünlerine
              göre çok daha az çıkarılan ve işlenen oniks mermer çeşitlerini
              sizler için farklı kalınlıkta ve ebatlarda hazırlama imkanına
              sahibiz. Bu sebeple kullanım alanınıza en uygun ürün bilgisi için
              hemen bizimle iletişime geçebilirsiniz.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Onyx (Oniks) Mermer Fiyatları
            </h2>
            <p className="text-[#777777]">
              Onyx mermer fiyatları diğer mermer fiyatlarına göre oldukça
              değişken bir yapıya sahiptir. Bunun en büyük nedeni madenden
              çıkarılan oniks mermerin yapısına veya görselliğine göre
              fiyatlandırılmasıdır. Işık geçirgenlik oranı ve saydamlığı
              fiyatının etkileyen en önemli özelliktir. Bununla birlikte ürünün
              saydamlığı fiyatını doğrudan etkilemektedir. Ayrıca istenilen ebat
              ve kalınlığı fiyatı etkileyen bir diğer husustur. Oniks mermer
              blokları diğer mermer bloklarına göre çok daha zor çıkarıldığından
              ve daha zor işlendiğinden dolayı piyasada az bulunmaktadır. Ürünün
              stok durumu, temin edilebilme imkanı ve ebat bilgilerinin
              belirlenmesinden sonra gerçek fiyat aralığını öğrenmeniz mümkün
              olmaktadır.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogalTaslarOniks;
