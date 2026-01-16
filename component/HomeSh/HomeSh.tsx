import HeroSh from "./HeroSh/HeroSh";
import AboutSh from "./AboutSh/AboutSh";
import ServicesSh from "./ServicesSh/ServicesSh";
import ProjectSh from "./ProjectSh/ProjectSh";
import SkillsSh from "./SkillsSh/SkillsSh";
import ContactSh from "./ContactSh/ContactSh";

const HomeSh = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <HeroSh />
      <AboutSh />
      <ServicesSh />
      <ProjectSh />
      <SkillsSh />
      <ContactSh />
    </div>
  );
};

export default HomeSh;
