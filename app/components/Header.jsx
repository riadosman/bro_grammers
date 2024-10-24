import Image from "next/image";
import Logo from "../assets/logo.png";
import Chevron from "../assets/icons/chevron.png";
import Eng from "../assets/icons/united-states.png";
import Link from "next/link";
import "../globals.css";

function Header() {
  return (
    <div className="container w-full h-24 flex items-center justify-between">
      <Image src={Logo} alt="Logo" width={200} height={80} />
      <ul className="flex items-center justify-center gap-10">
        <li>
          <Link href="/" className="home-text">
            Home
          </Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/about-us">About us</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
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
        <button className="bg-blue-600 text-white rounded-3xl py-2 px-4">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Header;
