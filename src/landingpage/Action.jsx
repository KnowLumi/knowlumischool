import "./landing.css";
const Action = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col w-full mb-12 items-center">
      <div className="w-[71rem] h-[22rem] action-banner hidden md:flex flex-col bg-contain bg-no-repeat">
        <div className="w-full flex justify-end gap-8 items-center pr-8 py-3.5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M0 0L5.63847 8L0 16H2.76285L8.40133 8L2.76285 0H0ZM6.70978 0L12.3483 8L6.70978 16H9.47264L15.1111 8L9.47264 0H6.70978Z"
              fill="#F7F7F7"
            />
          </svg>
          <i className="bg-[#F7F7F7] h-8 rounded-full w-12 flex justify-center items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-pulse"
            >
              <path
                d="M0 0L5.63847 8L0 16H2.76285L8.40133 8L2.76285 0H0ZM6.70978 0L12.3483 8L6.70978 16H9.47264L15.1111 8L9.47264 0H6.70978Z"
                fill="#010101"
              />
            </svg>
          </i>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L5.63847 8L0 16H2.76285L8.40133 8L2.76285 0H0ZM6.70978 0L12.3483 8L6.70978 16H9.47264L15.1111 8L9.47264 0H6.70978Z"
              fill="#F7F7F7"
            />
          </svg>
        </div>
        {/* <div
          style={{ backgroundImage: `url('${people}')` }}
          className="bg-contain bg-no-repeat w-[22rem] flex flex-col justify-end rounded-l-2xl  h-[19.1rem] translate-y-[2.8rem]"
        ></div> */}
      </div>
      <div className="action-line w-80 md:w-[71rem] h-7 md:h-20 bg-cover md:bg-contain bg-no-repeat flex flex-col justify-end mt-8">
        <i className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#88DB1B] enroll-anime"></i>
      </div>
    </div>
  );
};

export default Action;
