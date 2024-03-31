import line from "../assets/enroll_line.png";
import people from "../assets/people.png";
import "./landing.css";
const Action = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col w-full items-center">
      <div className="w-[71rem] h-[22rem] action-banner flex bg-contain bg-no-repeat">
        <div
            style={{ backgroundImage: `url('${people}')` }}
          className="bg-contain bg-no-repeat w-[22rem] flex flex-col justify-end rounded-l-2xl  h-[19.1rem] translate-y-[2.8rem]"
        ></div>
      </div>
      <div
        style={{ backgroundImage: `url('${line}')` }}
        className="w-[71rem] h-20 bg-contain bg-no-repeat flex flex-col justify-end"
      >
        <i className="w-4 h-4 rounded-full bg-[#88DB1B] translate-x-[70rem] -translate-y-[4rem] enroll-anime"></i>
      </div>
    </div>
  );
};

export default Action;
