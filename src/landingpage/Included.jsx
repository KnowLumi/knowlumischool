import { included } from "./whats_included";

const Included = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-8 w-[71rem] bg-white p-5 rounded-2xl">
        <h2 className="font-bold text-3xl text-[#4258BE] tracking-wide ">
          What&apos;s Included?
        </h2>
        <div className="flex w-[63.5rem] justify-between items-center">
          {included.map((item, i) => (
            <div
              key={`included-${i + 1}`}
              className={`rounded-xl p-4 flex flex-col gap-6 bg-[${item.bg}]`}
            >
              <div className="flex gap-4 items-center">
                <i
                  className={`rounded-full bg-[${item.color}] p-2.5 flex justify-center items-center`}
                >
                  {item.logo}
                </i>
                <span className="font-normal text-sm tracking-wide text-[#010101CC] w-[8.75rem]">
                  {item.title}
                </span>
              </div>
              <span className="w-full h-[1px] bg-[#0101011A]"></span>
              <ul className="flex flex-col gap-3.5">
                {item.points.map((point, index) => (
                  <li
                    key={`included-point-${index}`}
                    className="flex gap-1 items-center"
                  >
                    <i className="py-0.5 px-2.5">{point.icon}</i>
                    <span className="font-light text-xs tracking-wider">
                      {point.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Included;
