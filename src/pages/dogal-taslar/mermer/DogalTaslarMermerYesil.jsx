import { dogalTaslarMermerYesil } from "../../../utils";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const DogalTaslarMermerYesil = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <>
      <div className="h-[120px] items-center flex-wrap flex flex-col justify-around md:items-start bg-[#f1f1f1] pl-24">
        <h2>{t("dogal taslar")}</h2>
        <div className="flex justify-center items-center flex-wrap gap-1">
          <Link to="/">Marboluxe</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <Link to="/dogal-taslar">{t("dogal taslar")}</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <Link to="/dogal-taslar/mermer">{t("mermer")}</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <p>{t("yesil mermer")}</p>
        </div>
      </div>
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="hidden sm:block flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4]">
          <h1 className="font-bold text-3xl text-[#52536e]">
            Yeşil Mermer Çeşitleri ve Modelleri
          </h1>
          <p className="xl:pl-8 xl:m-4 py-4 pb-8 text-[#777777]">
            <span className="font-bold">Yeşil mermer</span>, yerleştirildiği her
            alana renk ve yaşam katacak harika bir doğal taştır. Mermerinizle
            bir açıklama yapmak istiyorsanız, yeşil mermer tezgahlar,
            backsplash’ler, makyaj tezgahları veya diğer ev yapıları tam da bunu
            yapacaktır. Ek olarak, çekiciliğini daha da artırabilecek güzel zıt
            damarlara sahip bir taş bulabilirsiniz. Yeşil mermer, hem güzel hem
            de cesur bir taş eklemek için harika bir seçimdir.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarMermerYesil[0].map((tas, index) => {
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
          <div className="w-full flex flex-col gap-4 mt-4 border-t pt-2">
            <p className="text-[#777777]">
              <span className="font-bold">Yeşil mermer</span>, çarpıcı yeşil
              rengi ve benzersiz damar desenleriyle oldukça değer verilen bir
              doğal taş türüdür. Döşeme, duvar kaplama, tezgah, iç ve dış
              tasarım uygulamalarında yaygın olarak kullanılır. Yeşil mermer,
              dayanıklılığı ve aşınmaya ve yıpranmaya karşı direnci ile bilinir
              ve bu da onu yüksek trafikli alanlar için popüler bir seçim haline
              getirir. Doğal güzelliği ve zarafeti, herhangi bir alana lüks ve
              sofistike bir dokunuş katarak onu mimarlar, tasarımcılar ve benzer
              şekilde ev sahipleri için popüler bir seçim haline getirir.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogalTaslarMermerYesil;
