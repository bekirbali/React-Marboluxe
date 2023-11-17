import React, { useContext, useEffect, useState } from "react";
import { urunlerDekoratif } from "../../../utils";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import SideBar from "../../../components/SideBar";
import { MarboContext } from "../../../context/MarboContext";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const UrunlerDekoratif = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const { setWaterjet, setCnc, setDekoratifUrunler } = useContext(MarboContext);

  const backHandler = () => {
    if (page === 0) {
      console.log("firstPage");
      return;
    }
    setPage(page - 1);
    return;
  };

  const nextHandler = () => {
    if (page === urunlerDekoratif.length - 1) {
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
  //     if (page === urunlerDekoratif.length - 1) {
  //       console.log("lastPage");
  //       return;
  //     }
  //     setPage(page + 1);
  //   }
  // };

  useEffect(() => {
    setWaterjet(false);
    setCnc(false);
    setDekoratifUrunler(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="h-[120px] items-center flex-wrap flex flex-col justify-around md:items-start bg-[#f1f1f1] pl-24">
        <h2>Ürünler</h2>
        <div className="flex justify-center items-center flex-wrap gap-1">
          <Link to="/">Marboluxe</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <Link to="/urunler">Ürünler</Link>
          <MdKeyboardDoubleArrowRight
            className="mt-1 hover:cursor-default arrow-right"
            size={12}
          />
          <p>Dekoratif Ürünler</p>
        </div>
      </div>
      <div className="main-holder-dogalTas flex justify-between w-[90%] mx-auto ">
        <div className="flex-[1] ">
          <SideBar />
        </div>

        <div className="p-4 flex flex-col items-center flex-[4]">
          <h1 className="text-center text-3xl font-bold my-4">
            Ürünler Dekoratif
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4">
            {urunlerDekoratif[page].map((tas, index) => {
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
            {urunlerDekoratif.map((item, index) => (
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
              Dekoratif Ürünler
            </h2>
            <p className="text-[#777777]">
              Mermer, doğal taşlar arasındaki en gösterişli malzemelerden
              biridir. Bu olağanüstü malzeme günümüzde yalnızca duvar kaplama
              veya yer kaplama malzemesi olarak kullanılmaz. Ev içerisindeki
              dekorasyonda da mermer kullanımı oldukça yaygınlaşmıştır. Modern,
              klasik veya özel tasarım mermer dekoratif ürünler ile yaşam
              alanlarınıza farklı dokunuşlar yapabilirsiniz. Marboluxe Stone;
              sadece mermer değil traverten gibi doğal taşlardan da aksesuar
              tasarımları yapmaktadır. İster evinize ister ofisinizin bir
              köşesine mükemmel bir şekilde uyabilecek özel tasarım mermer
              ürünler, doğadan evlerinize gelmektedir. Mermerin göz alıcı
              dokusunu zamansız tasarımları ve usta işçiliği ile harmanlayıp
              mekanlara şıklık getiren Marboluxe Stone aksesuar çeşitliliği ile
              de dikkat çekmektedir. Aplik, kolon, süpürgelik, kurna, söve, duş
              teknesi, korkuluk ve bahçe süslemesi gibi aksesuar üretimlerinde
              mermerin yanı sıra dekoratif traverten ürünlerde üretilmektedir.
              <ul>
                <li>* Mermer Süpürgelik</li>
                <li>* Mermer Kolon</li>
                <li>* Mermer Kurna</li>
                <li>* Mermer Sütun</li>
                <li>* Mermer Korkuluk</li>
                <li>* Mermer Söve</li>
                <li>* Traverten Duş Teknesi</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UrunlerDekoratif;
