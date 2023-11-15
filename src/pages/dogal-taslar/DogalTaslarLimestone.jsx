import { dogalTaslarLimestone } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const DogalTaslarLimestone = () => {
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
          <p>Limestone</p>
        </div>
      </div>
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4]">
          <p className="xl:pl-8 xl:m-4 py-4 pb-8 text-[#777777]">
            Projeniz için Limestone (Kireç Taşı) çeşitleri arasından seçim
            yapın. Limestone fiyatları hakkında daha fazla bilgi almak için
            bizimle iletişime geçin.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarLimestone[0].map((tas, index) => {
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
              Limestone Mermer Çeşitleri ve Fiyatları
            </h2>
            <p className="text-[#777777]">
              Limestone diğer adıyla magnezyumlu kireç taşı doğal taş ürünleri
              arasında önemli bir mermer türü olarak dikkat çeker. Magnezyum
              karbonat ve kalsiyum karbonat karışımından meydana gelen karbonat
              tortul bir kayaç türüdür. Ülkemizin farklı bölgelerinde çok
              kaliteli kireç taşı maden ocaklarından elde edelin bu ürün
              işlenerek kullanıma hazır hale getirilmektedir. Mermer ve granit
              mermer ürünlerine göre limestone mermer modelleri çok daha yumuşak
              bir yapısının bulunması işlenmesini kolaylaştırmaktadır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Limestone (Kireç Taşı)
            </h2>
            <p className="text-[#777777]">
              Doğal taş türleri arasında mermer ve granit ürünlerine göre çok
              daha yumuşak ve işlenmesi çok daha kolay olan limestone; mercan,
              foraminifera ve deniz canlılarının iskeletlerinden oluşan tortul
              kayaç türüdür. Yapısında aragonit mineraller, kalsit ve farklı
              formlarda kalsiyum karbonatlar bulunmaktadır. Evaporit çökelme
              ortamları oluşumu için en ideal alanlardır. Ülkemiz bu doğal taş
              oluşumu için oldukça elverişli bir yapıya sahiptir. Özellikle
              Toros dağları bölgesi limestone mermer modelleri çeşitliliği
              bakımından oldukça zengin bir yapıya sahiptir. Farklı tür ve
              çeşitlerde elde edilen limestone iç ve dış mimari için oldukça
              ideal bir ürün haline gelmiştir. Özellikle yumuşak yapısı ve diğer
              doğal taşlara göre kütlesinin çok daha hafif olması ürüne olan
              ilginin artmasını sağlamaktadır. Ev veya iş yerlerinin
              dekorasyonlarında limestone genellikle duvar kaplamalarında tercih
              edilmektedir. Hafif oluşu ve farklı renk seçenekleri bu ürünün
              duvarlarda en çok tercih edilen ürün haline gelmesini sağlamıştır.
              Uygulandığı alana çok daha az ağırlık vermesi hem güvenli bir yapı
              malzemesi olması; hem de diğer doğal taşlara oranla çok daha
              ekonomik çözümler sunmaktadır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Limestone Nedir?
            </h2>
            <p className="text-[#777777]">
              Yukarıda da belirttiğimiz üzere doğal taşlar familyasından olan
              limestone kireç taşı plakalar halinde ocaklardan çıkarılarak yapı
              malzemesi olarak kullanılmaktadır. Bunun dışında çok daha farklı
              alanlarda endüstriyel bir ürün olarak da değerlendirilmektedir.
              Limestone parçacıklarından elde edilen tortullar; çimento üretimi,
              kireç üretimi, baca gazı arıtımı, tarım sektörü, metalürji, cam,
              kağıt, lastik ve boya sanayisinde endüstriyel ürün olarak da
              değerlendirilmektedir. Ayrıca inşaat sektöründe dolgu malzemesi
              olarak da kullanımı mümkündür. Kullanım alanı bu kadar geniş olan
              bu ürün doğanın insanoğluna büyük bir armağanı olarak
              nitelendirilebilir. Birbirinden farklı onlarca sektörde kullanılan
              limestone yapı malzemeleri alanında da oldukça ilgi görmektedir.
              Bulunduğu maden ocaklarından plakalar halinde özenle çıkarılan
              limestone blokları özenle işlenmektedir. Elde edilen ürünler iç ve
              dış yaşam alanlarında farklı amaçlar ve farklı güzellikler elde
              etmek adına rahatlıkla kullanılmaktadır. Yapısı gereği diğer doğal
              taşlara oranla çok daha hafif ve sağlam bir yapıda olması bu
              ürünün duvar kaplamalarında daha fazla kullanıldığını belirtmek
              isterim.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Limestone Nerede Kullanılır?
            </h2>
            <p className="text-[#777777]">
              Limestone nedir? Doğal Limestone kireç taşının özelliklerini ve
              farklı sektörlerde kullanım alanlarını belirttikten sonra
              Limestone plakalarının nerelerde kullanıldığından bahsetmek
              istiyorum. Yumuşak yapıda bir doğal taş olan limestone istenilen
              farklı boyut ve yapılarda kolaylıkla işlenebilmektedir. Bu da bu
              ürünün çok farklı alanlarda kullanımına imkan tanımaktadır. İç ve
              Dış mimaride bu ürünün bu nedenlerden dolayı çok fazla tercih
              edildiğini ve kullanıldığını görebilirsiniz. Çıkarıldığı bölgenin
              karakteristik yapısı gereği farklı renk kartelasına sahip olan bu
              ürün dekorasyonlarda genellikle duvar kaplamasında tercih
              edilmektedir. Bunun en büyük nedeninin hafif bir ürün olduğundan
              kaynaklandığını belirtmiştir. Bununla birlikte doğal bir yapısının
              olması ve uygulandığı alana farklı bir karakteristik hava katması
              diğer tercih nedenleridir. Sizde yaşam alanlarınızı doğal bir
              görünüme kavuşturmanın yanında farklı ve estetik bir görünüm elde
              etmek için iç ve dış duvar kaplamalarınızda bu ürüne yer
              verebilirsiniz. Yapılarda doğal taş kullanımı sadece duvar
              kaplaması ile sınırlı değildir. Bununla birlikte zemin
              döşemelerinde de bu ürün tercih edilmektedir. Özellikle otantik
              bir görünüm elde etmek isteyenler bu ürünleri yer döşemelerinde
              sıklıkla tercih etmektedir. Kullanıldığı alana uygun renk
              seçeneklerinin bulunması ve istenilen ebat ve ölçüde rahatlıkla
              hazırlanması tercih sebeplerinden bir diğeridir. Mermer ve granit
              ürünlerine göre daha ekonomik olması ve uygulanmasının daha kolay
              olması sizlerin de bu ürünü tercih etme nedeniniz olabilir. Bu
              konuda farklı renk ve özel dokularda özenle hazırlanmış
              ürünlerimizi showroomlarımızdan inceleyebilir veya ürün hakkında
              merak ettiklerinizi bizlere sorabilirsiniz.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Limestone Fiyatları
            </h2>
            <p className="text-[#777777]">
              Limestone mermer çeşitleri ve özellikleri hakkında merak
              edilenleri sizlerle paylaştıktan sonra bu konuda merak edilen bir
              diğer konu hakkında bilgi vermek istiyorum. Bu ürünü kullanmak
              veya tercih etmek isteyenler bu ürünlerin fiyatları hakkında
              araştırma yapmaktadır. Limestone fiyatları diğer doğal taşlarda
              olduğu gibi birtakım farklılıklara göre değişkenlik
              göstermektedir. Bu özelliklerin başında tercih etmek istediğiniz
              renk seçenekleri önemli bir etkendir. Ayrıca kullanılmak istenilen
              ürün miktarı ve ebat bilgileri fiyatları değiştiren bir diğer
              etken olarak karşımıza çıkmaktadır. Çok farklı sektörlerde farklı
              amaçlar için kullanılan veya tercih edilen limestone mermer,
              dekorasyon amaçlı kullanılmak istenildiğinde çok daha ayrıntının
              dikkate alınması anlamı taşır. Satışa hazır hale getirilen bu
              ürünün hazırlık aşamalarının doğru ve sorunsuz gerçekleştirilmesi
              oldukça önemlidir. Plakanın kesimi esnasında çatlakların
              oluşturulmaması ve ürünün cilalanmasının doğru yöntemlerle
              yapılması oldukça önemlidir. Bu işlemlerin doğru yapılması
              sonucunda kaliteli bir limestone mermer elde edilmektedir. Bu
              nedenle iç ve dış mekan dekorasyon ürünü olarak tercih edilecek
              olan bu ürününün kaliteli bir işçilik soncunda oluşturulup
              oluşturulmadığına dikkat etmelisiniz. Bu konuda yılların tecrübesi
              ve kaliteli hizmet anlayışımızla sizlere en kaliteli limestone
              mermer ürünlerini sunuyoruz. Ülkemizin en değerli madenlerinden
              özenle çıkarılmış plakalar işlenerek hazırlanan Limestone Mermer
              Modelleri sizlerin kullanımına sunuyoruz. Limestone fiyatları
              hakkında et bilgi sahibi olmanız adına stok bilgisi kontrolü ve
              temin edilebilme gibi durumlarını hakkında sizleri bilgilendirmek
              istiyoruz. Tüm bu sorularınızın cevabını için bizimle hemen
              iletişime geçebilir veya satış mağazalarımıza uğrayabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogalTaslarLimestone;
