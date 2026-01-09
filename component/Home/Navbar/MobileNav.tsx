import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-100 bg-black opacity-70 w-full h-screen`}
      ></div>
      <div
        className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-10000`}
      >
        {navLinks.map((navLink) => (
          <Link key={navLink.id} href={navLink.url}>
            <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[20px]">
              {navLink.label}
            </p>
          </Link>
        ))}
        <div className="items-center text-gray-200 ml-12 space-x-2 lg:hidden">
          <Link href="/">EN</Link>
          <span>|</span>
          <Link href="/sh">SH</Link>
        </div>
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sw:w-8 sm:h-8 w-6 h-6 text-white"
        />
      </div>
    </div>
  );
};

export default MobileNav;
