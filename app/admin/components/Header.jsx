"use client";
import Logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  console.log(pathname);

  const navItems = [
    { label: "Projects", href: "/admin/dashboard/projects" },
    { label: "Blogs", href: "/admin/dashboard/blogs" },
    { label: "pricing", href: "/admin/dashboard/pricing" },
  ];
  return (
    <div className="bg-[#282932] custom-shadow py-4 px-10 flex items-center ">
      <Image src={Logo} alt="logo" width={215} height={50} />
      <div className="flex items-center gap-10 ml-80">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item}
            className={`${
              pathname === item.href
                ? "bg-white text-[#434956]"
                : "bg-[#434956] text-white"
            }  text-xl custom-shadow-link rounded-3xl py-2 px-4`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
