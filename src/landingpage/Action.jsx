import line from "../assets/enroll_line.png";
import people from "../assets/people.png";
import "./landing.css";
const Action = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col w-full my-8 items-center">
      <div className="w-[71rem] h-[22rem] action-banner hidden md:flex bg-contain bg-no-repeat">
        <div
          style={{ backgroundImage: `url('${people}')` }}
          className="bg-contain bg-no-repeat w-[22rem] flex flex-col justify-end rounded-l-2xl  h-[19.1rem] translate-y-[2.8rem]"
        ></div>
      </div>
      <div
        style={{ backgroundImage: `url('${line}')` }}
        className="w-80 md:w-[71rem] h-5 md:h-20 ml-5 md:ml-0 bg-contain bg-no-repeat flex flex-col justify-end"
      >
        <i className="w-1 md:w-4 h-1 md:h-4 rounded-full bg-[#88DB1B] enroll-anime"></i>
      </div>
    </div>
  );
};

export default Action;
