import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

export const Jumbotron = () => {
  return (
    <>
      <div
        className="flex bg-cover px-12 py-20 pt-40 justify-between absolute w-full h-fit z-10
        max-[430px]:text-sm 
        max-[430px]:pb-15
        max-[430px]:pt-32
        md:px-20
        lg:pt-48
        lg:h-screen"
        style={{ backgroundImage: "url('/bg-jumbotron.jpg')" }}
      >
        <div
          className="bg-green-300/0 w-[100%] flex flex-col gap-5 text-white h-full
        max-[430px]:gap-3.5 
        md:gap-4
        md:w-[45%]
        lg:w-[55%]
        lg:gap-6
        xl:w-[65%] 
        2xl:w-[70%]"
        >
          <p
            className="text-5xl jura-regular font-bold
          max-[320px]:text-3xl 
          max-[430px]:text-4xl
          lg:text-7xl
          xl:text-8xl"
          >
            RIZAL ABIMANYU
          </p>
          <p
            className=" text-xl jura-regular font-bold
          max-[430px]:text-sm
          lg:text-4xl
          xl:text-5xl"
          >
            FRONT-END DEVELOPER
          </p>
          <div
            className="flex flex-wrap gap-5
          md:flex-nowrap"
          >
            <a
              href="CURRICULUM VITAE - RIZAL ABIMANYU.pdf"
              download
              className="flex gap-3 bg-[#14ADFF] jura-regular font-bold p-2 w-[130px] rounded-lg cursor-pointer text-center
              max-[320px]:text-[10px]
              max-[430px]:w-[100px]
              max-[320px]:w-[90px]
              max-[430px]:text-sm
              lg:p-3
              lg:w-[150px]"
            >
              <div className=" flex m-auto gap-2">
                <span className=" flex">
                  <IoMdDownload className=" m-auto" />
                </span>
                <p>C.V.</p>
              </div>
            </a>
            <a
              href="RESUME - RIZAL ABIMANYU.pdf"
              download
              className="flex gap-3 bg-[#14ADFF] jura-regular font-bold p-2 rounded-lg cursor-pointer text-center
              max-[320px]:text-[10px]
              max-[320px]:w-[90px]
              max-[430px]:w-[100px]
              lg:p-3 w-[130px]
              lg:w-[150px]"
            >
              <div className=" flex m-auto gap-2">
                <span className=" flex">
                  <IoMdDownload className=" m-auto" />
                </span>
                <p>RESUME</p>
              </div>
            </a>
          </div>
          <div
            className="flex flex-wrap gap-5 h-full
          md:flex-nowrap
          max-[320px]:gap-3
          max-[430px]:pt-3"
          >
            <a
              href="https://www.linkedin.com/in/rizalabimanyu202/"
              alt="linkedin"
            >
              <FaLinkedinIn
                className="size-10 bg-white p-1 rounded-md text-[#1A1A1A]
              max-[430px]:size-7
              lg:size-12"
              />
            </a>
            <a
              href="https://github.com/rizalabimanyu2101?tab=repositories"
              alt="github"
            >
              <FiGithub
                className="size-10 bg-white p-1 rounded-md text-[#1A1A1A]
              max-[430px]:size-7
              lg:size-12"
              />
            </a>
            <a href="https://www.facebook.com/Arjunkoko.202/" alt="facebook">
              <FaFacebookF
                className="size-10 bg-white p-1 rounded-md text-[#1A1A1A]
              max-[430px]:size-7
              lg:size-12"
              />
            </a>
            <a
              href="https://www.instagram.com/rizalabimanyu__/"
              alt="instagram"
            >
              <FaInstagram
                className="size-10 bg-white p-1 rounded-md text-[#1A1A1A]
              max-[430px]:size-7
              lg:size-12"
              />
            </a>
            <a href="mailto:plasticbomb202@gmail.com" alt="email">
              <MdOutlineEmail
                className="size-10 bg-white p-1 rounded-md text-[#1A1A1A]
              max-[430px]:size-7
              lg:size-12"
              />
            </a>
          </div>
        </div>
        <div
          className="bg-blue-300/0 hidden 
        md:flex 
        md:w-[55%] 
        md:justify-end 
        lg:w-[45%]
        xl:w-[35%] 
        2xl:w-[30%] 
        2xl:justify-normal"
        >
          <img
            className=" size-65 rounded-full border-8 border-[#14ADFF]
            lg:size-90"
            src="profile-jumbotron-1.jpg"
          />
        </div>
      </div>
      <div
        className="flex bg-cover px-12 py-20 pt-40 justify-between absolute w-full h-fit z-20 bg-[#1A1A1A]/25
        max-[430px]:text-sm 
        max-[430px]:pb-15
        max-[430px]:pt-32
        md:px-20
        lg:pt-48
        lg:h-screen"
      >
        <div
          className="bg-green-300/0 w-[100%] flex flex-col gap-5 text-white h-full
        max-[430px]:gap-3.5 
        md:gap-4
        md:w-[45%]
        lg:w-[55%]
        lg:gap-6
        xl:w-[65%] 
        2xl:w-[70%]"
        >
          <p
            className="text-5xl jura-regular font-bold
          max-[320px]:text-3xl 
          max-[430px]:text-4xl
          lg:text-7xl
          xl:text-8xl"
          >
            RIZAL ABIMANYU
          </p>
          <p
            className=" text-xl jura-regular font-bold
          max-[430px]:text-sm
          lg:text-4xl
          xl:text-5xl"
          >
            FRONT-END DEVELOPER
          </p>
          <div
            className="flex flex-wrap gap-5
          md:flex-nowrap"
          >
            <a
              href="CURRICULUM VITAE - RIZAL ABIMANYU.pdf"
              download
              className="flex gap-3 bg-[#14ADFF] jura-regular font-bold p-2 w-[130px] rounded-lg cursor-pointer text-center
              max-[320px]:text-[10px]
              max-[430px]:w-[100px]
              max-[320px]:w-[90px]
              max-[430px]:text-sm
              lg:p-3
              lg:w-[150px]"
            >
              <div className=" flex m-auto gap-2">
                <span className=" flex">
                  <IoMdDownload className=" m-auto" />
                </span>
                <p>C.V.</p>
              </div>
            </a>
            <a
              href="RESUME - RIZAL ABIMANYU.pdf"
              download
              className="flex gap-3 bg-[#14ADFF] jura-regular font-bold p-2 rounded-lg cursor-pointer text-center
              max-[320px]:text-[10px]
              max-[320px]:w-[90px]
              max-[430px]:w-[100px]
              lg:p-3 w-[130px]
              lg:w-[150px]"
            >
              <div className=" flex m-auto gap-2">
                <span className=" flex">
                  <IoMdDownload className=" m-auto" />
                </span>
                <p>RESUME</p>
              </div>
            </a>
          </div>
          <div
            className="flex flex-wrap gap-5 h-full
          md:flex-nowrap
          max-[320px]:gap-3
          max-[430px]:pt-3"
          >
            <a
              href="https://www.linkedin.com/in/rizalabimanyu202/"
              alt="linkedin"
            >
              <FaLinkedinIn
                className="size-10 bg-white p-1 rounded-md text-[#1A1A1A]
              max-[430px]:size-7
              lg:size-12"
              />
            </a>
            <a
              href="https://github.com/rizalabimanyu2101?tab=repositories"
              alt="github"
            >
              <FiGithub
                className="size-10 bg-white p-1 rounded-md text-[#1A1A1A]
              max-[430px]:size-7
              lg:size-12"
              />
            </a>
            <a href="https://www.facebook.com/Arjunkoko.202/" alt="facebook">
              <FaFacebookF
                className="size-10 bg-white p-1 rounded-md text-[#1A1A1A]
              max-[430px]:size-7
              lg:size-12"
              />
            </a>
            <a
              href="https://www.instagram.com/rizalabimanyu__/"
              alt="instagram"
            >
              <FaInstagram
                className="size-10 bg-white p-1 rounded-md text-[#1A1A1A]
              max-[430px]:size-7
              lg:size-12"
              />
            </a>
            <a href="mailto:plasticbomb202@gmail.com" alt="email">
              <MdOutlineEmail
                className="size-10 bg-white p-1 rounded-md text-[#1A1A1A]
              max-[430px]:size-7
              lg:size-12"
              />
            </a>
          </div>
        </div>
        <div
          className="bg-blue-300/0 hidden 
        md:flex 
        md:w-[55%] 
        md:justify-end 
        lg:w-[45%]
        xl:w-[35%] 
        2xl:w-[30%] 
        2xl:justify-normal"
        >
          <img
            className=" size-65 rounded-full border-8 border-[#14ADFF]
            lg:size-90"
            src="profile-jumbotron-1.jpg"
          />
        </div>
      </div>
      <div
        className="flex bg-cover px-12 py-20 pt-40 justify-between relative w-full h-fit z-30
        max-[430px]:text-sm 
        max-[430px]:pb-15
        max-[430px]:pt-32
        md:px-20
        lg:pt-48
        lg:h-screen"
      >
        <div
          className="bg-green-300/0 w-[100%] flex flex-col gap-5 text-white h-full
        max-[430px]:gap-3.5
        md:gap-4
        md:w-[45%]
        lg:w-[55%]
        lg:gap-6
        xl:w-[65%] 
        2xl:w-[70%]"
        >
          <p
            className="text-5xl jura-regular font-bold
          max-[320px]:text-3xl 
          max-[430px]:text-4xl
          lg:text-7xl
          xl:text-8xl"
          >
            RIZAL ABIMANYU
          </p>
          <p
            className=" text-xl jura-regular font-bold
          max-[430px]:text-sm
          lg:text-4xl
          xl:text-5xl"
          >
            FRONT-END DEVELOPER
          </p>
          <div
            className="flex flex-wrap gap-5
          md:flex-nowrap"
          >
            <a
              href="CURRICULUM VITAE - RIZAL ABIMANYU.pdf"
              download
              className="flex gap-3 bg-[#14ADFF] jura-regular font-bold p-2 w-[130px] rounded-lg cursor-pointer text-center
              max-[320px]:text-[10px]
              max-[430px]:w-[100px]
              max-[320px]:w-[90px]
              max-[430px]:text-sm
              lg:p-3
              lg:w-[150px]"
            >
              <div className=" flex m-auto gap-2">
                <span className=" flex">
                  <IoMdDownload className=" m-auto" />
                </span>
                <p>C.V.</p>
              </div>
            </a>
            <a
              href="RESUME - RIZAL ABIMANYU.pdf"
              download
              className="flex gap-3 bg-[#14ADFF] jura-regular font-bold p-2 rounded-lg cursor-pointer text-center
              max-[320px]:text-[10px]
              max-[320px]:w-[90px]
              max-[430px]:w-[100px]
              lg:p-3 w-[130px]
              lg:w-[150px]"
            >
              <div className=" flex m-auto gap-2">
                <span className=" flex">
                  <IoMdDownload className=" m-auto" />
                </span>
                <p>RESUME</p>
              </div>
            </a>
          </div>
          <div
            className="flex flex-wrap gap-5 h-full
          md:flex-nowrap
          max-[320px]:gap-3
          max-[430px]:pt-3"
          >
            <a
              href="https://www.linkedin.com/in/rizalabimanyu202/"
              alt="linkedin"
            >
              <FaLinkedinIn
                className="size-10 bg-white p-1 rounded-md text-[#1A1A1A]
              max-[430px]:size-7
              lg:size-12"
              />
            </a>
            <a
              href="https://github.com/rizalabimanyu2101?tab=repositories"
              alt="github"
            >
              <FiGithub
                className="size-10 bg-white p-1 rounded-md text-[#1A1A1A]
              max-[430px]:size-7
              lg:size-12"
              />
            </a>
            <a href="https://www.facebook.com/Arjunkoko.202/" alt="facebook">
              <FaFacebookF
                className="size-10 bg-white p-1 rounded-md text-[#1A1A1A]
              max-[430px]:size-7
              lg:size-12"
              />
            </a>
            <a
              href="https://www.instagram.com/rizalabimanyu__/"
              alt="instagram"
            >
              <FaInstagram
                className="size-10 bg-white p-1 rounded-md text-[#1A1A1A]
              max-[430px]:size-7
              lg:size-12"
              />
            </a>
            <a href="mailto:plasticbomb202@gmail.com" alt="email">
              <MdOutlineEmail
                className="size-10 bg-white p-1 rounded-md text-[#1A1A1A]
              max-[430px]:size-7
              lg:size-12"
              />
            </a>
          </div>
        </div>
        <div
          className="bg-blue-300/0 hidden 
        md:flex 
        md:w-[55%] 
        md:justify-end 
        lg:w-[45%]
        xl:w-[35%] 
        2xl:w-[30%] 
        2xl:justify-normal"
        >
          <img
            className=" size-65 rounded-full border-8 border-[#14ADFF]
            lg:size-90"
            src="profile-jumbotron-1.jpg"
          />
        </div>
      </div>
    </>
  );
};
