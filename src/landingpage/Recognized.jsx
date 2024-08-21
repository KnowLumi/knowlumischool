import recog1 from "../assets/recog1.jpg";
import recog2 from "../assets/recog2.jpg";
const Recognized = () => {
  return (
    <div className="w-full flex items-center justify-center mb-12">
      <div className="bg-white rounded-2xl w-fit flex flex-col items-center py-8">
        <span className="font-medium text-lg">Recognized by</span>
        <div className="flex flex-wrap mt-6">
          <img src={"https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/recognised-by-logos.png"} className="h-20 md:h-28 object-contain" alt="" />
          {/* <img src={recog2} className="h-20 md:h-28" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Recognized;
