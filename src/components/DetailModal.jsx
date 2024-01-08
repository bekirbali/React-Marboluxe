const DetailModal = ({ image, setModal }) => {
  return (
    <div className="overflow-hidden">
      <div
        onClick={() => setModal(false)}
        className="absolute w-[100vw] min-h-[100%] bg-[#0f0f0fa2] top-0 z-10 overflow-hidden"
      ></div>

      <div className="absolute flex items-center justify-center w-[70%] left-[50%] top-[40%] translate-x-[-50%] translate-y-[-50%] z-20">
        <button
          onClick={() => setModal(false)}
          className="absolute right-[22%] top-2 border-2 border-blue-900 rounded-full w-5 h-5 flex items-center justify-center z-30"
        >
          X
        </button>
        <img src={image} alt="test" className="w-[800px] max-h-[550px]" />
      </div>
    </div>
  );
};

export default DetailModal;
