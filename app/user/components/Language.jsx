"use client";
import { useState } from "react";
import Image from "next/image";
import EngIcon from "../assets/icons/united-states.png"; // replace with the actual path to your English icon
import ArbIcon from "../assets/icons/arabflag.png"; // replace with the actual path to your Arabic icon
import Chevron from "../assets/icons/chevron.png"; // replace with the path to your Chevron icon

function LanguageToggle() {
  const [language, setLanguage] = useState("EN");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative">
      {/* Toggle button */}
      <div
        className="flex items-center justify-between gap-2 shadow-md rounded-3xl py-2 px-2 cursor-pointer text-white"
        onClick={toggleDropdown}
      >
        <Image
          src={language === "EN" ? EngIcon : ArbIcon}
          alt={language === "EN" ? "ENG" : "ARB"}
          className="rounded-full"
          width={20}
          height={20}
        />
        <span className="text-dark_blue">{language === "EN" ? "English" : "Arabic"}</span>
        <Image src={Chevron} alt="Chevron" width={20} height={20} />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-[#282932] text-white rounded-lg shadow-lg">
          <div
            onClick={() => selectLanguage("EN")}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-[#3a3b42]"
          >
            <Image src={EngIcon} alt="ENG" width={20} height={20} />
            <span>English</span>
          </div>
          <div
            onClick={() => selectLanguage("AR")}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-[#3a3b42]"
          >
            <Image src={ArbIcon} alt="ARB" width={20} height={20} />
            <span>Arabic</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageToggle;
