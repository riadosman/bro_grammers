import Hero from "./../components/Hero";
import Image from "next/image";
import Shape from "../assets/icons/projects_shape.png";
import ProjectCard from "./../components/ProjectCard";

function ProjectsPage() {
  return (
    <div>
      <Hero
        title="Projects"
        details="We Provide Our Projects"
        descriptions="Learn more about the company and the team behind it. Learn more about the company and the team behind it.Learn more about the company and the team behind it. behind it.Learn more about the company and the team behind it. . behind it.Learn more about the company and the t"
      />
      <Image src={Shape} alt="blog_shape" className="-mt-16" />
      <div className="container pt-10 pb-16 flex items-center justify-around gap-10 flex-wrap">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectsPage;
