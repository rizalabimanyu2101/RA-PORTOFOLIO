import { useState } from "react";
import { AboutMe } from "./component/AboutMe";
import { Education } from "./component/Education";
import { Experience } from "./component/Experience";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Jumbotron } from "./component/Jumbotron";
import { MySkill } from "./component/MySkill";
import { Project } from "./component/Project";
import { SplashScreen } from "./component/SplashScreen";

function App() {
  const [isTimeOut, setIsTimeOut] = useState(false);

  setTimeout(() => {
    setIsTimeOut((prevState) => !prevState);
  }, 2000);

  return (
    <>
      {isTimeOut ? <></> : <SplashScreen />}
      <Header />
      <Jumbotron />
      <AboutMe />
      <Education />
      <Experience />
      <MySkill />
      <Project />
      <Footer />
    </>
  );
}

export default App;
