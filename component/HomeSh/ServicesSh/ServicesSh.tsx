import SectionHeading from "@/component/Helper/SectionHeading";
import { servicesDataSh } from "@/Data/dataSh";
import ServiceCardSh from "./ServiceCardSh";

const ServicesSh = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715] ">
      <SectionHeading>Usluge</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20">
        {servicesDataSh.map((service) => {
          return (
            <div key={service.id}>
              <ServiceCardSh service={service} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSh;
