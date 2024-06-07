import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Carousel } from "@material-tailwind/react";
import logo1 from "../assets/navlogo.png";
import banner from "../assets/hero1.png";
import { countries } from "./otphelpers";
const OtpPage = () => {
  const formRef = useRef(null);
  const inputsRef = useRef([]);
  const submitRef = useRef(null);
  const frwdRef = useRef(null);

  const handleNumbSubmit = (e) => {
    e.preventDefault()
    frwdRef.current.click();
  }

  useEffect(() => {
    const handleKeyDown = (e, index) => {
      if (
        !/^[0-9]{1}$/.test(e.key) &&
        e.key !== "Backspace" &&
        e.key !== "Delete" &&
        e.key !== "Tab" &&
        !e.metaKey
      ) {
        e.preventDefault();
      }

      if (e.key === "Delete" || e.key === "Backspace") {
        if (index > 0) {
          inputsRef.current[index - 1].value = "";
          inputsRef.current[index - 1].focus();
        }
      }
    };

    const handleInput = (e, index) => {
      if (e.target.value) {
        if (index < inputsRef.current.length - 1) {
          inputsRef.current[index + 1].focus();
        } else {
          submitRef.current.focus();
        }
      }
    };

    const handleFocus = (e) => {
      e.target.select();
    };

    const handlePaste = (e) => {
      e.preventDefault();
      const text = e.clipboardData.getData("text");
      if (!new RegExp(`^[0-9]{${inputsRef.current.length}}$`).test(text)) {
        return;
      }
      const digits = text.split("");
      inputsRef.current.forEach(
        (input, index) => (input.value = digits[index])
      );
      submitRef.current.focus();
    };

    inputsRef.current.forEach((input, index) => {
      input.addEventListener("input", (e) => handleInput(e, index));
      input.addEventListener("keydown", (e) => handleKeyDown(e, index));
      input.addEventListener("focus", handleFocus);
      input.addEventListener("paste", handlePaste);
    });

    return () => {
      inputsRef.current.forEach((input) => {
        input.removeEventListener("input", handleInput);
        input.removeEventListener("keydown", handleKeyDown);
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("paste", handlePaste);
      });
    };
  }, []);

  return (
    <div className="flex justify-between w-full h-full bg-[#F7F7F7]">
      <div className="flex flex-col ml-20 gap-14 justify-center">
        <div className="flex flex-col gap-7">
          <img
            src={logo1}
            alt=""
            className="object-contain w-[126px] h-[34px] md:w-[169px] md:h-[46px]"
          />
          <h1 className="font-medium text-4xl tracking-wide">
            Transform dreams into reality
          </h1>
        </div>
        <div className="bg-white flex flex-col items-center  px-6 py-8 rounded-xl w-fit h-[17.25rem] justify-between">
          <h6 className="font-medium text-lg tracking-wide w-fit">
            Login/Sign Up
          </h6>
          <span className="h-[1px] w-[19rem] my-3 bg-[#D9D9D9]"></span>
          <Carousel
            // prevArrow={() => <i></i>}
            nextArrow={({ handleNext }) => <i className="w-4 h-4 bg-black" onClick={handleNext} ref={frwdRef}></i>}
            navigation={() => <i></i>}
            className="w-80 "
          >
            <div className="flex flex-col w-fit">
              <span className="font-normal text-sm w-fit">Mobile Number</span>
              <form onSubmit={handleNumbSubmit} className="w-fit flex flex-col items-center mt-3" action="">
                <div className="flex gap-3 border-[1.5px] w-[19rem] border-black rounded-md">
                  <select
                    className="pl-2 rounded-md focus:outline-none"
                    name=""
                    id=""
                  >
                    {countries.map((item, i) => (
                      <option className="" key={i} value={item.value}>
                        {item.value}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    className="border-l border-l-[#01010133] py-2 pl-4 focus:outline-none rounded-e-md"
                  />
                </div>
                <Button type="submit" className="font-archivo bg-black mt-7 w-full">
                  Get OTP
                </Button>
              </form>
            </div>

            <div className="flex flex-col w-fit">
              <span className="font-normal text-sm w-fit">OTP</span>
              <form
                ref={formRef}
                id="otp-form"
                className="w-fit flex flex-col mt-3"
                action=""
              >
                <div className="flex items-center justify-center gap-3">
                  {new Array(6).fill("").map((_, i) => (
                    <input
                      key={`otp_input_${i + 2}`}
                      type="text"
                      className="w-10 h-10 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-[#01010166] hover:border-slate-200 appearance-none rounded p-2 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                      maxLength="1"
                      ref={(el) => (inputsRef.current[i] = el)}
                    />
                  ))}
                </div>
                <a href="/">
                  <Button
                    
                    ref={submitRef}
                    className="font-archivo bg-black mt-7 w-full capitalize font-light text-white"
                  >
                    Submit
                  </Button>
                </a>
              </form>
            </div>
          </Carousel>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="bg-cover bg-no-repeat w-[33rem] h-full flex items-end"
      >
        <h1 className="text-[#FFFFFF66] text-8xl w-fit mb-14 ml-4">KnowLumi</h1>
      </div>
    </div>
  );
};

export default OtpPage;
