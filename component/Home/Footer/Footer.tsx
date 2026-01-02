import React from "react";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <div>
        <Image
          src="/images/logo.png"
          alt="log"
          width={180}
          height={180}
          className="mx-auto"
        />
      </div>
      <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
      <p className="text-white text-opacity-60 mt-6 text-center text-sm md:text-base">
        &copy; 2025 All Rights Reserved by Milha Solutions
      </p>
    </div>
  );
};

export default Footer;
