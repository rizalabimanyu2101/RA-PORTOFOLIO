import { CardEducation } from "./CardEducation";

export const Education = () => {
  return (
    <div
      className="flex flex-col bg-[#1A1A1A] p-14 gap-14
      max-[400px]:px-8
      max-[400px]:py-10
      max-[400px]:gap-10
      md:px-20"
      id="education"
    >
      <p
        className=" text-4xl  jura-regular font-bold text-center text-[#14ADFF]
      max-[320px]:text-2xl 
      max-[400px]:text-3xl
      lg:text-5xl
      xl:text-6xl"
      >
        PENDIDIKAN
      </p>
      <div className="flex flex-col gap-10 items-center justify-center">
        <CardEducation
          key={"universitas_yarsi"}
          logoEducation={"1_logo-yarsi.png"}
          nameEducation={"UNIVERISTAS YARSI"}
          degreeEducation={"Gelar Sarjana"}
          majorEducation={"Teknik Informatika"}
          dateEduction={"September 2020 - Juli 2024"}
          gradeEducation={"IPK: 3.74/4.00"}
        />
      </div>
    </div>
  );
};
