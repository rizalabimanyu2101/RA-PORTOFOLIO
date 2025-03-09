export const CardMyProject = ({
  imgProject,
  toApp,
  titleProject,
  descProject,
  techData,
}) => {
  return (
    <a href={toApp} className=" cursor-pointer" target="_blank">
      <div className="flex flex-col h-full border-2 border-black rounded-xl p-6 gap-4">
        <img
          className=" aspect-16/9 bg-amber-400 rounded-xl"
          src={imgProject}
        />
        <div className="flex flex-col jura-regular gap-4">
          <p className=" m-auto text-3xl font-bold">{titleProject}</p>
          <p className=" font-bold text-xl">{descProject}</p>
        </div>
        <div className="flex flex-wrap gap-3">{techData.map((a) => a)}</div>
      </div>
    </a>
  );
};
