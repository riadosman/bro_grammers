import Image from "next/image";
import Pricing_img from "../assets/icons/pricing.png";
import Title from "./Title";
import Green_Tick from "../assets/icons/greenTick.png";
import ViewMore from "./ViewMore";

function Pricing() {
  return (
    <div>
      <Title
        name="Pricing"
        description="What benefit you get learning with us"
        icon="pricing_bg"
      />
      <div className="container flex items-center justify-between gap-9">
        {/* i Can make it component but in the real website it will be change content */}
        <div className="h-[650px] rounded-3xl border-[1px] border-[#D4D2E3] p-8 flex flex-col gap-4">
          <p className="text-2xl font-semibold">Basic</p>
          <p className="text-gray_text">
            <span className="text-[56px] text-light_text font-bold">$99</span>
            /month
          </p>
          <p className="text-gray_text leading-8">
            Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit
            ctetur adipiscing elit .
          </p>
          <hr />
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            All analytics features
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Up to 250,000 tracked visits
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Normal support
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Mobile app
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Up to 3 team members
          </p>
          <button className="bg-light_text text-white w-full rounded-[40px] py-6 text-lg">
            Read More
          </button>
        </div>
        <div className="h-[650px] rounded-3xl bg-light_text text-white p-8 flex flex-col gap-4">
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
        <div className="h-[650px] rounded-3xl border-[1px] border-[#D4D2E3] p-8 flex flex-col gap-4">
          <p className="text-2xl font-semibold">Basic</p>
          <p className="text-gray_text">
            <span className="text-[56px] text-light_text font-bold">$99</span>
            /month
          </p>
          <p className="text-gray_text leading-8">
            Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit
            ctetur adipiscing elit .
          </p>
          <hr />
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            All analytics features
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Up to 250,000 tracked visits
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Normal support
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Mobile app
          </p>
          <p className="flex items-center gap-3 font-semibold text-lg">
            <Image src={Green_Tick} alt="Green tick" width={26} height={26} />
            Up to 3 team members
          </p>
          <button className="bg-light_text text-white w-full rounded-[40px] py-6 text-lg">
            Read More
          </button>
        </div>
      </div>
      <ViewMore />
    </div>
  );
}

export default Pricing;
