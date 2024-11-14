import Hero from "./../components/Hero";
import ServicesCard from "./../components/ServicesCard";
import Image from "next/image";
import servicesImg from "../assets/Services.png";
import Title from "./../components/Title";
function Services() {
  return (
    <div>
      <Hero
        title="Services"
        details="Our Services"
        descriptions="Learn more about the company and the team behind it. Learn more about the company and the team behind it.Learn more about the company and the team behind it. behind it.Learn more about the company and the team behind it. . behind it.Learn more about the company and the t"
      />
      <div className="container">
        <div className="flex items-center justify-around flex-wrap gap-4 my-10">
          {[1, 2, 3, 4].map((e, i) => (
            <ServicesCard key={i} id={e} />
          ))}
        </div>
        <Image
          src={servicesImg}
          alt="services"
          width={1232}
          height={554}
          className="mx-auto my-28"
        />
        <Title name="Services" description="Services Name" icon="service_bg" />
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
          tools for your companies of all sizes.Powerful .Powerful project
          managemeyour companies of all sizes.Powerful .
        </p>
      </div>
    </div>
  );
}

export default Services;
