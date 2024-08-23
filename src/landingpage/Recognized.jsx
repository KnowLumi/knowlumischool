import recog1 from "../assets/startupindia.png";
import recog2 from "../assets/startupmission.png";
const Recognized = () => {
  return (
    <div className="w-full flex items-center justify-center mb-12">
      <div className="bg-white rounded-2xl w-full max-w-5xl flex flex-col items-center py-8">
        <span className="font-medium text-lg">Recognized by</span>
        <div className="flex flex-wrap mt-6 items-center lg:gap-24">
          <img src={recog1} className="h-20 md:h-28 lg:h-36" alt="" />
          <img src={recog2} className="h-20 md:h-28 lg:h-36" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Recognized;
