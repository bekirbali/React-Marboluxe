import React, { useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Buttons = ({ page, setPage }) => {
  const backHandler = () => {
    if (page === 0) {
      console.log("firstPage");
      return;
    }
    setPage(page - 1);
    return;
  };

  const nextHandler = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const a = window.location.href.toString().split("-")[1][0].toUpperCase();
    const b = window.location.href.toString().split("-")[1];
    console.log(`${a}${b.slice(1)}`);
  }, []);

  return (
    <>
      <BsFillArrowLeftCircleFill size={24} color="gray" onClick={backHandler} />
      <BsFillArrowRightCircleFill
        size={24}
        color="gray"
        onClick={nextHandler}
      />
    </>
  );
};

export default Buttons;
