import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export const Jumbotron = () => {
  return (
    <>
      <div className="flex bg-amber-400/0 h-screen bg-[url('/bg-jumbotron.jpg')] bg-cover p-12 pt-48"></div>
      <div className="flex bg-black/25 h-screen bg-cover p-12 pt-48 absolute inset-0"></div>
      <div className="flex bg-cover p-20 pt-48 inset-0 absolute">
        <div className="bg-green-300/0 w-[70%] flex flex-col gap-6 text-white h-full">
          <p className=" text-8xl jura-regular font-bold">RIZAL ABIMANYU</p>
          <p className=" text-5xl jura-regular font-bold">
            FRONT-END DEVELOPER
          </p>
          <div className="flex gap-5">
            <a
              href="CURRICULUM VITAE - RIZAL ABIMANYU.pdf"
              download
              className=" bg-[#14ADFF] jura-regular font-bold p-3 w-[150px] rounded-lg cursor-pointer text-center"
            >
              MY C.V.
            </a>
            <a
              href="RESUME - RIZAL ABIMANYU.pdf"
              download
              className=" bg-[#14ADFF] jura-regular font-bold p-3 w-[150px] rounded-lg cursor-pointer text-center"
            >
              MY RESUME
            </a>
            {/* <a
              href=""
              download
              className=" bg-[#14ADFF] jura-regular font-bold p-3 w-[150px] rounded-lg cursor-pointer text-center"
            >
              My Portofolio
            </a> */}
          </div>
          <div className=" flex gap-5 h-full">
            <a
              href="https://www.linkedin.com/in/rizalabimanyu202/"
              alt="linkedin"
            >
              <FaLinkedinIn className="size-12 bg-white p-2 rounded-md text-black" />
            </a>
            <a
              href="https://github.com/rizalabimanyu2101?tab=repositories"
              alt="github"
            >
              <FiGithub className="size-12 bg-white p-2 rounded-md text-black" />
            </a>
            <a href="https://www.facebook.com/Arjunkoko.202/" alt="facebook">
              <FaFacebookF className="size-12 bg-white p-2 rounded-md text-black" />
            </a>
            <a
              href="https://www.instagram.com/rizalabimanyu__/"
              alt="instagram"
            >
              <FaInstagram className="size-12 bg-white p-2 rounded-md text-black" />
            </a>
            <a href="mailto:plasticbomb202@gmail.com" alt="email">
              <MdOutlineEmail className="size-12 bg-white p-2 rounded-md text-black" />
            </a>
          </div>
        </div>
        <div className=" bg-blue-300/0 w-[30%] flex">
          <img
            className=" size-90 rounded-full border-8 border-[#14ADFF]"
            src="profile-jumbotron.jpg"
          />
        </div>
      </div>
    </>
  );
};
