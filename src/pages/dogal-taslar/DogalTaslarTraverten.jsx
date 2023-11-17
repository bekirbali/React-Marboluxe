import React, { useState } from "react";
import { dogalTaslarTraverten } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import SideBar from "../../components/SideBar";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const DogalTaslarTraverten = () => {
  const [page, setPage] = useState(0);

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
    if (page === dogalTaslarTraverten.length - 1) {
      console.log("lastPage");
      return;
    }
    setPage(page + 1);
  };

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
          <p>Traverten</p>
        </div>
      </div>
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4]">
          <p className="xl:pl-8 xl:m-4 py-4 pb-8 text-[#777777]">
            Lüks ve estetiğin birleşimi olan Marboluxe traverten mermer taş
            çeşitleri ve fiyatları için Marboluxe Stone yerli ve benzersiz
            modelleri şimdi inceleyin!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarTraverten[page].map((tas, index) => {
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
            {dogalTaslarTraverten.map((item, index) => (
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
              Traverten Çeşitleri ve Fiyatları
            </h2>
            <p className="text-[#777777]">
              Doğal taş çeşitleri arasında yapı malzemesi olarak sıklıkla
              kullanılan traverten taşlar kalsiyum ve kobalt bileşiminden
              meydana gelmektedir. Oluşumu milyonlarca yıl süren bu dayanıklı
              yapı malzemesi geçmişten günümüze birçok farklı alanda yapı
              malzemesi olarak kullanılmaya devam etmektedir. Doğal delikli
              yapısı ve sağlam karakteristik özelliği nedeniyle insanoğlu yapı
              malzemesi olarak bu ürüne büyük ilgi göstermektedir. Bu kapsamda
              son dönemde sıklıkla merak edilen;{" "}
              <span className="font-bold">
                Traverten Çeşitleri ve Fiyatları
              </span>
              , Traverten taş kullanım alanları ve traverten kalitesi nasıl
              anlaşılır sorularınıza cevap vermek istiyorum.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Traverten Nedir?
            </h2>
            <p className="text-[#777777]">
              Kireç taşı familyasından olan traverten taşları kaplıca sularının
              çökelmesi sonucunda meydana gelmektedir. Granit veya mermer
              oluşumuna göre çok daha uzun bir zamanda bu taşların oluşumu
              tamamlanmaktadır. Bu nedenle oldukça değerli ve karakteristik bir
              yapıya sahiptir. Kendine özgü olan delikli yapısı bu ürüne çok
              daha doğal bir görünüm kazandırmaktadır. Koyu kahverengiden bej
              rengine kadar çeşitli renk kartelasına sahiptir. Bu kadar çok renk
              seçeneğinin oluşması kullanım alanlarında daha fazla tercih edilme
              nedeni olarak dikkat çekmektedir. Farklı renklerde oluşan damar
              yapısı ile benzersiz bir özelliğe sahip olduğundan her bir
              traverten taş karosunda farklı renk dalgalanması görmek mümkündür.
              Bununla birlikte mermer ve granitlere oranlara çok daha yumuşak
              bir yapıya sahip olan traverten taşlarının işlenmesi çok daha
              kolaydır. Yoğunluğunun diğer doğal taşlara oranla düşük olması bu
              ürünün çok daha hafif olmasını sağlamaktadır Hafif olduğundan
              dolayı cephe kaplamalarında uygulandığı bölgeye daha az ağırlık
              verdiğinden; güvenli ve sağlıklı bir kaplama ürünüdür.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Traverten Nerelerde Kullanılır?
            </h2>
            <p className="text-[#777777]">
              Traverten taşlar doğal yapısı sayesinde hem iç mekanlarda hem de
              dış mekanlarda rahatlıkla kullanılmaktadır. Serin yapısı ve
              kaydırmaz özelliği bu ürünün ıslak zeminlerde dahil birçok alanda
              kullanımına imkan tanımaktadır. Isıyı bünyesinde tutmaması
              nedeniyle hem dış cephe kaplamalarında hem de havuz kenarı gibi
              alanlarda rahat bir kullanım imkanı sağlar. Dış mekan Traverten
              mermer kullanım alanları; Havuz kenarı gibi ıslak zeminlerde
              Bahçelerin yürüyüş yollarında Veranda ve tüm dış mekan
              zeminlerinde Dış mekan duvar kaplamalarında Barbeküler Havuz
              basamakları Dış mekan merdiven basamakları Yukarıda belirttiğimiz
              dış mekanların dışında kalan ve iç mekan olarak bilinen banyolarda
              bu ürün rahatlıkla kullanılmaktadır. Kaymaz bir yapıya sahip
              olması banyolarda sağlıklı bir kullanım imkanı sağlamaktadır.
              Ayrıca iç mekan mutfak ve iç duvar kaplama malzemesi olarak da
              tercih edebilirsiniz. Kendine has renk seçenekleri ve özel delikli
              yapısı ile doğal bir görünüm elde etmek isteyenlerin ilk tercihi;
              traverten mermer ürünleridir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Traverten Dayanıklı Mıdır?
            </h2>
            <p className="text-[#777777]">
              Bu doğal taş ürünleri granit ve mermer ürünleri kadar sert bir
              yapıya sahip olmasa da sağlam ve uzun ömürlü bir üründür. Bunun en
              büyük ispatı yüzyıllar öncesinde kullanılan yapıların günümüze
              kadar ulaşmasıdır. Özellikle yer döşemesinde kullanılan bu ürün
              yumuşak dokusu nedeniyle eskimeye karşı çok daha dayanıklıdır.
              Doğal fiziksel etkenlere karşı son derece dirençli olan traverten
              taşlarının bakımları doğru yapıldığı takdirde uzun yıllar
              sorunsuzca kullanılabilir. Her doğal taşta olduğu gibi traverten
              mermer kullanımında kimyasal ürünlerin kullanılmaması
              gerekmektedir. Asit ve yoğun kimyasal ürünler traverten taş
              ürünlerinin aşınmasına ve özelliğini kaybetmesine etki etmektedir.
              Bu nedenle traverten ürünlerin temizliği yapılırken oldukça
              dikkatli olunmalıdır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Traverten Çeşitleri Nelerdir?
            </h2>
            <p className="text-[#777777]">
              Traverten taş çeşitleri çıkarıldıkları bölgeye göre farklılık
              göstermektedir. Genel olarak beyaz traverten ve bej traverten
              taşları olarak bilenen ürünün renkleri sarı çakıl ve beyaz çakıl
              olarak da adlandırılır. Kendine has özel delikle bir yapıya sahip
              olan bu ürünler istenildiği zaman özel dolgularla bu delikler
              kapatılabilmektedir. Bununla birlikte özel olarak hazırlanan bu
              ürünlerin yüzeyleri;
              <ul>
                <li>* Cilalı yüzey Eskitmeli yüzey (Antik Görünüm)</li>
                <li>* Honlu yüzey (Mat)</li>
                <li>* Fırçalı yüzey (Patinato)</li>
                <li>* Kenar kırma</li>
              </ul>
              Son dönemde bu ürünler arasında en çok ilgiyi eskitme olarak
              bilinen; Antik Görünümlü traverten taşlar almaktadır.
              Belirttiğimiz özelliklere sahip Antique Pewter, Gümüş traverten,
              River traverten, Beyaz Traverten, Noce Traverten ve Klasik
              Traverten çeşitlerimizle sizlere en kaliteli ürünleri sunuyoruz.
              İhtiyaç duyduğunuz renk ve ebatlardaki traverten siparişleriniz
              için bizimle hemen iletişime geçebilirsiniz.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Traverten Kalitesi Nasıl Anlaşılır?
            </h2>
            <p className="text-[#777777]">
              Traverten Çeşitleri ve Fiyatları araştırması yapanlar için bu
              ürünün özellikleri belirttikten sonra kaliteli bir traverten
              taşının nasıl olması gerektiği hakkında bilgi vermek istiyorum.
              Öncelikli olarak bilinmesi gereken kullanım alanına en uygun
              traverten taşının tercih edilmesidir. Tercih etmek istediğiniz
              traverten taşını iç mekan için mi dış mekan için mi kullanmak
              istediğinizle başlayabiliriz. Bununla birlikte istenilen ebat ve
              renk seçenekleri sizin hangi taşı tercih etmeniz gerektiğini
              belirleyecektir. Traverten taşın kalitesini anlayabilmek için
              öncelikli olarak yumuşak mı sert mi bir ürün talep ettiğiniz ile
              alakalıdır. Yüzeyi pürüzsüz dekoratif bir traverten mermer
              ihtiyacınız için daha yumuşak yapıdaki ürünler sizin için en ideal
              ürün olacaktır. Aynı şekilde dış mekanların zeminlerinde
              kullanılmak istenilen bu tür bir ürün için daha sert yapıdaki
              ürünleri tercih etmeniz gerekmektedir. Bu konuda yapılacak en
              basit yöntem ise; küçük bir parça traverten taşının kırılmasıyla
              belirlenebilir. Traverteni kolaylıkla kırabilirseniz yumuşak
              yapıda bir traverten taşı olduğunu anlayabilirsiniz.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Traverten Mermer Nerelerde Kullanılır?
            </h2>
            <p className="text-[#777777]">
              Doğal taşlar arasında olan ve kullanım alanı bakımından oldukça
              geniş bir yelpazeye sahip olan traverten taşları iç ve dış
              mekanlar olmak üzere birçok yaşam alanında kullanılabilmektedir.
              Özellikle doğal ve eşsiz bir görünüm elde etmek adına yaşam
              alanlarının banyo, mutfak ve salonlarında bu tür ürünler
              rahatlıkla kullanılmaktadır. Ayrıca granit mermer ürünlerine göre
              çok daha hafif olmasından dolayı duvar dekorasyonlarında sıklıkla
              tercih edilmektedir. İç mekan duvar dekorasyonunun yanında dış
              duvarlarda yalıtım malzemesi olarak da tercih edilmektedir. Su
              geçirmez ve serin yapısı traverten taşların dış duvarlarda tercih
              edilme nedenidir. Ülkemizin farklı bölgelerindeki madenlerden elde
              edilen bu ürünler; çıkarıldıkları bölgeye özgü renk seçenekleriyle
              bizlere alternatifler sunmaktadır. Kullanılmak istenilen
              mekanlardaki mobilyalara uygun renk bulmak su sebeple oldukça
              kolaydır. Dünyanın en kaliteli maden ocaklarına sahip
              olduğumuzdan; istediğiniz renk, ebat ve kalitedeki traverten taş
              ürünlerine hemen ulaşmak adına bizimle iletişim kurmanız yeterli
              olacaktır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Traverten Fiyatları 2023
            </h2>
            <p className="text-[#777777]">
              Traverten Çeşitleri ve Fiyatları birden fazla etkene bağlı olarak
              değişiklik göstermektedir. Bu sebeple traverten fiyatları 2023
              yılında tercih edilecek renk, ebat ve boyutuna göre farklılık
              göstermektedir. Bununla birlikte bu ürünün fiyatını belirleyen
              kriterlerden bir diğerinin de kesim türü olduğunu belirtmek
              isterim. Tercih edilen ürünün kullanım alanına göre özel olarak
              belirlenen bu kesim türü ürün fiyatının belirleyecektir. Kısaca
              özetlemek gerekirse traverten fiyatlarını etkileyen birden fazla
              etken bulunmaktadır. Bu etkenleri birlikte değerlendirmek ve
              sizler için en ideal traverten türünü belirlemek adına sizleri
              satış mağazamıza bekliyoruz. Yaşam alanlarınıza doğal bir güzellik
              ve görünüm kazandırmak adına uygulamayı düşündüğünüz traverten
              mermer ürünleri hakkında tüm merak ettikleriniz için bizimle
              iletişime geçebilirsiniz. Talep ettiğiniz ürünün rengi, türü,
              boyutu ve planlanan uygulama alanın diğer ihtiyaçlarına göre;
              Ülkemizin en kaliteli madenlerinden çıkarılmış özel traverten taş
              ürünleri ve fiyatlarımızla yanınızdayız.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogalTaslarTraverten;
