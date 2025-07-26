import Image from "next/image";
import Hero from "./../components/Hero";
import Shape from "../assets/icons/pricing.png";
import Green_Tick from "../assets/icons/greenTick.png";
import Link from "next/link";

function Pricing() {
  return (
    <div>
      <Hero
        title="Pricing"
        details="We Provide Our Plans"
        descriptions="Learn more about the company and the team behind it. Learn more about the company and the team behind it.Learn more about the company and the team behind it. behind it.Learn more about the company and the team behind it. . behind it.Learn more about the company and the t"
      />
      <Image src={Shape} alt="blog_shape" className="-mt-16" />
      <div className="container flex items-center justify-between flex-wrap gap-9 py-10">
        {/* i Can make it component but in the real website it will be change content */}
        <div className="h-[650px] w-[388px] rounded-3xl bg-light_text text-white p-8 flex flex-col gap-4">
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
        <div className="h-[650px] w-[388px] rounded-3xl border-[1px] border-[#D4D2E3] p-8 flex flex-col gap-4">
          <p className="text-2xl font-semibold">Basic</p>
          <p className="text-gray_text">
            <span className="text-[56px] text-light_text font-bold">From</span>
            /99$
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
          <Link
            href="/pricing/detail"
            className="text-center bg-light_text text-white w-full rounded-[40px] py-6 text-lg"
          >
            Read More
          </Link>
        </div>
        <div className="h-[650px] w-[388px] rounded-3xl border-[1px] border-[#D4D2E3] p-8 flex flex-col gap-4">
          <p className="text-2xl font-semibold">Basic</p>
          <p className="text-gray_text">
            <span className="text-[56px] text-light_text font-bold">From</span>
            /99$
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
          <Link
            href="/pricing/detail"
            className="text-center bg-light_text text-white w-full rounded-[40px] py-6 text-lg"
          >
            Read More
          </Link>
        </div>
        <div className="h-[650px] w-[388px] rounded-3xl border-[1px] border-[#D4D2E3] p-8 flex flex-col gap-4">
          <p className="text-2xl font-semibold">Basic</p>
          <p className="text-gray_text">
            <span className="text-[56px] text-light_text font-bold">From</span>
            /99$
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
          <Link
            href="/pricing/detail"
            className="text-center bg-light_text text-white w-full rounded-[40px] py-6 text-lg"
          >
            Read More
          </Link>
        </div>
        <div className="h-[650px] w-[388px] rounded-3xl border-[1px] border-[#D4D2E3] p-8 flex flex-col gap-4">
          <p className="text-2xl font-semibold">Basic</p>
          <p className="text-gray_text">
            <span className="text-[56px] text-light_text font-bold">From</span>
            /99$
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
          <Link
            href="/pricing/detail"
            className="text-center bg-light_text text-white w-full rounded-[40px] py-6 text-lg"
          >
            Read More
          </Link>
        </div>
        <div className="h-[650px] w-[388px] rounded-3xl border-[1px] border-[#D4D2E3] p-8 flex flex-col gap-4">
          <p className="text-2xl font-semibold">Basic</p>
          <p className="text-gray_text">
            <span className="text-[56px] text-light_text font-bold">From</span>
            /99$
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
          <Link
            href="/pricing/detail"
            className="text-center bg-light_text text-white w-full rounded-[40px] py-6 text-lg"
          >
            Read More
          </Link>
        </div>
        <div className="h-[650px] w-[388px] rounded-3xl border-[1px] border-[#D4D2E3] p-8 flex flex-col gap-4">
          <p className="text-2xl font-semibold">Basic</p>
          <p className="text-gray_text">
            <span className="text-[56px] text-light_text font-bold">From</span>
            /99$
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
          <Link
            href="/pricing/detail"
            className="text-center bg-light_text text-white w-full rounded-[40px] py-6 text-lg"
          >
            Read More
          </Link>
        </div>
        <div className="h-[650px] w-[388px] rounded-3xl border-[1px] border-[#D4D2E3] p-8 flex flex-col gap-4">
          <p className="text-2xl font-semibold">Basic</p>
          <p className="text-gray_text">
            <span className="text-[56px] text-light_text font-bold">From</span>
            /99$
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
          <Link
            href="/pricing/detail"
            className="text-center bg-light_text text-white w-full rounded-[40px] py-6 text-lg"
          >
            Read More
          </Link>
        </div>
        <div className="h-[650px] w-[388px] rounded-3xl border-[1px] border-[#D4D2E3] p-8 flex flex-col gap-4">
          <p className="text-2xl font-semibold">Basic</p>
          <p className="text-gray_text">
            <span className="text-[56px] text-light_text font-bold">From</span>
            /99$
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
          <Link
            href="/pricing/detail"
            className="text-center bg-light_text text-white w-full rounded-[40px] py-6 text-lg"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
