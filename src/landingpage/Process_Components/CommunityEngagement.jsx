import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { community } from "./process_helpers";
import { MdKeyboardDoubleArrowRight, MdArrowForward } from "react-icons/md";
import { Button, Avatar } from "@material-tailwind/react";

const CommunityEngagement = () => {
  
  return (
    <div className="flex flex-col w-full h-fit md:-translate-y-0 mt-8 md:mt-24">
      <div className="flex items-center gap-7 -translate-x-12 md:-translate-x-20 -mt-12">
        <div className="rounded-full  min-h-10 min-w-10 md:min-w-[52px] md:min-h-[52px] bg-[#4258BE] flex justify-center items-center text-white font-extrabold">
          2
        </div>
        <h1 className="font-normal text-4xl md:text-[42px]  md:w-[800px] w-fit">
          Community Engagement
        </h1>
      </div>
      <p className="w-52 md:w-[32rem] text-xs font-light tracking-wider mt-6 text-left">
      Join a vibrant network of like-minded individuals, gain access to mentorship from seasoned professionals, and unlock opportunities that fuel collective growth. Our community is designed to help you thrive, whether you're a student, professional, or aspiring entrepreneur.
      </p>
      <div className="mt-9 flex flex-col gap-4">
        <h3 className=" text-left text-[#4258BE] font-semibold text-xl">Hackathons , Ideathons and more 
        </h3>
        <span className="font-light text-xs w-fit tracking-wider text-black text-left">
        Put your skills to the test and solve real-world challenges in our Hackathons and Ideathons. These events help you:
        </span>
        <ul className="text-left font-light text-xs tracking-wider">
        <li className="list-disc">Collaborate with peers and industry leaders.</li>
        <li className="list-disc">Gain hands-on experience and boost your problem-solving abilities.</li>
        <li className="list-disc">Earn rewards and recognition for innovative solutions.</li>

        </ul>
        <div className="bg-white rounded-2xl p-4 w-56 md:w-[27rem] md:h-[10rem] flex flex-col justify-center">
          <Fade
            arrows={false}
            infinite
            autoplay
            duration={1000}
            easing="linear"
          >
            {community.map((item, index) => (
              <div
                key={index}
                className="bg-cover relative flex flex-col gap-4 md:mx-0 justify-end bg-center object-cover rounded-lg w-48 h-[8.25rem] md:w-[24.5rem] md:h-[9rem]"
                style={{ backgroundImage: `url('${item.image}')` }}
              >
                <div className="flex items-center w-fit rounded-md ml-2.5 mb-2.5 p-2 gap-2 bg-gradient-to-r from-[#FFFFFF24] to-[#FFFFFF2E]">
                  <span className="font-medium text-xs text-white">
                    {item.title}
                  </span>
                  <MdKeyboardDoubleArrowRight className="w-3.5 h-3.5 text-[#88DB1B]" />
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
      <div className="mt-9 flex flex-col gap-4">
        <h3 className="text-[#4258BE] text-left font-semibold text-xl">Masterclasses</h3>
        <span className="font-light text-xs tracking-wider text-black w-60 md:w-fit">
        Enhance your expertise with masterclasses taught by top industry professionals.
        </span>
        <div className="flex gap-3.5 items-center">
          <svg
            width="21"
            height="14"
            viewBox="0 0 21 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8517 1.18379C14.8314 1.20174 13.8484 1.57043 13.0681 2.22789C12.2877 2.88534 11.7574 3.79145 11.5666 4.79385C10.6085 3.30477 9.85802 1.69195 9.33594 0H7.1249V5.87002C7.1249 6.42529 6.90432 6.95781 6.51169 7.35045C6.11906 7.74308 5.58653 7.96366 5.03126 7.96366C4.47599 7.96366 3.94347 7.74308 3.55083 7.35045C3.1582 6.95781 2.93762 6.42529 2.93762 5.87002V0L0.716797 0.0489166V5.91894C0.723284 7.06061 1.18303 8.15295 1.9949 8.95564C2.80678 9.75834 3.90426 10.2056 5.04594 10.1992C6.18761 10.1927 7.27995 9.73293 8.08264 8.92105C8.88534 8.10918 9.33265 7.01169 9.32616 5.87002V4.89168C9.79556 5.81237 10.3352 6.69549 10.9404 7.53319L9.59031 14H11.8601L12.8384 9.2942C13.7451 9.87689 14.8033 10.1797 15.881 10.1649C17.0668 10.1649 18.204 9.69387 19.0425 8.85539C19.881 8.01692 20.352 6.8797 20.352 5.69392C20.352 4.50814 19.881 3.37092 19.0425 2.53245C18.204 1.69397 17.0668 1.22292 15.881 1.22292L15.8517 1.18379ZM15.8517 7.86583C14.9324 7.83614 14.0513 7.49064 13.3569 6.88749L13.5819 5.9972V5.94829C13.7385 4.96995 14.2276 3.40461 15.881 3.40461C16.1709 3.40203 16.4585 3.45674 16.7272 3.5656C16.9958 3.67445 17.2404 3.83531 17.4467 4.03894C17.6531 4.24257 17.8172 4.48495 17.9296 4.75217C18.042 5.01939 18.1006 5.30618 18.1018 5.59609C18.0809 6.18306 17.8416 6.74107 17.4308 7.16088C17.0201 7.5807 16.4674 7.83208 15.881 7.86583H15.8517Z"
              fill="#88DB1B"
            />
          </svg>
          <span className="font-light text-sm"><span className="font-bold">Freelance Sessions:</span> Learn skills that open doors to freelance opportunities.
          </span>
        </div>
        <div className="flex gap-3.5 items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2632 16.3139H1.89474V4.73702H8.52632V2.84229H1.89474C0.852632 2.84229 0 3.69492 0 4.73702V16.1054C0 17.1475 0.852632 18.0002 1.89474 18.0002H13.2632C14.3053 18.0002 15.1579 17.1475 15.1579 16.1054V9.47386H13.2632V16.3139Z"
              fill="#88DB1B"
            />
            <path
              d="M15.1575 0H13.2627V2.84211H10.4206C10.4301 2.85158 10.4206 4.73684 10.4206 4.73684H13.2627V7.56947C13.2722 7.57895 15.1575 7.56947 15.1575 7.56947V4.73684H17.9996V2.84211H15.1575V0ZM3.78906 6.63158H11.368V8.52632H3.78906V6.63158ZM3.78906 9.47368V11.3684H11.368V9.47368H8.5259H3.78906ZM3.78906 12.3158H11.368V14.2105H3.78906V12.3158Z"
              fill="#88DB1B"
            />
          </svg>

          <span className="font-light text-sm"><span className="font-bold">Skill Add-ons:</span> Stay ahead by mastering niche skills and technologies.</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-fit gap-8 items-center mt-9">
        <Button className="rounded-full flex items-center gap-3 capitalize font-archivo font-medium text-[16px] bg-black text-white py-1 pr-1 pl-6">
          Join Our Community
          <i className="flex w-8 h-8 text-white -rotate-45 border border-[#0101010D] bg-[#FFFFFF4D] justify-center items-center rounded-full">
            <MdArrowForward />
          </i>
        </Button>
        <div className="flex items-center gap-5">
          <div className="flex items-center -space-x-2">
            {new Array(3).fill("").map((_, i) => (
              <Avatar
                variant="circular"
                key={i}
                size="xs"
                alt="user 1"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
            ))}
          </div>
          <span className="font-medium text-[10px] md:text-xs underline">
            400+ community members
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommunityEngagement;
