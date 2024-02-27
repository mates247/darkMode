import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import ThemeToggle from "@/app/components/ThemeToggle";
const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-4 h-[80px] bg-bkg text-content">
      <div>
        <h1>Matěj Bittner</h1>
      </div>
      <div>
        <ThemeToggle />
      </div>
      <div className="flex gap-2">
        <FaFacebook size="20" />
        <FaInstagram size="20" />
        <FaLinkedin size="20" />
        <FaTwitter size="20" />
      </div>
    </nav>
  );
};

export default Nav;
