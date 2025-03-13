import { CardExperience } from "./CardExperience";

export const Experience = () => {
  return (
    <div
      className="flex flex-col bg-white p-14 gap-14 
      max-[400px]:px-8
      max-[400px]:py-10
      max-[400px]:gap-10
      md:px-20"
      id="experience"
    >
      <p
        className=" text-5xl jura-regular font-bold text-center text-[#14ADFF]
      max-[320px]:text-3xl 
      max-[400px]:text-4xl
      lg:text-7xl
      xl:text-8xl"
      >
        PENGALAMAN
      </p>
      <div className="flex flex-col gap-7">
        <CardExperience
          year={2021}
          dataExperience={[
            {
              placeExperience: "UNIVERSITAS YARSI",
              descExperience: `Organisasi "HIMFO YARSI sebagai Divisi Pendidikan"`,
              dateExperience: "Juni 2021 - Januari 2022",
            },
            {
              placeExperience: "UNIVERSITAS YARSI",
              descExperience: `Kakak Asuh "Dasar-Dasar Pemrograman"`,
              dateExperience: "September 2021 - Januari 2022",
            },
          ]}
        />
        <CardExperience
          year={2022}
          dataExperience={[
            {
              placeExperience: "IDCamp X DICODING",
              descExperience: `IDCamp 2022 (Front-End Developer) - Peserta`,
              dateExperience: "Mei 2022 - September 2022",
            },
          ]}
        />
        <CardExperience
          year={2023}
          dataExperience={[
            {
              placeExperience: "SIB X DICODING",
              descExperience: `Pengembang Front-End Web Dan Back-End - Peserta`,
              dateExperience: "Mei 2022 - September 2022",
            },
            {
              placeExperience: "DICODING",
              descExperience: `DICODING for University Batch 1 - Peserta`,
              dateExperience: "Juli 2023 - Oktober 2023",
            },
            {
              placeExperience: "SIB X BANGKIT",
              descExperience: `Mobile Development - Peserta`,
              dateExperience: "Agustus 2023 - Januari 2024",
            },
            {
              placeExperience: "GDSC from Google",
              descExperience: `Juara Android Season 3 - Peserta`,
              dateExperience: "Oktober 2023 - November 2023",
            },
          ]}
        />
        <CardExperience
          year={2024}
          dataExperience={[
            {
              placeExperience: "DBS X DICODING",
              descExperience: `DBS Foundation Coding Camp 2024 - Peserta`,
              dateExperience: "Januari 2024 - Juli 2024",
            },
            {
              placeExperience: "AWS X DICODING",
              descExperience: `AWS Back-End Academy 2024 - Peserta`,
              dateExperience: "Mei 2024 - September 2024",
            },
            {
              placeExperience: "IDCamp X DICODING",
              descExperience: `IDCamp 2024 (React Developer) - Peserta`,
              dateExperience: "September 2024 - Januari 2025",
            },
          ]}
        />
      </div>
    </div>
  );
};
