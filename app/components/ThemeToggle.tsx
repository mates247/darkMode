"use client";
import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "@/app/context/ThemeContext";

const ThemeToggle = () => {
  const { toogle, theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <button
      onClick={toogle}
      className="flex border-2 bg-bkg text-content p-[3px]  justify-between w-[60px] rounded-full relative"
    >
      <div
        className={`absolute w-[20px] h-[20px] rounded-full  transition-all duration-200 ${theme === "dark" ? "ml-[30px] bg-white" : "bg-black"}`}
      ></div>
      <FaSun size="20" className="" />
      <FaMoon size="20" />
    </button>
  );
};

export default ThemeToggle;
