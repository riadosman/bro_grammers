import Image from "next/image";
import About from "../assets/about_us.png";
import About_shape from "../assets/icons/about_shape.png";
import Design from "../assets/icons/Design.png";
import { MdArrowOutward } from "react-icons/md";

function AboutUs() {
  return (
    <>
      <div className="flex items-center justify-around">
        <Image src={About} alt="about-us" width={487} height={414} />
        <div className="w-[561px]">
          <p className="text-light_text">About us</p>
          <div className="flex justify-between">
            <h3 className="text-4xl font-semibold leading-[56px]">
              What benefit you get <br /> learning with us
            </h3>
            <Image
              src={About_shape}
              alt="about_shape"
              width={113}
              height={83}
            />
          </div>
          <p className="text-xl leading-9 text-dark_gray my-4">
            Powerful project management tools for your companies of all
            sizes.Powerful project management tools for your companies of all
            sizes. Powerful project management tools for your companies of all
            sizes.Powerful project
          </p>
          <div className="bg-dark_gray rounded-3xl w-fit flex items-center">
            <button className="rounded-full bg-white m-1 p-2 text-lg">
              <MdArrowOutward />
            </button>
            <button className="rounded-full bg-light_text text-white p-2 text-lg">
              About us
            </button>
          </div>
        </div>
      </div>
      <Image src={Design} alt="Design" />
    </>
  );
}

export default AboutUs;
