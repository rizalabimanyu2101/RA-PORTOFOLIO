export const AboutMe = () => {
  return (
    <div
      className="flex flex-col bg-white px-12 p-14 gap-14 
      max-[400px]:px-8
      max-[400px]:py-10
      max-[400px]:gap-10
      md:px-20"
      id="aboutme"
    >
      <p
        className=" text-5xl  jura-regular font-bold text-center text-[#14ADFF]
      max-[320px]:text-3xl 
      max-[400px]:text-4xl
      lg:text-7xl
      xl:text-8xl"
      >
        TENTANG AKU
      </p>
      <div
        className="flex flex-col bg-cover gap-10 
      max-[400px]:gap-6
      lg:flex-row
      lg:gap-5
      xl:gap-20"
      >
        <div
          className="flex bg-green-300/0 w-[100%]
        lg:w-[40%]
        xl:w-[30%]"
        >
          <img
            className="  size-70 rounded-full border-8 border-[#14ADFF] m-auto
            max-[320px]:size-40
            max-[400px]:size-50
            xl:size-80"
            src="profile-jumbotron-2.jpg"
          />
        </div>
        <div
          className="bg-blue-300/0 w-[100%] flex m-auto
        lg:w-[60%]
        xl:w-[70%]"
        >
          <p
            className=" text-xl/10 jura-regular font-bold text-[#1A1A1A]
          max-[400px]:text-[13px]/6
          max-[400px]:text-justify
          xl:text-2xl/12"
          >
            Saya adalah lulusan baru jurusan Teknik Informatika di Universitas
            YARSI. Saya fokus pada Front-End Development terutama pada Platform
            Web. Saya sering berlatih dan membuat proyek menggunakan MERN
            (MongoDB, Express.js, React.js, Node.js) dan tampilannya dibantu
            oleh Tailwind CSS. Saya memiliki keinginan yang kuat untuk
            mempelajari apa saja seperti Framework dan Library tentang Software
            Engineering, asalkan saya dapat memenuhi kebutuhan perusahaan dan
            kinerja aplikasi dapat berjalan sesuai keinginan perusahaan.
          </p>
        </div>
      </div>
    </div>
  );
};
