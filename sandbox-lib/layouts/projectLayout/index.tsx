import { Project } from "@/types/project";
import ProjectDescription from "./ProjectDescription";
import ProjectScreenshots from "./ProjectScreenshots";

const projectPostioning = `flex flex-col md:flex-row h-full w-full`

const ProjectLayout = ({project}: {project: Project}) => {
  return (
    <>
      <div className={`${projectPostioning}`}>
        <ProjectDescription description={project.description}/>
        <ProjectScreenshots/>
      </div>
    </>
  )
};

export default ProjectLayout;
