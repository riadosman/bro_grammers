import Hero from "./../components/Hero";
import Image from "next/image";
import bussness_ethics from "../assets/business_ethics.png";
import About_shape from "../assets/icons/about_shape.png";
import Title from "./../components/Title";
import design from "../assets/icons/Design.png";
import ContactUs from "./../components/ContactUs";

function About() {
  return (
    <div>
      <Hero
        title="About us"
        details="About the company"
        descriptions="Learn more about the company and the team behind it. Learn more about the company and the team behind it.Learn more about the company and the team behind it. behind it.Learn more about the company and the team behind it. . behind it.Learn more about the company and the t"
      />
      <div className="container">
        <div className="flex items-center p-10 justify-between">
          <Image
            src={About_shape}
            alt="bussness_ethics"
            className="self-end rotate-180"
            width={113}
            height={83}
          />
          <Image
            src={bussness_ethics}
            alt="bussness_ethics"
            width={647}
            height={561}
          />
          <Image
            src={About_shape}
            alt="bussness_ethics"
            width={113}
            height={83}
            className="self-start"
          />
        </div>
        <Title
          name="About us"
          description="What benefit you get learning with us"
        />
        <p className="leading-[56px] text-gray_text font-normal text-[28px] mb-16">
          Powerful project management tools for your companies of all
          sizes.Powerful project management tools for your companies of all
          sizes. Powerful project management tools for your companies of all
          sizes.Powerful project Powerful project management tools for your
          companies of all sizes.Powerful project management tools for your
          companies of all sizes. Powerful project management tools for your
          companies of all sizes.Powerful project Powerful project management
          tools for your companies of all sizes.Powerful project management
          tools for your companies of all sizes. Powerful project management
          tools for your companies of all sizes.Powerful .
        </p>
      </div>
      <Image src={design} alt="design" />
      <ContactUs />
    </div>
  );
}

export default About;
