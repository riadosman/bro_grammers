import Image from "next/image";

import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";
import Mobile_hero from "./assets/mobile-hero.png";
export default function Home() {
  return (
    <>
      <div className="w-full relative bg-[#f6f6f6] md:h-[135vh] h-[613px] -z-10">
        <div className="hero"></div>
        <div className="kits"></div>
        <div className="p-10 w-full text-center  h-screen absolute z-50 top-0 left-0">
          <div className="flex items-center ">
            <h1 className="mx-auto text-text text-xl md:text-[56px] leading-[36px] md:leading-[90px] font-bold">
              The Only
              <span className="bg-[#508AFF26] rounded-xl py-2 px-4 text-light_primary">
                All In One
              </span>
              Analytics <br />
              Tool For Your Engegment
            </h1>
          </div>
          <p className="md:leading-[34px] text-[11px] md:text-lg my-8">
            Prove the ROI of social media, plan more engaging content,
            <br /> and create automated white label analytics reports.
          </p>
          <div className="mt-5 flex gap-4 items-center justify-center">
            <button className="bg-main_blue md:w-[220px] w-[150px] md:h-fit h-[50px] text-white rounded-xl md:py-4 md:px-12 border-2 border-main_blue">
              Contact Us
            </button>
            <button className="text-main_blue md:w-[220px] rounded-xl w-[150px] md:h-fit h-[50px] md:py-4 md:px-12 border-2 border-main_blue">
              View Projects
            </button>
          </div>
        </div>
        <Image
          src={Mobile_hero}
          alt="analtics"
          width={300}
          height={200}
          className="w-full absolute z-50 bottom-0 mx-auto block md:hidden"
        />
      </div>
      <Services />
      <AboutUs />
      <Projects />
      <Blogs />
      <Pricing />
      <ContactUs />
    </>
  );
}
