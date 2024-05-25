import logo1 from "../assets/navlogo.png";
const OtpPage = () => {
  return (
    <div className="flex w-full h-full bg-[#F7F7F7]">
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-7">
          <img
            src={logo1}
            alt=""
            className="object-contain w-[126px] h-[34px] md:w-[169px] md:h-[46px]"
          />
          <h1 className="font-medium text-4xl tracking-wide">Transform dreams into reality</h1>
        </div>
        <div className="bg-white flex flex-col items-center px-6 py-8 rounded-xl h-[17.25rem] justify-between"> 
            <h6 className="font-medium text-lg tracking-wide">Login/Sign Up</h6>
            <span className="w-full h-[1px] bg-[#D9D9D9]"></span>
            <div className="gap-7">
                <span className="font-normal text-sm">Mobile Number</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
