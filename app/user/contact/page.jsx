import Hero from "./../components/Hero";
import Image from "next/image";
import contactImg from "../assets/icons/contact.png";
import ContactUs from "./../components/ContactUs";

function Contact() {
  return (
    <div>
      <Hero
        title="Contact us"
        details="Contact us Easily"
        descriptions="Learn more about the company and the team behind it. Learn more about the company and the team behind it.Learn more about the company and the team behind it. behind it.Learn more about the company and the team behind it. . behind it.Learn more about the company and the t"
      />
      <div className="container flex justify-end items-center mt-10">
        <Image
          src={contactImg}
          alt="contactImg"
          width={129}
          height={129}
          className="-mt-20"
        />
      </div>
      <ContactUs />
    </div>
  );
}

export default Contact;
