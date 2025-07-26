import Image from "next/image";
import l_logo from "../assets/l_logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-dark_bg text-white p-8">
      <div className="container flex items-center justify-between">
        <Image src={l_logo} alt="Light Logo" height={56} width={185} />
        <p>© All Copy Right Are Reserved</p>
        <div className="flex items-center gap-4 justify-between">
          <div className="bg-[#1877F2] rounded-full p-2">
            <FaFacebook />
          </div>
          <div className="bg-[#1DA1F2] rounded-full p-2">
            <FaTwitter />
          </div>
          <div className="bg-[#F00073] rounded-full p-2">
            <FaInstagram />
          </div>
          <div className="bg-[#25D366] rounded-full p-2">
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
