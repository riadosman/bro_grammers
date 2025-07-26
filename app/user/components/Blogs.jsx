import Title from "./Title";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Blogs_card from "../assets/blogs_card.png";
import ViewMore from "./ViewMore";

function Blogs() {
  return (
    <div className="my-10">
      <Title
        name="Blogs"
        description="What benefit you get learning with us"
        icon="blogs_bg"
      />
      <div className="container flex items-center justify-around">
        <div className="flex items-center justify-between gap-5 w-[600px] p-6 text-sm custom-shadow rounded-3xl">
          <Image src={Blogs_card} alt="blogs_card" width={250} heigth={200} />
          <div className="flex items-start justify-between flex-col gap-4">
            <p className="text-[12px] font-semibold">
              Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id justo
              modo facilisis.
            </p>
            <p className="text-[10px] leading-4">
              Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at
              laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut
              hendrerit blandit neque in tempor. at laoreet mi. Fusce pulvinar
              commodo ligula, et egestas dolor at laoreet mi. Fusce pulvinar .
            </p>
            <button className="bg-main_blue text-white flex items-center p-2 rounded-lg">
              Read More <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 w-[600px] p-6 text-sm custom-shadow rounded-3xl">
          <Image src={Blogs_card} alt="blogs_card" width={250} heigth={200} />
          <div className="flex items-start justify-between flex-col gap-4">
            <p className="text-[12px] font-semibold">
              Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id justo
              modo facilisis.
            </p>
            <p className="text-[10px] leading-4">
              Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at
              laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut
              hendrerit blandit neque in tempor. at laoreet mi. Fusce pulvinar
              commodo ligula, et egestas dolor at laoreet mi. Fusce pulvinar .
            </p>
            <button className="bg-main_blue text-white flex items-center p-2 rounded-lg">
              Read More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <ViewMore />
    </div>
  );
}

export default Blogs;
