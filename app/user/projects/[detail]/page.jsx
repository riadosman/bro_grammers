import Image from "next/image";
import Hero from "./../../components/Hero";
import Shape from "../../assets/icons/projects_shape.png";

function ProjectDetail() {
  return (
    <div>
      <Hero
        title="Projects"
        details="We Provide Our Projects"
        descriptions="Learn more about the company and the team behind it. Learn more about the company and the team behind it.Learn more about the company and the team behind it. behind it.Learn more about the company and the team behind it. . behind it.Learn more about the company and the t"
      />
      <Image src={Shape} alt="blog_shape" className="-mt-16" />
      <div class="container py-10 ">
        <div className="grid grid-cols-4 grid-rows-2 gap-6">
          <div className="col-span-2 row-span-2 h-[593px] bg-reload_color rounded-[32px]"></div>
          <div className="bg-reload_color h-[285.5px] rounded-[32px]"></div>
          <div className=" bg-reload_color rounded-[32px]"></div>
          <div className=" bg-reload_color rounded-[32px]"></div>
          <div className=" bg-reload_color rounded-[32px]"></div>
        </div>
        <div className="flex items-start gap-10 mt-10">
          <div>
            <p className="text-dark_text text-4xl leading-[54px] font-medium">
              Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id justo
              modo facilisis.
            </p>
            <p className="text-gray_text font-normal text-lg leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ut
              congue varius congue aliquet leo. varius congue aliquet leo. Netus
              neque nibh semper in diam viverra nibh aliquam elit. Amet orci et
              dolor, faucibus a leo malesuada ullamcorper. Amet pellentesque
              velit felis mollis turpis pellentesque donec. Cursus consectetur
              mattis molestie nibh no. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vel ut congue varius congue aliquet leo. Netus
              neque nibh semper in diam viverra nibh aliquam elit. Amet orci et
              dolor, faucibus a leo malesuada ullamcorper. Amet pellentesque
              velit felis mollis turpis pellentesque donec. Cursus consectetur
              mattis molestie nibh no. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vel ut congue varius congue aliquet leo. Netus
              neque nibh semper in diam viverra nibh aliquam elit. Amet orci et
              dolor, faucibus a leo malesuada ullamcorper. Amet pellentesque
              velit felis mollis turpis pellentesque donec. Cursus consectetur
              mattis molestie nibh no.
            </p>
          </div>
          <div>
            <p className="text-2xl font-medium">Project Link</p>
            <hr className="border-[#DEE7EE]  my-4" />
            <div className="relative">
              <input
                placeholder="Link Here"
                className="bg-[#F7F9FC] w-[420px] p-5"
              />
              <button className="bg-dark_blue text-white p-4 flex items-center gap-2 text-lg rounded absolute z-20 right-1 top-0.5">
                Copy Link
              </button>
            </div>
            <p className="text-2xl font-medium mt-10">Tools</p>
            <hr className="border-[#DEE7EE]  my-4" />
            <div className="flex items-center flex-wrap gap-4">
              <p className="border-[1px] border-dark_blue rounded-sm py-2 px-8 w-fit">
                Html
              </p>
              <p className="border-[1px] border-dark_blue rounded-sm py-2 px-8 w-fit">
                Css
              </p>
              <p className="border-[1px] border-dark_blue rounded-sm py-2 px-8 w-fit">
                Java script
              </p>
              <p className="border-[1px] border-dark_blue rounded-sm py-2 px-8 w-fit">
                Html
              </p>
              <p className="border-[1px] border-dark_blue rounded-sm py-2 px-8 w-fit">
                Css
              </p>
              <p className="border-[1px] border-dark_blue rounded-sm py-2 px-8 w-fit">
                Java script
              </p>
              <p className="border-[1px] border-dark_blue rounded-sm py-2 px-8 w-fit">
                Html
              </p>
              <p className="border-[1px] border-dark_blue rounded-sm py-2 px-8 w-fit">
                Java script
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
