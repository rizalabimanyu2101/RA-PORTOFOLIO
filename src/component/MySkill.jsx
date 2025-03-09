import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { CardMySkill } from "./CardMySkill";

export const MySkill = () => {
  return (
    <div className="flex flex-col bg-[#1A1A1A] p-14 px-20 gap-14" id="myskill">
      <p className=" text-5xl jura-regular font-bold text-center text-[#14ADFF]">
        MY SKILL
      </p>
      <div className="grid grid-cols-5 gap-10 items-center justify-center">
        <CardMySkill
          imgLogoMySkill={<FaHtml5 className="size-35 m-auto text-[#FF7B00]" />}
          textMySkill={"HTML"}
        />
        <CardMySkill
          imgLogoMySkill={
            <FaCss3Alt className="size-35 m-auto text-[#007bff]" />
          }
          textMySkill={"CSS"}
        />
        <CardMySkill
          imgLogoMySkill={<FaJs className="size-35 m-auto text-[#ffcc00]" />}
          textMySkill={"JAVASCRIPT"}
        />
        <CardMySkill
          imgLogoMySkill={
            <RiTailwindCssFill className="size-35 m-auto text-[#00c3ff]" />
          }
          textMySkill={"TAILWIND CSS"}
        />
        <CardMySkill
          imgLogoMySkill={<FaReact className="size-35 m-auto text-[#0091ff]" />}
          textMySkill={"REACT.JS"}
        />
        <CardMySkill
          imgLogoMySkill={
            <FaNodeJs className="size-35 m-auto text-[#77ff00]" />
          }
          textMySkill={"NODE.JS"}
        />
        <CardMySkill
          imgLogoMySkill={<SiExpress className="size-35 m-auto text-black" />}
          textMySkill={"EXPRESS.JS"}
        />
        <CardMySkill
          imgLogoMySkill={<SiMysql className="size-35 m-auto text-[#ffd000]" />}
          textMySkill={"MYSQL"}
        />
        <CardMySkill
          imgLogoMySkill={
            <DiMongodb className="size-35 m-auto text-[#00b928]" />
          }
          textMySkill={"MONGODB"}
        />
      </div>
    </div>
  );
};
