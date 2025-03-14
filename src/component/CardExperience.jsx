import { CardSubExperience } from "./CardSubExperience";

export const CardExperience = ({ year, dataExperience }) => {
  return (
    <div className="flex flex-col border-2 border-[#1A1A1A] rounded-xl jura-regular">
      <h1 className="text-center text-2xl p-1 font-mono border-b-2 border-[#1A1A1A]">
        {year}
      </h1>
      <div className="flex flex-col max-[430px]:px-4 px-5 sm:px-7">
        {dataExperience.map((a) => (
          <CardSubExperience
            key={`${a.placeExperience} - ${a.dateExperience}`}
            placeExperience={a.placeExperience}
            descExperience={a.descExperience}
            dateExperience={a.dateExperience}
          />
        ))}
      </div>
    </div>
  );
};
