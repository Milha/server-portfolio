"use client";

import { useState } from "react";
import NavSh from "./NavSh";
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
      <NavSh openNav={showNavHandler} />
      <MobileNavSh showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNavSh;
