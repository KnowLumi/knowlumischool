import { companies } from "./landing_helpers";
const Companies = () => {
  return (
    <div>
      <marquee direction="right">
        <div className="w-full flex items-center">
          {companies.map((item, index) => (
            <>
              <img key={index} src={item} alt="" className="w-20 h-full" />
            </>
          ))}
        </div>
      </marquee>
      <span>Learn More</span>
    </div>
  );
};

export default Companies;
