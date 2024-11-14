"use client";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi"; // Import icons
import Eng from "../assets/icons/united-states.png";
import Link from "next/link";
import { useState } from "react";
import "../globals.css";
import Nav_shape from "../assets/icons/Nav_shape.png";
import { usePathname } from "next/navigation";
import Language from "../components/Language.jsx";

const navItems = [
  { label: "Home", href: "/user" },
  { label: "Services", href: "/user/services" },
  { label: "About us", href: "/user/about-us" },
  { label: "Projects", href: "/user/projects" },
  { label: "Blogs", href: "/user/blogs" },
  { label: "Pricing", href: "/user/pricing" },
];

function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container w-full h-24 flex items-center justify-between px-4 md:px-8">
      {/* Logo */}
      <Image
        src={Logo}
        alt="Logo"
        width={150}
        height={60}
        className="md:w-[200px] md:h-[80px]"
      />

      {/* Menu Toggle for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}{" "}
          {/* Use react-icons */}
        </button>
      </div>

      {/* Navigation Links (Hidden on small screens) */}
      <ul
        className={`fixed inset-0 bg-white z-10 flex flex-col items-center justify-center gap-10 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform md:relative md:flex md:flex-row md:bg-transparent md:translate-x-0 md:gap-10`}
      >
        {navItems.map((item) => (
          <li key={item.href} className="relative">
            <Link
              href={item.href}
              className={`text-xl md:text-base ${
                pathname === item.href ? "text-light_text" : ""
              }`}
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {item.label}
            </Link>
            {pathname === item.href && (
              <Image
                src={Nav_shape}
                alt="Nav_shape"
                width={53}
                height={8}
                className="hidden md:block absolute -bottom-3 left-1/2 transform -translate-x-1/2"
              />
            )}
          </li>
        ))}
      </ul>

      {/* Language Selector and Contact Button */}
      <div className="hidden md:flex items-center justify-center gap-5">
        <Language />
        <Link
          href="/user/contact"
          className="bg-main_blue text-white rounded-3xl py-2 px-4"
        >
          Contact
        </Link>
      </div>

      {/* Language Selector and Contact Button for Mobile */}
      {menuOpen && (
        <div className="flex md:hidden flex-col items-center gap-4 mt-8">
          <Language />
          <Link
            href="/user/contact"
            className="bg-main_blue text-white rounded-3xl py-2 px-4"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
