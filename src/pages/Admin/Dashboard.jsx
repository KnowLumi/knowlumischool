import { Button, Progress } from "@material-tailwind/react";
import { MdAddBox, MdKeyboardDoubleArrowRight } from "react-icons/md";
const TABLE_HEAD = ["Name", "Mobile No.", "Email", "Registered on","Actions"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },

];
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-9 px-11 py-8 h-screen overflow-y-scroll">
      <h1 className="font-bold text-4xl">Dashboard</h1>
      <div className="flex gap-6 items-center">
        <div className="flex items-center bg-[#297045] w-80 justify-between rounded-xl py-4 px-6">
          <div className="flex flex-col text-white">
            <span className="font-bold text-[16px] tracking-wider">
              Total Students
            </span>
            <h1 className="font-extrabold text-3xl tracking-wider">128</h1>
          </div>
          <Button className="bg-[#DDE8B9] text-[#2D2D2D] font-archivo rounded-lg flex items-center gap-2.5 p-3">
            <span className="capitalize font-semibold text-xs">Add User</span>
            <MdAddBox className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex items-center bg-[#297045] w-80 justify-between rounded-xl py-4 px-6">
          <div className="flex flex-col text-white">
            <span className="font-bold text-[16px] tracking-wider">
              Total Mentors
            </span>
            <h1 className="font-extrabold text-3xl tracking-wider">8</h1>
          </div>
          <Button className="bg-[#DDE8B9] text-[#2D2D2D] font-archivo rounded-lg flex items-center gap-2.5 p-3">
            <span className="capitalize font-semibold text-xs">Add Mentor</span>
            <MdAddBox className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex items-center bg-[#297045] w-80 justify-between rounded-xl py-4 px-6">
          <div className="flex flex-col text-white">
            <span className="font-bold text-[16px] tracking-wider">
              Total Categories
            </span>
            <h1 className="font-extrabold text-3xl tracking-wider">5</h1>
          </div>
          <Button className="bg-[#DDE8B9] text-[#2D2D2D] font-archivo rounded-lg flex items-center gap-2.5 p-3">
            <span className="capitalize font-semibold text-xs">View All</span>
          </Button>
        </div>
      </div>
      <div className="rounded-2xl flex flex-col p-9 gap-6 bg-white">
        <span className="font-bold text-[16px] text-[#2D2D2D]">
          Master Tracks Enrollment Breakdown
        </span>
        <h1 className="font-bold text-4xl text-[#2D2D2D]">106 Students</h1>
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-3.5">
            <span className="font-light text-[#2D2D2D] text-[#01010199] text-sm">
              Track 1 - Full-Stack Development with MERN Stack
            </span>
            <Progress size="sm" value={50} color="amber" />
          </div>
          <div className="flex flex-col gap-3.5">
            <span className="font-light text-[#2D2D2D] text-[#01010199] text-sm">
              Track 2 - UI/UX designing
            </span>
            <Progress size="sm" value={30} color="amber" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full ">
        <span className=" text-[#2D3648] font-semibold text-2xl">
          New Users
        </span>
        <div className="flex items-center gap-2 text-[#297045]">
          <span className="font-semibold text-sm">VIEW ALL USERS</span>
          <MdKeyboardDoubleArrowRight />
        </div>
      </div>

      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b-2 border-[#2D2D2D33] bg-[#EBF2D4] p-4"
              >
                <span className="font-light text-sm text-[#2D2D2D] leading-none opacity-70">
                  {head}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={name}>
                <td className={classes}>
                  <span className="font-light text-sm text-[#2D2D2D]">{name}</span>
                </td>
                <td className={classes}>
                  <span className="font-light text-sm text-[#2D2D2D]">{job}</span>
                </td>
                <td className={classes}>
                  <span className="font-light text-sm text-[#2D2D2D]">{date}</span>
                </td>
                <td className={classes}>
                  <span className="font-medium">Edit</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
