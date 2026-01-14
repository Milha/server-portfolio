import React from "react";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-16 pb-16 bg-[#0f0715]">
      <div>
        <Image
          src="/images/logo1.png"
          alt="log"
          width={180}
          height={180}
          className="mx-auto"
        />
      </div>
      <nav aria-label="Footer">
        <ul className="flex items-center flex-wrap justify-center gap-x-10 gap-y-4 text-white font-bold">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        {/* <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Projects</div>
        <div>Contact</div> */}
      </nav>
      <p className="text-white text-opacity-60 mt-6 text-center text-sm md:text-base">
        &copy; 2025 All Rights Reserved by Milha Solutions
      </p>
    </footer>
  );
};

export default Footer;
