import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";

function ProjectCard() {
  return (
    <div className="w-[600px] h-[362px] text-white p-8 rounded-[32px] flex flex-col card">
      <h3 className="text-4xl">Title (Project Name)</h3>
      <p className="leading-9 text-xl my-8">
        Description About Project Description About Project Description About
        Project Description About Project Description Project Description About
        Project Project Description .
      </p>
      <Link
        href="/projects/detail"
        className="flex items-center bg-light_text text-white rounded-lg text-base p-[10px] self-end"
      >
        View More <MdKeyboardDoubleArrowRight />
      </Link>
    </div>
  );
}

export default ProjectCard;
