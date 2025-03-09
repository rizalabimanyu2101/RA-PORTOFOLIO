export const CardMySkill = ({ imgLogoMySkill, textMySkill }) => {
  return (
    <div className=" flex flex-col items-center gap-5" key={textMySkill}>
      <div className=" bg-white rounded-2xl size-48 flex">{imgLogoMySkill}</div>
      <p className=" text-white jura-regular text-2xl font-bold">
        {textMySkill}
      </p>
    </div>
  );
};
