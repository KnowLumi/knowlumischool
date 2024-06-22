import { Button } from "@material-tailwind/react";
import { mentorForm } from "../helpers/adminhelper";
const AddMentor = () => {
  return (
    <div className="flex flex-col gap-9 px-11 py-8 w-full h-screen overflow-y-scroll">
      <h1 className="font-bold text-4xl">Add Mentor</h1>
      <form action="" className="flex flex-col gap-8 w-full">
        <div className="flex flex-wrap gap-8">
          {mentorForm.map((item, i) => (
            <div key={`std_input_${i + 1}`} className="flex flex-col gap-5">
              <label
                htmlFor={item.name}
                className="block text-[16px] font-bold text-[#2D2D2DCC]"
              >
                {item.label}
              </label>
              {item.type === "textarea" ? (
                <textarea
                  name={item.name}
                  id={item.name}
                  placeholder={item.placeholder}
                  className="mt-1 px-3 resize-none max-h-[9.75rem] review_input py-2 border border-[#2D2D2D33] rounded-md shadow-sm focus:outline-none focus:ring-[#2D2D2D] focus:border-[#2D2D2D] placeholder:text-[#2D2D2DCC] sm:text-sm w-[30rem]"
                />
              ) : (
                <input
                  type={item.type}
                  name={item.name}
                  id={item.name}
                  placeholder={item.placeholder}
                  className={`mt-1   border border-[#2D2D2D33] rounded-lg shadow-sm focus:outline-none focus:ring-[#2D2D2D] focus:border-[#2D2D2D] placeholder:text-[#2D2D2DCC] sm:text-sm ${
                    item.type === "file" ? "w-fit company_logo_input" : "w-[30rem] px-3 py-2"
                  }`}
                  required
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Button className="rounded-md py-2  font-archivo font-bold tracking-wider text-lg uppercase bg-[#00A156] text-white">
            SUBMIT
          </Button>
          <Button className="rounded-md py-2  font-archivo font-bold tracking-wider text-lg capitalize bg-[#2D2D2D] text-white">
            Go Back
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddMentor;
