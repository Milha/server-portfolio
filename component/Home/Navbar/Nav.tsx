import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  return (
    <div className="fixed h-[12vh] z-10 bg-blue-950 w-full">
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={170}
          height={170}
          className="-ml-6 sm:ml-0"
        />
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navLink) => (
              <Link key={navLink.id} href={navLink.url}>
                <p className="nav__link">{navLink.label}</p>
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
              Hire Me
            </button>
            <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-white lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
