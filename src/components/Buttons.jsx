import ReactPaginate from "react-paginate";
import { plakalar } from "../utils";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export function PaginatedItems({ setPage }) {
  const pageCount = plakalar.length;

  const clickHandler = (e) => {
    if (e.event.target.innerText === "...") return;
    setPage(e.event.target.innerText - 1);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextClassName="next"
        previousClassName="prev"
        nextLabel={<BsFillArrowRightCircleFill size={24} color="gray" />}
        previousLabel={<BsFillArrowLeftCircleFill size={24} color="gray" />}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        pageClassName="pageClass"
        className="flex gap-4 mt-4 paginate max-w-sm"
        onClick={clickHandler}
      />
    </>
  );
}
