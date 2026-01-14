"use client";

import { useState } from "react";
// import Nav from "../../Home/Navbar/Nav";
import NavSh from "./NavSh";
// import MobileNav from "../../Home/Navbar/MobileNav";
// import Nav from "@/component/Home/Navbar/Nav";
import MobileNavSh from "./MobileNavSh";

const ResponsiveNavSh = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav(true);
  };
  const closeNavHandler = () => {
    setShowNav(false);
  };
  return (
    <div>
      {/* Responsive Nav */}
      <NavSh openNav={showNavHandler} />
      <MobileNavSh showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNavSh;
