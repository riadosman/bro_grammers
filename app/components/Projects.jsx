import Title from "./Title";
import ProjectCard from "./ProjectCard";
import ViewMore from "./ViewMore";
function Projects() {
  return (
    <div>
      <Title
        name="Projects"
        description="What benefit you get learning with us"
        icon="project_bg"
      />
      <div className="w-full my-10 flex items-center justify-around gap-10 flex-wrap">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <ViewMore />
    </div>
  );
}

export default Projects;
