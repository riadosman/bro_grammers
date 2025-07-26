"use client";
import ServicesCard from "./ServicesCard";
import Title from "./Title";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Services() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <div className="py-14 container">
      <Title
        name="Services"
        description="What benefit you get learning with us"
        icon="service_bg"
      />
      <div className="flex items-center justify-around flex-wrap gap-4 my-8">
        {screenWidth > 700
          ? [0, 1, 2, 3, 4, 5, 6, 7].map((e, i) => (
              <ServicesCard key={i} id={e} />
            ))
          : [0, 1, 2, 3].map((e, i) => <ServicesCard key={i} id={e} />)}
      </div>
      <div className="md:hidden mx-auto flex items-center text-2xl w-20 gap-4">
        <div className="rounded-full bg-main_blue text-white w-fit h-fit p-2">
          <FaArrowLeft />
        </div>
        <div
          style={{ rounded: "100%", boxShadow: "0px 2px 12px 0px #0D0A2C14" }}
        >
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Services;
