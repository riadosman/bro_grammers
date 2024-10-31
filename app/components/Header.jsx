"use client";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Chevron from "../assets/icons/chevron.png";
import Eng from "../assets/icons/united-states.png";
import Link from "next/link";
import "../globals.css";
import Nav_shape from "../assets/icons/Nav_shape.png";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about-us" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Pricing", href: "/pricing" },
];

function Header() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="container w-full h-24 flex items-center justify-between">
      <Image src={Logo} alt="Logo" width={200} height={80} />
      <ul className="flex items-center justify-center gap-10">
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
      <div className="flex items-center justify-center gap-5">
        <div className="flex items-center justify-between gap-2 shadow-md rounded-3xl py-2 px-2 cursor-pointer">
          <Image
            src={Eng}
            alt="ENG"
            className="rounded-full"
            width={20}
            height={20}
          />
          English
          <Image src={Chevron} alt="Chevron" width={20} height={20} />
        </div>
        <button className="bg-main_blue text-white rounded-3xl py-2 px-4">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Header;
