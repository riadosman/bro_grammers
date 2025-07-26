"use client";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Chevron from "../assets/icons/chevron.png";
import Eng from "../assets/icons/united-states.png";
import Link from "next/link";
import "../globals.css";
import Nav_shape from "../assets/icons/Nav_shape.png";
import { usePathname } from "next/navigation";
import Language from "../components/Language.jsx";
import MenuIcon from "../assets/icons/menu.png";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/user" },
  { label: "Services", href: "/user/services" },
  { label: "About us", href: "/user/about-us" },
  { label: "Projects", href: "/user/projects" },
  { label: "Blogs", href: "/user/blogs" },
  { label: "Pricing", href: "/user/pricing" },
];

function Header() {
  const [showIcon, setShowIcon] = useState(false);
  const pathname = usePathname();

  const toggleIcon = () => {
    setShowIcon(true);
  };
  return (
    <div className="container w-full h-24 flex items-center justify-between p-4 overflow-hidden">
      <Image
        src={Logo}
        alt="Logo"
        width={200}
        height={80}
        className="w-[180px] h-[70px]"
      />
      <div className="cursor-pointer flex md:hidden">
        <Image
          src={MenuIcon}
          alt="Menu icon"
          width={28}
          height={20}
          onClick={toggleIcon}
        />
      </div>
      {showIcon && (
        <div className="text-center absolute top-[85px] left-0 overflow-y-hidden bg-[#3E6FF3] w-full flex items-center justify-center flex-col">
          <ul>
            {navItems.map((item) => (
              <>
                <li key={item.href} className="relative w-96 py-8">
                  <Link
                    href={item.href}
                    className={`${
                      pathname === item.href ? "text-light_text" : "text-white"
                    }`}
                    onClick={() => {
                      setShowIcon(false);
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
                <hr />
              </>
            ))}
          </ul>
          <div className="flex items-center my-20 gap-10">
            <Language />
            <Link
              href="/user/contact"
              className="bg-white text-main_blue rounded-3xl py-2 px-8 md:px-4 "
            >
              Contact
            </Link>
          </div>
        </div>
      )}
      <ul className="md:flex hidden items-center justify-center gap-10 ">
        {navItems.map((item) => (
          <li key={item.href} className="relative">
            <Link
              href={item.href}
              className={`${pathname === item.href ? "text-light_text" : ""}`}
            >
              {item.label}
            </Link>
            {pathname === item.href && (
              <Image
                src={Nav_shape}
                alt="Nav_shape"
                width={53}
                height={8}
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
              />
            )}
          </li>
        ))}
      </ul>
      <div className="md:flex hidden items-center justify-center gap-5">
        <Language />
        <Link
          href="/user/contact"
          className="bg-main_blue text-white rounded-3xl py-2 px-4"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
