import { Button } from "@material-tailwind/react";
import banner from "./LoginBanner.png";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/home/dashboard");
  };
  return (
    <div
      style={{ backgroundImage: `url('${banner}')` }}
      className="w-full h-screen bg-contain bg-no-repeat p-12 flex justify-between items-center"
    >
      <img src={logo} className="w-[21.5rem]  " alt="" />
      <div className="flex flex-col py-8 px-6 gap-7">
        <h1 className="text-[#2D2D2D] text-[28px] font-bold tracking-wide">
          ADMIN LOGIN
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-7 border-t border-t-[#2D2D2D1A] pt-7">
          <div className="flex flex-col gap-3 w-[23.25rem]">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#2D2D2D]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@example.com"
              className="mt-1 px-3  py-2 border border-[#2D2D2D33] rounded-md shadow-sm focus:outline-none focus:ring-[#2D2D2D] focus:border-[#2D2D2D] placeholder:text-[#2D2D2DCC] sm:text-sm "
              required
            />
          </div>
          <div className="flex flex-col gap-3 w-[23.25rem]">
            <label
              htmlFor="Password"
              className="block text-sm font-semibold text-[#2D2D2D]"
            >
              Password
            </label>
            <input
              type="password"
              name="Password"
              id="Password"
              className="mt-1 px-3  py-2 border border-[#2D2D2D33] rounded-md shadow-sm focus:outline-none focus:ring-[#2D2D2D] focus:border-[#2D2D2D] placeholder:text-[#2D2D2DCC] sm:text-sm "
              required
            />
          </div>
          <Button
            type="submit"
            className="font-archivo font-semibold text-white text-[16px] bg-[#2D2D2D] rounded-md"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
