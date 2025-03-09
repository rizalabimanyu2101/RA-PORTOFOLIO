export const AboutMe = () => {
  return (
    <div className="flex flex-col bg-white p-14 px-20 gap-14" id="aboutme">
      <p className=" text-5xl jura-regular font-bold text-center text-[#14ADFF]">
        ABOUT ME
      </p>
      <div className="flex bg-cover gap-20">
        <div className="bg-green-300/0 w-[30%] flex">
          <img
            className=" size-80 rounded-full border-8 border-[#14ADFF] m-auto"
            src="profile-jumbotron-2.jpg"
          />
        </div>
        <div className=" bg-blue-300/0 w-[70%] flex m-auto">
          <p className=" text-2xl/12 jura-regular font-bold">
            I am a fresh graduate majoring in informatics engineering at YARSI
            University. I focus on Front-End Development especially on Web
            Platforms. I often practice and create projects using MERN (MongoDB,
            Express.js, React.js, Node.js) and the appearance is assisted by
            Tailwind CSS. I have a strong desire to learn anything such as
            Framework and Library about Software Engineering, as long as I can
            meet the companys needs and the application performance can run
            according to the companys wishes.
          </p>
        </div>
      </div>
    </div>
  );
};
