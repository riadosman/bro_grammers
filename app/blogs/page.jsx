import Hero from "./../components/Hero";
import Image from "next/image";
import Shape from "../assets/icons/Blogs.png";
import Blogs_card from "../assets/blogs_card.png";
import { FaArrowRight } from "react-icons/fa6";

function Blogs() {
  return (
    <div className="mb-20">
      <Hero
        title="Blogs"
        details="Our Blogs"
        descriptions="Learn more about the company and the team behind it. Learn more about the company and the team behind it.Learn more about the company and the team behind it. behind it.Learn more about the company and the team behind it. . behind it.Learn more about the company and the t"
      />
      <Image src={Shape} alt="blog_shape" className="-mt-32" />
      <div className="container flex items-center justify-around flex-col gap-5">
        {/* this blogs i can make it in the other file (component) and call it but here we can custum it when add the real data */}
        <div className="flex items-center justify-between w-full py-8 pl-8 pr-[88px] text-sm custom-shadow rounded-3xl">
          <Image src={Blogs_card} alt="blogs_card" width={592} height={380} />
          <div className="w-[472px] flex items-start justify-between flex-col gap-10">
            <p className="text-[18px] font-semibold leading-[30px]">
              Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id justo
              modo facilisis.
            </p>
            <p className="text-gray_text leading-[28px] text-base">
              Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at
              laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut
              hendrerit blandit neque in tempor. at laoreet mi. Fusce pulvinar
              commodo ligula, et egestas dolor at laoreet mi. Fusce pulvinar
              commodo ligula, et egestas dolor
            </p>
            <button className="bg-main_blue text-white flex items-center py-4 px-8 rounded-lg">
              Read More <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full py-8 pl-8 pr-[88px] text-sm custom-shadow rounded-3xl">
          <Image src={Blogs_card} alt="blogs_card" width={592} height={380} />
          <div className="w-[472px] flex items-start justify-between flex-col gap-10">
            <p className="text-[18px] font-semibold leading-[30px]">
              Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id justo
              modo facilisis.
            </p>
            <p className="text-gray_text leading-[28px] text-base">
              Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at
              laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut
              hendrerit blandit neque in tempor. at laoreet mi. Fusce pulvinar
              commodo ligula, et egestas dolor at laoreet mi. Fusce pulvinar
              commodo ligula, et egestas dolor
            </p>
            <button className="bg-main_blue text-white flex items-center py-4 px-8 rounded-lg">
              Read More <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full py-8 pl-8 pr-[88px] text-sm custom-shadow rounded-3xl">
          <Image src={Blogs_card} alt="blogs_card" width={592} height={380} />
          <div className="w-[472px] flex items-start justify-between flex-col gap-10">
            <p className="text-[18px] font-semibold leading-[30px]">
              Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id justo
              modo facilisis.
            </p>
            <p className="text-gray_text leading-[28px] text-base">
              Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at
              laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut
              hendrerit blandit neque in tempor. at laoreet mi. Fusce pulvinar
              commodo ligula, et egestas dolor at laoreet mi. Fusce pulvinar
              commodo ligula, et egestas dolor
            </p>
            <button className="bg-main_blue text-white flex items-center py-4 px-8 rounded-lg">
              Read More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
