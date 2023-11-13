import { dogalTaslarMermerKahverengi } from "../../../utils";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SideBar from "../../../components/SideBar";

const DogalTaslarMermerKahverengi = () => {
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
            Kahverengi Mermer Çeşitleri ve Modelleri
          </h1>
          <p className="xl:pl-8 xl:m-4 py-4 pb-8 text-[#777777]">
            <span className="font-bold">Kahverengi mermer</span>, evinizin
            görünümünü daha iyi hale getirecek güzel bir doğal taştır. İster
            açık kahverengi mermer ister koyu kahverengi mermer arıyor olun,
            size hitap edecek bir şey var. Bu taşın farklı türleri, taşın
            kahverengi arka planına karşı öne çıkan muhteşem damarlara sahiptir.
            Kahverengi mermer, kahverengi mermer tezgahlar, ters sıçramalar,
            makyaj tezgahları ve daha fazlası için iyi çalışacaktır. Her yerde,
            bu taş evinize eklemek için harika bir seçimdir.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarMermerKahverengi[0].map((tas, index) => {
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

export default DogalTaslarMermerKahverengi;
