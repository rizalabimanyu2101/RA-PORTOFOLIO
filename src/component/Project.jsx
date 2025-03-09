import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { CardMyProject } from "./CardMyProject";
import { CardTechProject } from "./CardTechProject";

export const Project = () => {
  return (
    <div className="flex flex-col bg-white p-14 px-20 gap-14" id="project">
      <p className=" text-5xl jura-regular font-bold text-center text-[#14ADFF]">
        PROJECT
      </p>
      <div className="grid grid-cols-3 gap-10 justify-center">
        <CardMyProject
          imgProject="1_tcj.png"
          toApp="https://tcj.vercel.app"
          titleProject="T.C.J."
          descProject="Website yang dibuat untuk menampilkan Biodata diri dan Membuat Form Pembelian Tiket Konser Jepang."
          techData={[
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={<FaHtml5 className="size-10 text-[#FF7B00]" />}
              />
            </div>,
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={
                  <FaCss3Alt className="size-10 text-[#007bff]" />
                }
              />
            </div>,
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={<FaJs className="size-10 text-[#ffcc00]" />}
              />
            </div>,
          ]}
        />
        <CardMyProject
          imgProject="2_bookshelf-apps.png"
          toApp="https://bookshelf-apps-hazel.vercel.app"
          titleProject="BOOKSHELF APPS"
          descProject="Website yang dibuat untuk membuat rak buku yang dimana difilter mana rak buku yang telah dibaca dan mana yang telah selesai dibaca."
          techData={[
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={<FaHtml5 className="size-10 text-[#FF7B00]" />}
              />
            </div>,
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={
                  <FaCss3Alt className="size-10 text-[#007bff]" />
                }
              />
            </div>,
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={<FaJs className="size-10 text-[#ffcc00]" />}
              />
            </div>,
          ]}
        />
        <CardMyProject
          imgProject="3_fragment-bz.png"
          toApp="https://fragment-bz.vercel.app"
          titleProject="FRAGMENT -B'z-"
          descProject="Website yang dibuat untuk menampilkan Discography album terbaik dari B'z menurut saya."
          techData={[
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={<FaHtml5 className="size-10 text-[#FF7B00]" />}
              />
            </div>,
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={
                  <FaCss3Alt className="size-10 text-[#007bff]" />
                }
              />
            </div>,
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={<FaJs className="size-10 text-[#ffcc00]" />}
              />
            </div>,
          ]}
        />
        <CardMyProject
          imgProject="4_bookshelf-apps.png"
          toApp="https://bookshelf-apps-pt2.vercel.app"
          titleProject="BOOKSHELF APPS"
          descProject="Website yang dibuat untuk membuat rak buku yang dimana difilter mana rak buku yang telah dibaca dan mana yang telah selesai dibaca."
          techData={[
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={<FaHtml5 className="size-10 text-[#FF7B00]" />}
              />
            </div>,
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={
                  <FaCss3Alt className="size-10 text-[#007bff]" />
                }
              />
            </div>,
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={<FaJs className="size-10 text-[#ffcc00]" />}
              />
            </div>,
          ]}
        />
        <CardMyProject
          imgProject="5_this-is-baad.png"
          toApp="https://this-is-baad.vercel.app"
          titleProject="THIS IS BAAD"
          descProject="Website yang dibuat untuk menampilkan Discography album dari band BAAD."
          techData={[
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={<FaHtml5 className="size-10 text-[#FF7B00]" />}
              />
            </div>,
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={
                  <FaCss3Alt className="size-10 text-[#007bff]" />
                }
              />
            </div>,
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={<FaJs className="size-10 text-[#ffcc00]" />}
              />
            </div>,
          ]}
        />
        <CardMyProject
          imgProject="6_this-is-bookshelf.png"
          toApp="https://this-is-bookshelf.vercel.app"
          titleProject="THIS IS BOOKSHELF"
          descProject="Website yang dibuat untuk membuat rak buku yang dimana difilter mana rak buku yang telah dibaca dan mana yang telah selesai dibaca."
          techData={[
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={<FaHtml5 className="size-10 text-[#FF7B00]" />}
              />
            </div>,
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={
                  <FaCss3Alt className="size-10 text-[#007bff]" />
                }
              />
            </div>,
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={<FaJs className="size-10 text-[#ffcc00]" />}
              />
            </div>,
          ]}
        />
        <CardMyProject
          imgProject="7_boku-no-notes.png"
          toApp="https://boku-no-notes.vercel.app"
          titleProject="BOKU NO NOTES (B.N.N.)"
          descProject="Website yang dibuat untuk membuat catatan yang dimana difilter mana catatan yang sedang aktif dibaca dan mana catatan yang telah duarsipkan."
          techData={[
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={<FaHtml5 className="size-10 text-[#FF7B00]" />}
              />
            </div>,
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={
                  <FaCss3Alt className="size-10 text-[#007bff]" />
                }
              />
            </div>,
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={<FaJs className="size-10 text-[#ffcc00]" />}
              />
            </div>,
            <div key="logo-tech">
              <CardTechProject
                imgTechProject={<FaReact className="size-10 text-[#0091ff]" />}
              />
            </div>,
          ]}
        />
      </div>
    </div>
  );
};
