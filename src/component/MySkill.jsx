import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiBootstrap } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { CardMySkill } from "./CardMySkill";

export const MySkill = () => {
  return (
    <div
      className="flex flex-col bg-[#1A1A1A] p-14 gap-14
    max-[400px]:px-8
    max-[400px]:py-10
    max-[400px]:gap-10
    md:px-20"
      id="myskill"
    >
      <p
        className=" text-5xl jura-regular font-bold text-center text-[#14ADFF]
      max-[320px]:text-3xl 
      max-[400px]:text-4xl
      lg:text-7xl
      xl:text-8xl"
      >
        KEMAMPUAN
      </p>
      <div className="grid max-[550px]:grid-cols-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 xl:gap-10 items-center justify-center">
        <CardMySkill
          imgLogoMySkill={
            <FaHtml5 className="size-15 md:size-20 lg:size-25 xl:size-35 m-auto text-[#FF7B00]" />
          }
          textMySkill={"HTML"}
        />
        <CardMySkill
          imgLogoMySkill={
            <FaCss3Alt className="size-15 md:size-20 lg:size-25 xl:size-35 m-auto text-[#007bff]" />
          }
          textMySkill={"CSS"}
        />
        <CardMySkill
          imgLogoMySkill={
            <FaJs className="size-15 md:size-20 lg:size-25 xl:size-35 m-auto text-[#ffcc00]" />
          }
          textMySkill={"JAVASCRIPT"}
        />
        <CardMySkill
          imgLogoMySkill={
            <RiTailwindCssFill className="size-15 md:size-20 lg:size-25 xl:size-35 m-auto text-[#00c3ff]" />
          }
          textMySkill={"TAILWIND CSS"}
        />
        <CardMySkill
          imgLogoMySkill={
            <FaReact className="size-15 md:size-20 lg:size-25 xl:size-35 m-auto text-[#0091ff]" />
          }
          textMySkill={"REACT.JS"}
        />
        <CardMySkill
          imgLogoMySkill={
            <DiBootstrap className="size-15 md:size-20 lg:size-25 xl:size-35 m-auto text-[#9000b0]" />
          }
          textMySkill={"BOOTSTRAP"}
        />
        <CardMySkill
          imgLogoMySkill={
            <FaNodeJs className="size-15 md:size-20 lg:size-25 xl:size-35 m-auto text-[#77ff00]" />
          }
          textMySkill={"NODE.JS"}
        />
        <CardMySkill
          imgLogoMySkill={
            <SiExpress className="size-15 md:size-20 lg:size-25 xl:size-35 m-auto text-[#1A1A1A]" />
          }
          textMySkill={"EXPRESS.JS"}
        />
        <CardMySkill
          imgLogoMySkill={
            <SiMysql className="size-15 md:size-20 lg:size-25 xl:size-35 m-auto text-[#ffd000]" />
          }
          textMySkill={"MYSQL"}
        />
        <CardMySkill
          imgLogoMySkill={
            <DiMongodb className="size-15 md:size-20 lg:size-25 xl:size-35 m-auto text-[#00b928]" />
          }
          textMySkill={"MONGODB"}
        />
      </div>
    </div>
  );
};
