export const CardMyProject = ({
  imgProject,
  toApp,
  titleProject,
  descProject,
  techData,
}) => {
  return (
    <a href={toApp} className=" cursor-pointer" target="_blank">
      <div
        className="flex flex-col h-full border-2 border-[#1A1A1A] rounded-xl p-6 gap-4
      max-[350px]:p-4"
      >
        <img
          className=" aspect-16/9 bg-amber-400 rounded-xl"
          src={imgProject}
        />
        <div className="flex flex-col justify-between gap-6 h-full">
          <div className="flex flex-col jura-regular gap-4">
            <p
              className=" m-auto text-xl font-bold text-center
            xl:text-3xl"
            >
              {titleProject}
            </p>
            <p
              className=" font-bold text-md
            max-[400px]:text-sm
            max-[400px]:text-justify
            xl:text-xl"
            >
              {descProject}
            </p>
          </div>
          <div
            className="grid grid-cols-5 gap-7 w-[70%]
          max-[320px]:w-[85%]
          lg:gap-5
          xl:gap-3"
          >
            {techData.map((a) => a)}
          </div>
        </div>
      </div>
    </a>
  );
};
