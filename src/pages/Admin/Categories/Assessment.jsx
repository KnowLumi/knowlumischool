import { Button } from "@material-tailwind/react";
import { assessment } from "../../helpers/learninghelpers";
import "./categories.css";
const Assessment = () => {
  return (
    <div className="bg-white w-full categories rounded-xl overflow-y-scroll h-[36rem] p-9">
      <form className="flex flex-col gap-5">
        {assessment.map((item, i) => (
          <div
            key={`assessment_q_${i + 1}`}
            className="flex flex-col gap-4 pt-6"
          >
            <div className="flex items-start text-xs gap-1.5">
              <span className="font-semibold tracking-wider">{i + 1}.</span>
              <p className="font-light tracking-wider">{item.question}</p>
            </div>
            <div className="flex flex-col px-7 gap-1">
              {item.options.map((option, j) => (
                <div
                  key={`q${i + 1}_option_${j + 1}`}
                  className="flex items-center py-2 px-4 text-xs"
                >
                  <input
                    type="radio"
                    id={`question${i}_option${j}`}
                    name={`question${i}`}
                    value={j}
                    className="mr-2 checked:bg-[#4258BE] w-4 h-4 cursor-pointer"
                  />
                  <label
                    className="font-light text-xs tracking-wider"
                    htmlFor={`question${i}_option${j}`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="flex items-center gap-5 text-white">
            <Button className="capitalize font-archivo font-bold text-sm rounded-md bg-[#00A156] px-12">Save Changes</Button>
            <Button className="capitalize font-archivo font-bold text-sm rounded-md bg-[#FF9F1C] px-12">Edit Assessment</Button>
        </div>
      </form>
    </div>
  );
};

export default Assessment;
