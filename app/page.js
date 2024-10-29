import Image from "next/image";
import spiral from "./assets/icons/spiral.png";
import spiral_ from "./assets/icons/spiral_.png";

import spiraly from "./assets/icons/spiraly.png";
import spiraly_ from "./assets/icons/spiraly_.png";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <>
      <div className="w-full relative bg-[#f6f6f6] h-[135vh] -z-10">
        <div className="hero"></div>
        <div className="kits"></div>
        <div className="p-10 w-full text-center  h-screen absolute z-50 top-0 left-0">
          <div className="flex items-center">
            <h1 className="mx-auto text-text text-[56px] leading-[90px] font-bold">
              The Only
              <span className="bg-[#508AFF26] rounded-xl py-2 px-4 text-light_primary">
                All In One
              </span>
              Analytics <br />
              Tool For Your Engegment
            </h1>
          </div>
          <p className="leading-[34px] text-lg my-8">
            Prove the ROI of social media, plan more engaging content,
            <br /> and create automated white label analytics reports.
          </p>
          <div className="mt-5 flex gap-4 items-center justify-center">
            <button className="bg-main_blue text-white rounded-xl py-4 px-12 border-2 border-main_blue">
              Contact Us
            </button>
            <button className="text-main_blue rounded-xl py-4 px-12 border-2 border-main_blue">
              View Projects
            </button>
          </div>
        </div>
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
