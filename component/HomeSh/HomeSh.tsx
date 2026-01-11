import HeroSh from "./HeroSh/HeroSh";
import AboutSh from "./AboutSh/AboutSh";
import ServicesSh from "./ServicesSh/ServicesSh";

const HomeSh = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <HeroSh />
      <AboutSh />
      <ServicesSh />
    </div>
  );
};

export default HomeSh;
