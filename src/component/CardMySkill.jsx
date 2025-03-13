export const CardMySkill = ({ imgLogoMySkill, textMySkill }) => {
  return (
    <div className=" flex flex-col items-center gap-5" key={textMySkill}>
      <div className=" bg-white rounded-2xl size-25 md:size-30 lg:size-35 xl:size-48 flex">
        {imgLogoMySkill}
      </div>
      <p className=" text-white jura-regular max-[550px]:text-[13px] size-xs md:size-md lg:text-lg xl:text-2xl font-bold">
        {textMySkill}
      </p>
    </div>
  );
};
