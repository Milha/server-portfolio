import SectionHeading from "@/component/Helper/SectionHeading";
import { aboutInfoSh } from "@/Data/dataSh";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const AboutSh = () => {
  return (
    <div>
      <SectionHeading>O meni</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-30 text-center">
        <div>
          <h3 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfoSh.title}
          </h3>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfoSh.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center p-1 rounded-xs">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Frontend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-orange-700 flex flex-col items-center justify-center p-1 rounded-xs">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Backend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center p-1 rounded-xs">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Fullstack Development
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
          <div>
            <Image
              src="/images/customer.png"
              alt="About Me"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfoSh.client}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Zadovoljnih Klijenata
            </p>
          </div>

          <div>
            <Image
              src="/images/experience.png"
              alt="About Me"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfoSh.experience}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Godina Iskustva
            </p>
          </div>

          <div>
            <Image
              src="/images/completed.png"
              alt="About Me"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfoSh.project}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Zavrsenih Projekata
            </p>
          </div>
          <div>
            <Image
              src="/images/rocket.png"
              alt="About Me"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfoSh.website}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Sajtova Pokrenuto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSh;
