"use client";
import Hero from "./../../components/Hero";
import Image from "next/image";
import Shape from "../../assets/icons/pricing.png";
import Green_Tick from "../../assets/icons/greenTick.png";
import { FiChevronUp } from "react-icons/fi";
import { useState } from "react";

function PricingDetail() {
  const [features, setFeatures] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const toggleFeature = (index) => {
    setFeatures((prevFeatures) => {
      const updatedFeatures = [...prevFeatures];
      updatedFeatures[index] = !updatedFeatures[index];
      return updatedFeatures;
    });
  };
  return (
    <div>
      <Hero
        title="Pricing"
        details="We Provide Our Plans"
        descriptions="Learn more about the company and the team behind it. Learn more about the company and the team behind it.Learn more about the company and the team behind it. behind it.Learn more about the company and the team behind it. . behind it.Learn more about the company and the t"
      />
      <Image src={Shape} alt="blog_shape" className="-mt-16" />
      <div className="container p-4">
        <div className="flex items-center justify-between gap-14">
          <div className="h-[650px] min-w-[388px] rounded-3xl bg-light_text text-white p-8 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold">your Plan </p>
              <div className="rounded-[40px] py-3 px-5 text-black bg-white">
                Special
              </div>
            </div>
            <p className="text-4xl font-semibold my-4">Fixed Price</p>
            <p className="leading-8">
              Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit
              ctetur adipiscing elit .
            </p>
            <hr />
            <p className="flex items-center gap-3 font-semibold text-lg">
              <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
              Everything on Basic plan
            </p>
            <p className="flex items-center gap-3 font-semibold text-lg">
              <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
              Up to 1,000,000 tracked visits
            </p>
            <p className="flex items-center gap-3 font-semibold text-lg">
              <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
              Premium support
            </p>
            <p className="flex items-center gap-3 font-semibold text-lg">
              <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
              Mobile app
            </p>
            <p className="flex items-center gap-3 font-semibold text-lg">
              <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
              Up to 10 team members
            </p>
            <button className="bg-white text-light_text w-full rounded-[40px] py-6 text-lg">
              Contact Us
            </button>
          </div>
          <div>
            <p className="text-3xl font-medium leading-[56px]">Description :</p>
            <p className="text-[22px] leading-10 font-medium text-gray_text">
              Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit
              adipiscing elit . Lorem ipsit amet dolor siti conse ctetur
              adipiscing elit adipiscing elit . Lorem ipsum dolor sit amconse
              ctetur adipiscing elit adipiscing elit . Lorem ipsum dolor sit
              amet dolor siti conse ctetur adipiscing elit adipiscing elit .
              Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit
              adipiscing elit . Lorem ipsum dolor sit amet dolor siti conse
              cdipiscing elit adipiscing elit . Lorem ipsum dolor sit amet dolor
              siti conse ctetur adipiscing elit adipiscing elit Lorem ipsum
              dolor sit amet dolor siti conse ctetur adipiscing elit adi tetur
              adipiscing e Lorem ipsum dolor sit amet dolor siti conse ctetur
              adipiscing elit adipiscing elit . Lorem ipsum dolor sit amet dolor
              dolor siti conse ctetur adipiscing elit adipiscing elit . Lorem
              ipsum dolor sit amet dolor siti conse ctetur adipiscing e Lorem
              ipsum dolor sit amet dolor siti conse ctetLorem
            </p>
          </div>
        </div>
        <div>
          <p className="text-3xl font-medium my-20">Features :</p>
          <div>
            {[
              "All analytics features",
              "All analytics features",
              "All analytics features",
              "All analytics features",
              "All analytics features",
              "All analytics features",
              "All analytics features",
            ].map((featureTitle, index) => (
              <div key={index} className="mb-4">
                {/* Feature Header */}
                <div
                  className="flex items-center justify-between cursor-pointer py-2"
                  onClick={() => toggleFeature(index)}
                >
                  <p className="flex items-center gap-3 font-semibold text-2xl">
                    <Image
                      src={Green_Tick}
                      alt="Green tick"
                      width={26}
                      height={26}
                    />
                    {featureTitle}
                  </p>
                  <p className="w-[18px] h-[9px] text-gray_text">
                    {features[index] ? <FiChevronUp /> : <FiChevronUp />}
                  </p>
                </div>

                {/* Feature Description, shown only if the feature is open */}
                {features[index] && (
                  <p className="text-gray_text leading-10 text-xl py-4">
                    Lorem ipsum dolor sit amet dolor siti conse ctetur
                    adipiscing elit. This feature includes comprehensive support
                    for advanced analytics and detailed insights.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingDetail;
