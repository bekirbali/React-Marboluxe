import { dogalTaslarDolomit } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const DogalTaslarDolomit = () => {
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
          <p>Dolomit</p>
        </div>
      </div>
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4]">
          <h1 className="text-center text-3xl font-bold my-4">Dolomit</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarDolomit[0].map((tas, index) => {
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
            <h2 className="text-3xl font-bold text-[#52536e]">Dolomit</h2>
            <p className="text-[#777777]">
              Dolomit hem bir minerali CaMg(CO3)2 hem de bu minerali ana
              bileşeni olarak içeren kayacı tanımlamakta kullanılan bir
              sözcüktür. Dolomit minerallerinin oluşturduğu kayaçlara dolotaşı
              adı da verilmektedir. Bu kayaçların oluşumu dolomitin doğrudan
              kimyasal bir çökelme ile değil kireç taşlarının magnezyum
              bakımından zengin suların etkisi altında oluştuğu bilinmektedir.
              Aşırı buharlaşmanın olduğu denizden bir yükselti ile ayrılmış yarı
              kapalı ortamlarda suyun magnezyum bakımından giderek
              zenginleşmesi, tabana çökmüş kalsitten ibaret çamurun bu yoğun
              çözeltilerle etkileşmeye girerek dolomite dönüşmesi mümkün
              olabilir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Dolomit Nedir?
            </h2>
            <p className="text-[#777777]">
              Beyaz dolomit mermer, kalsiyum ve magnezyum içeren karbonat
              bileşiminden oluşmaktadır. Türkiye’nin en değerli taş olarak
              nitelendirilmektedir ve Balıkesir’in Marmara Adası’nda
              çıkarılmaktadır. İnce kristalli ve sıkı taban yapısı nedeni ile
              beyaz doğal taşlar arasında ön plana çıkar. Değişik renklere sahip
              dolomit mermer çeşitleri arasında en çok beyaz renk talep görmekte
              olup, bu taşlar iç ve dış mekan projelerinde tercih edilmektedir.
              Sanayiden dekorasyona çok farklı kullanım alanları bulunan ve
              değişik ölçülerde üretilen Dolomit mermer, özellikle son yıllarda
              dekoratif ve peyzaj amaçlı da kullanılmaktadır.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Dolomit Kullanım Alanları
            </h2>
            <p className="text-[#777777]">
              Fiziksel ve kimyasal yapısına bağlı olarak dolomitin 30’dan fazla
              kullanım alanı vardır. Fiziksel nitelikleri itibariyle dolomit
              özellikle yol inşaatlarında (karayolu, demiryolu) ve beton
              yapımında kullanılmaktadır. Kimyasal niteliklerinden istifade söz
              konusu olduğunda ise çok daha geniş bir kullanım alanı ortaya
              çıkmaktadır. İçerdiği MgO’den dolayı dolomit ziraatta (gübre
              yapımında, toprak ıslahında) tuğla, çimento, Dolomitik sönmemiş
              kireç, cam, soda sanayinde kullanılmaktadır. Başta boya olmak
              üzere kimya sanayisinde de dolgu maddesi olarak önemli bir
              hammaddedir. Mineral olarak çok yönlü özelliklere sahiptir, bu
              nedenle birçok sanayi sektöründe kullanılmaktadır. Fiziksel
              özellikleri nedeniyle metalurji endüstrisinde ve yapımında talep
              görmektedir. Cephe kaplaması için kullanılan dolomit, iklimsel
              değişikliklere dayanıklı ve yüksek aşınma direncine sahip
              olduğundan özel bir bakıma ihtiyaç duymaz. Marmara mermeri
              blokları arasından son derece az miktarda çıkan sütbeyaz bir
              mermerdir.
            </p>
            <h2 className="text-3xl font-bold text-[#52536e]">
              Dolomit Fiyatları
            </h2>
            <p className="text-[#777777]">
              Dolomit süs eşyaları ve mücevherlerin hazırlanmasında da
              kullanılan bir mineraldir. Farklı renklerinden küpeler, kolyeler,
              boncuklar yapılmaktadır. Marmara dolomit bina cephelerinin
              tasarımı, basamaklar ve iç dekorasyon için tasarlanmış değerli bir
              kaplama malzemesidir. İşleme kolaylığı evler ve bahçelerin
              düzenlenmesi, iç dekorasyonunun yapılması için çeşitli şekil ve
              konfigürasyonlara sahip mimari ürünler üretmemizi sağlar. Tüm
              dolomit fiyatları ebatlarına ve işçiliğine göre değişiklik
              göstermektedir. Stok bilgisi, temin edilebilme ve en uygun dolomit
              fiyat bilgisi için Merkez Fabrika ve Kadıköy Showroom ile irtibata
              geçebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogalTaslarDolomit;
