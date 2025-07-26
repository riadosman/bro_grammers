import Image from "next/image";
import ui from "../assets/icons/ui_ux.png";
import first_ui from "../assets/icons/first_ui_ux.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function ServicesCard({ id }) {
  return (
    <div
      className={`
        w-[284px] h-[230px] rounded-2xl flex items-center flex-col p-6 gap-2
       ${id !== 0 ? " border-2 border-border_color " : " bg-[#4E92F31F]"}
      `}
    >
      <Image
        src={id === 0 ? first_ui : ui}
        alt="ui_ux"
        className="h-[64px] w-[88px]"
        height={64}
        width={88}
      />
      <p className="text-lg font-semibold">UX/UI Desgin</p>
      <p className="text-base leading-6 text-dark_gray text-center">
        Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla
      </p>
      <p className="flex items-center text-base cursor-pointer self-end text-light_text font-semibold">
        View More <MdKeyboardDoubleArrowRight />
      </p>
    </div>
  );
}

export default ServicesCard;
