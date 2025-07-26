import Title from "./Title";
import Image from "next/image";
import contact from "../assets/contact.png";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMdCall, IoMdMail } from "react-icons/io";

function ContactUs() {
  return (
    <div className="p-10">
      <Title name="Contact us" description="Get in touch" />
      <div className="relative shadow rounded-3xl flex items-center justify-between mx-auto p-16 w-[960px] my-20">
        <div className="w-1/2">
          <form className="flex items-center flex-col gap-5">
            <div className="flex items-center gap-10">
              <div>
                <label for="firstName" className="my-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="FIrst name"
                  className="rounded-lg border-2 border-[#D0D5DD] p-4 w-full"
                />
              </div>
              <div>
                <label for="lastName" className="my-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="rounded-lg border-2 border-[#D0D5DD] p-4 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label for="Email" className="my-2">
                Email
              </label>
              <input
                type="text"
                placeholder="you@company.com"
                className="rounded-lg border-2 border-[#D0D5DD] p-4 w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label for="Message" className="my-2">
                Message
              </label>
              <textarea
                name=""
                id="Message"
                rows="3"
                placeholder="Enter your message"
                className="rounded-lg border-2 border-[#D0D5DD] p-4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-lg bg-light_text w-full text-white py-6"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="flex items-center justify-between flex-col gap-10">
          <Image src={contact} alt="contact" width={340} heigth={247} />
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full text-light_text border-[1px] border-light_text p-2 text-2xl">
                <FaMapMarkerAlt />
              </div>
              <p>838 Cantt Sialkot, pakistan</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full text-light_text border-[1px] border-light_text p-2 text-2xl">
                <IoMdCall />
              </div>
              <p>979-988-89787</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full text-light_text border-[1px] border-light_text p-2 text-2xl">
                <IoMdMail />
              </div>
              <p>abcd123@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="absolute -right-16 bottom-8 text-2xl rounded-br-full rounded-tr-2xl bg-light_text text-white w-[50px] flex flex-col items-center gap-3 p-8">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
