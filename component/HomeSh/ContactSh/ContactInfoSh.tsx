import React from "react";

import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";
import { contactDataSh } from "@/Data/dataSh";

const ContactInfoSh = () => {
  return (
    <div>
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-linear-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Telefon</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            {contactDataSh.phone}
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-8 mt-8 mb-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-linear-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaEnvelope className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">
            Email Adresa
          </h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            {contactDataSh.email}
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-linear-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaMap className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Adresa</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70">
            {contactDataSh.address}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSh;
