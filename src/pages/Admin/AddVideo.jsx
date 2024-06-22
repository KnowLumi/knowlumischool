import { Button, Select, Option } from "@material-tailwind/react"
import { useLocation } from "react-router-dom"
const AddVideo = () => {
  const { state } = useLocation();
  const { data } = state;
  console.log(data);
  return (
    <div className="flex flex-col gap-9 px-9 py-8 h-screen w-full overflow-y-scroll">
      <h1 className="font-bold text-4xl">Add Video</h1>
      <form action="" className="flex flex-col w-full gap-9">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-4">
              <label
                htmlFor="name"
                className="block text-[16px] font-bold text-[#2D2D2DCC]"
              >
                Video Name
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
                className={`block text-[16px] font-bold ${data ? "text-[#2D2D2DAA]" : "text-[#2D2D2DCC]"} `}
              >
                Video Order(Number)
              </label>
              <input
                type="tel"
                name="date"
                id="date"
                placeholder="Enter Name"
                disabled={data}
                className="mt-1 px-3  py-2 border border-[#2D2D2D33] rounded-md shadow-sm focus:outline-none focus:ring-[#2D2D2D] focus:border-[#2D2D2D] placeholder:text-[#2D2D2DCC] sm:text-sm w-[30rem]"
                required
              />
            </div>
            <div className="gap-4 flex flex-col items-start">
              <label
                htmlFor="uploadVideo"
                className="block text-[16px] font-bold text-[#2D2D2DCC]"
              >
                Upload Video
              </label>
              <input
                type="file"
                name="uploadVideo"
                id="uploadVideo"
                placeholder="Enter Company Name"
                className="company_logo_input bg-white mt-1 w-full border border-[#2D2D2D33] rounded-xl shadow-sm focus:outline-none focus:ring-[#2D2D2D] focus:border-[#2D2D2D] placeholder:text-[#2D2D2DCC] sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-4">
              <label
                htmlFor="category"
                className="block text-[16px] font-bold text-[#2D2D2DCC]"
              >
                Category
              </label>
              <Select
                id="category"
                name="category"
                label="Select Category"
                labelProps={{
                  className: "hidden",
                }}
                className="!border !border-gray-300 font-archivo placeholder:font-archivo bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100"
              >
                <Option defaultChecked className="text-[#2D2D2DCC] font-archivo">
                  Fundamentals
                </Option>
                <Option className="text-[#2D2D2DCC] font-archivo">Track-1</Option>
              </Select>
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="review"
                className="block text-[16px] font-bold text-[#2D2D2DCC]"
              >
                Description
              </label>
              <textarea
                name="review"
                id="review"
                placeholder="Enter description"
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
  )
}

export default AddVideo