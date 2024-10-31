import Image from "next/image";
import Hero from "./../components/Hero";
import Shape from "../assets/icons/Blogs.png";
import blog from "../assets/blog.png";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import blogs_card from "../assets/blogs_card.png";

function BlogDetail() {
  return (
    <div>
      <Hero
        title="Blogs"
        details="Blogs Details"
        descriptions="Learn more about the company and the team behind it. Learn more about the company and the team behind it.Learn more about the company and the team behind it. behind it.Learn more about the company and the team behind it. . behind it.Learn more about the company and the t"
      />
      <Image src={Shape} alt="blog_shape" className="-mt-32" />
      <div className="container flex items-start gap-10 p-10">
        <div className="w-[764px]">
          <Image src={blog} alt="blog" width={764} height={470} />
          <div className="flex items-center gap-10 my-4 text-lg text-gray_text">
            <p className="flex items-center gap-2">
              <CiCalendar />
              March 18, 2021
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineRemoveRedEye />3 min read
            </p>
          </div>
          <p className="text-dark_text text-4xl leading-[54px] font-medium">
            Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id justo
            modo facilisis.
          </p>
          <p className="text-gray_text font-normal text-lg leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ut
            congue varius congue aliquet leo. varius congue aliquet leo. Netus
            neque nibh semper in diam viverra nibh aliquam elit. Amet orci et
            dolor, faucibus a leo malesuada ullamcorper. Amet pellentesque velit
            felis mollis turpis pellentesque donec. Cursus consectetur mattis
            molestie nibh no. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vel ut congue varius congue aliquet leo. Netus neque nibh
            semper in diam viverra nibh aliquam elit. Amet orci et dolor,
            faucibus a leo malesuada ullamcorper. Amet pellentesque velit felis
            mollis turpis pellentesque donec. Cursus consectetur mattis molestie
            nibh no. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vel ut congue varius congue aliquet leo. Netus neque nibh semper in
            diam viverra nibh aliquam elit. Amet orci et dolor, faucibus a leo
            malesuada ullamcorper. Amet pellentesque velit felis mollis turpis
            pellentesque donec. Cursus consectetur mattis molestie nibh no.
          </p>
        </div>
        <div className="w-[420px]">
          <p className="text-2xl font-medium">Search Anything</p>
          <hr className="border-[#DEE7EE]  my-4" />
          <div className="relative">
            <input
              placeholder="Enter keywords..."
              className="bg-[#F7F9FC] w-[420px] p-5"
            />
            <button className="bg-dark_blue text-white p-4 flex items-center gap-2 text-lg rounded absolute z-20 right-1 top-0.5">
              Search <IoIosSearch />
            </button>
          </div>
          <p className="text-2xl font-medium mt-10">Recent Post</p>
          <hr className="border-[#DEE7EE]  my-4" />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                src={blogs_card}
                alt="blogs_card"
                width={120}
                height={100}
              />
              <div>
                <p className="flex items-center gap-2 text-gray_text">
                  <CiCalendar className="text-light_text" />
                  March 18, 2021
                </p>
                <p className="text-dark_text leading-7">
                  Morbi eu risus nulla. Aliquam erat volutp nullam vitae ...
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={blogs_card}
                alt="blogs_card"
                width={120}
                height={100}
              />
              <div>
                <p className="flex items-center gap-2 text-gray_text">
                  <CiCalendar className="text-light_text" />
                  March 18, 2021
                </p>
                <p className="text-dark_text leading-7">
                  Morbi eu risus nulla. Aliquam erat volutp nullam vitae ...
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={blogs_card}
                alt="blogs_card"
                width={120}
                height={100}
              />
              <div>
                <p className="flex items-center gap-2 text-gray_text">
                  <CiCalendar className="text-light_text" />
                  March 18, 2021
                </p>
                <p className="text-dark_text leading-7">
                  Morbi eu risus nulla. Aliquam erat volutp nullam vitae ...
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={blogs_card}
                alt="blogs_card"
                width={120}
                height={100}
              />
              <div>
                <p className="flex items-center gap-2 text-gray_text">
                  <CiCalendar className="text-light_text" />
                  March 18, 2021
                </p>
                <p className="text-dark_text leading-7">
                  Morbi eu risus nulla. Aliquam erat volutp nullam vitae ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
