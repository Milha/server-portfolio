import HeroSh from "./HeroSh/HeroSh";
import AboutSh from "./AboutSh/AboutSh";
import ServicesSh from "./ServicesSh/ServicesSh";
import ProjectSh from "./ProjectSh/ProjectSh";
import SkillsSh from "./SkillsSh/SkillsSh";

const HomeSh = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <HeroSh />
      <AboutSh />
      <ServicesSh />
      <ProjectSh />
      <SkillsSh />
    </div>
  );
};

export default HomeSh;
