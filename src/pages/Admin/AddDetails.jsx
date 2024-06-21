import { Button } from "@material-tailwind/react";
import { studentForm } from "../helpers/adminhelper";

const AddDetails = () => {
  return (
    <div className="flex flex-col gap-9 px-11 py-8 h-screen overflow-y-scroll">
      <h1 className="font-bold text-4xl">Add Student</h1>
      <form action="" className="flex gap-8 items-center flex-wrap">
        {studentForm.map((item, i) => (
          <div key={`std_input_${i + 1}`} className="flex flex-col gap-5">
            <label
              htmlFor={item.name}
              className="block text-[16px] font-bold text-[#2D2D2DCC]"
            >
              {item.label}
            </label>
            <input
              type={item.type}
              name={item.name}
              id={item.name}
              placeholder={item.placeholder}
              className="mt-1 px-3 file:bg-[#2D2D2D1A] file:border-[#2D2D2D66] file:rounded-lg file:border-[1.5px] file:px-3 py-2 border border-[#2D2D2D33] rounded-md shadow-sm focus:outline-none focus:ring-[#2D2D2D] focus:border-[#2D2D2D] placeholder:text-[#2D2D2DCC] sm:text-sm w-[30rem]"
              required
            />
          </div>
        ))}
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

export default AddDetails;
