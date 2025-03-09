import { AboutMe } from "./component/AboutMe";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Jumbotron } from "./component/Jumbotron";
import { MySkill } from "./component/MySkill";
import { Project } from "./component/Project";

function App() {
  return (
    <>
      <Header />
      <Jumbotron />
      <AboutMe />
      <MySkill />
      <Project />
      <Footer />
    </>
  );
}

export default App;
