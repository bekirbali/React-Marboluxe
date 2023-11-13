import { dogalTaslarMermerMavi } from "../../../utils";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SideBar from "../../../components/SideBar";

const DogalTaslarMermerMavi = () => {
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumbs />
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4]">
          <h1 className="font-bold text-3xl text-[#52536e]">
            Mavi Mermer Çeşitleri ve Modelleri
          </h1>
          <p className="xl:pl-8 xl:m-4 py-4 pb-8 text-[#777777]">
            <span className="font-bold">Mavi mermer</span>, evinize anında
            görsel çekicilik katabilen çarpıcı bir doğal taştır. İster açık mavi
            mermer ister koyu mavi mermer arıyor olun, mavi mermer tezgahlar,
            ters sıçramalar, makyaj tezgahları veya taştan yapılmış diğer ev
            yapıları eklemek, alanınızın görünümünü gerçekten iyileştirebilir.
            Mavi mermer göze çok hoş geliyor ve birçok türde muhteşem damarlar
            ve diğer renklerin ipuçları bulunuyor. Evinize harika bir renk
            patlaması katacak bir taş arıyorsanız, mavi mermer mükemmel bir
            seçimdir.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarMermerMavi[0].map((tas, index) => {
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
        </div>
      </div>
    </>
  );
};

export default DogalTaslarMermerMavi;
