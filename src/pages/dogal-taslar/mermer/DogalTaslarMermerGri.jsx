import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBar";
import { dogalTaslarMermerGri } from "../../../utils";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const DogalTaslarMermerGri = () => {
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
          <p>{t("gri mermer")}</p>
        </div>
      </div>
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="hidden sm:block flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4]">
          <h1 className="font-bold text-3xl text-[#52536e]">
            Gri Mermer Çeşitleri ve Modelleri
          </h1>
          <p className="xl:pl-8 xl:m-4 py-4 pb-8 text-[#777777]">
            <span className="font-bold">Gri mermer</span>, evinize doğal
            güzellik katabilen, görsel olarak hoş bir doğal taştır. Sade ama
            sofistike gri mermer, hemen hemen her dekorla iyi uyum sağlar.
            Aradığınız ister açık gri mermer, ister koyu gri mermer olsun,
            zevkinize uygun sayısız seçenek var. Gri mermer tezgahlar,
            backsplash’ler, makyaj tezgahları veya diğer ev yapıları, herhangi
            bir eve harika bir ektir. Fazla gösterişli olmayan şık bir mermer
            çeşidi istiyorsanız gri mermer sizin için mükemmel bir seçenek
            olabilir.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarMermerGri[0].map((tas, index) => {
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
            <p className="text-[#777777]">
              <span className="font-bold">Gri mermer</span>, açıktan koyuya
              kadar bir dizi gri tonuna sahip bir doğal taş türüdür. Şık ve
              modern görünümü nedeniyle oldukça değerlidir ve genellikle çağdaş
              iç ve dış tasarım projelerinde kullanılır. Gri mermer,
              dayanıklılığı ve çizilmeye karşı direnci ile bilinir, bu da onu
              döşeme ve tezgah gibi yüksek trafikli alanlar için popüler bir
              seçim haline getirir. Çok yönlülüğü ve zarif güzelliği, onu
              minimalistten klasiğe kadar çeşitli tasarım stilleri için popüler
              bir seçim haline getiriyor. Gri mermer, herhangi bir alana
              sofistike ve lüks bir dokunuş katarak onu mimarlar, tasarımcılar
              ve ev sahipleri için popüler bir seçim haline getirir.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogalTaslarMermerGri;
