const DetailModal = ({ image, setModal }) => {
  return (
    <>
      <div
        onClick={() => setModal(false)}
        className="absolute w-[100vw] min-h-[100%] bg-[#0f0f0fa2] top-0 z-10 overflow-hidden"
      ></div>

      <div className="absolute flex items-center justify-center w-[70%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
        <button
          onClick={() => setModal(false)}
          className="button-close-modal z-50"
        >
          <span className="x-modal"></span>
          <span className="y-modal"></span>
          <div className="close-modal">Close</div>
        </button>
        <img src={image} alt="test" className="w-[800px] max-h-[550px]" />
      </div>
    </>
  );
};

export default DetailModal;
