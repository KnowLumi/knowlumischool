import recog1 from "../assets/recog1.png";
import recog2 from "../assets/recog2.png";
const Recognized = () => {
  return (
    <div className="w-full flex items-center justify-center mb-12">
      <div className="bg-white rounded-2xl w-fit flex flex-col items-center py-8">
        <span className="font-medium text-lg">Recognized by</span>
        <div className="flex flex-wrap mt-6">
          <img src={recog1} alt="" />
          <img src={recog2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Recognized;
