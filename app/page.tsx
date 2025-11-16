import AboutMe from "./AboutMe/AboutMe";
import Herro from "./herro/herro";
import Skill from "./skills/skill";

export default function Home() {
  return (
    <div className="">
      {/* herro */}
      <Herro />

      {/* about me */}

      <AboutMe />

      {/* skill */}
      <Skill />
    </div>
  );
}
