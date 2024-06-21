import { Button } from "@material-tailwind/react";
const AddReview = () => {
  return (
    <div className="flex flex-col gap-9 px-9 py-8 h-screen w-full overflow-y-scroll">
      <h1 className="font-bold text-4xl">Add Review</h1>
      <form action="" className="flex flex-col w-full gap-9">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-4">
              <label
                htmlFor="name"
                className="block text-[16px] font-bold text-[#2D2D2DCC]"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                className="mt-1 px-3  py-2 border border-[#2D2D2D33] rounded-md shadow-sm focus:outline-none focus:ring-[#2D2D2D] focus:border-[#2D2D2D] placeholder:text-[#2D2D2DCC] sm:text-sm w-[30rem]"
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="date"
                className="block text-[16px] font-bold text-[#2D2D2DCC]"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="Enter Name"
                className="mt-1 px-3  py-2 border border-[#2D2D2D33] rounded-md shadow-sm focus:outline-none focus:ring-[#2D2D2D] focus:border-[#2D2D2D] placeholder:text-[#2D2D2DCC] sm:text-sm w-[30rem]"
                required
              />
            </div>
            <div className="gap-4 flex flex-col items-start">
              <label
                htmlFor="companyLogo"
                className="block text-[16px] font-bold text-[#2D2D2DCC]"
              >
                Upload Picture
              </label>
              <input
                type="file"
                name="companyLogo"
                id="companyLogo"
                accept="image/png"
                placeholder="Enter Company Name"
                className="company_logo_input bg-white mt-1 w-full border border-[#2D2D2D33] rounded-xl shadow-sm focus:outline-none focus:ring-[#2D2D2D] focus:border-[#2D2D2D] placeholder:text-[#2D2D2DCC] sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-4">
              <label
                htmlFor="name"
                className="block text-[16px] font-bold text-[#2D2D2DCC]"
              >
                Master Track
              </label>
              <select
                name="master_track"
                id="master_track"
                className="mt-1 px-3 py-2 border border-[#2D2D2D33] rounded-md shadow-sm focus:outline-none focus:ring-[#2D2D2D] focus:border-[#2D2D2D] placeholder:text-[#2D2D2DCC] sm:text-sm w-[30rem] text-black"
                required
              >
                <option value="" disabled selected>
                  Select category
                </option>
                <option value="EEE">EEE</option>
              </select>
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="review"
                className="block text-[16px] font-bold text-[#2D2D2DCC]"
              >
                Review
              </label>
              <textarea
                name="review"
                id="review"
                placeholder="Enter Review"
                className="mt-1 px-3 resize-none review_input py-2 h-40 border border-[#2D2D2D33] rounded-md shadow-sm focus:outline-none focus:ring-[#2D2D2D] focus:border-[#2D2D2D] placeholder:text-[#2D2D2DCC] sm:text-sm w-[30rem]"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button type="submit" className="rounded-md py-2  font-archivo font-bold tracking-wider text-lg uppercase bg-[#00A156] text-white">
            SUBMIT
          </Button>
          <Button className="rounded-md py-2  font-archivo font-bold tracking-wider text-lg capitalize bg-[#2D2D2D] text-white">
            Go Back
          </Button>
        </div>
      </form>
      <h3 className="flex justify-center font-bold text-[#2D2D2D66] text-[10px] tracking-widest">
        ©2024 Knowlumi. All Rights Reserved
      </h3>
    </div>
  );
};

export default AddReview;
