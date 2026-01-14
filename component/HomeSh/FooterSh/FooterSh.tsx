import React from "react";

import Image from "next/image";

const FooterSh = () => {
  return (
    <footer className="pt-16 pb-16 bg-[#0f0715]">
      <div>
        <Image
          src="/images/logo.png"
          alt="log"
          width={180}
          height={180}
          className="mx-auto"
        />
      </div>
      <nav aria-label="Footer">
        {/* <div>Početna</div>
        <div>O nama</div>
        <div>Usluge</div>
        <div>Projekti</div>
        <div>Kontakt</div> */}
        <ul className="flex items-center flex-wrap justify-center gap-x-10 gap-y-4 text-white font-bold">
          <li>
            <a href="#">Početna</a>
          </li>
          <li>
            <a href="#">O nama</a>
          </li>
          <li>
            <a href="#">Usluge</a>
          </li>
          <li>
            <a href="#">Projekti</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
        </ul>
      </nav>
      <p className="text-white text-opacity-60 mt-6 text-center text-sm md:text-base">
        &copy; 2025 Sva prava zadržava Milha Solutions
      </p>
    </footer>
  );
};

export default FooterSh;
