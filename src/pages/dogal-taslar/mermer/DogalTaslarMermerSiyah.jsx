import { dogalTaslarMermerSiyah } from "../../../utils";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SideBar from "../../../components/SideBar";

const DogalTaslarMermerSiyah = () => {
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumbs />
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4]">
          <h1 className="text-center text-3xl font-bold my-4">Siyah Mermer</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-4 ">
            {dogalTaslarMermerSiyah[0].map((tas, index) => {
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
                      className="w-full h-[250px] hover:scale-[1.15] transition duration-700 hover:cursor-pointer"
                    />
                  </div>
                  <p className="text-center p-2">{tas.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DogalTaslarMermerSiyah;
