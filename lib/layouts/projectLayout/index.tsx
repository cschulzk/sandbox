import { Project } from "@/types/project";
import ProjectDescription from "./ProjectDescription";
import ProjectScreenshots from "./ProjectScreenshots";

const projectPostioning = `flex flex-row h-full w-full`

const ProjectLayout = ({project}: {project: Project}) => {
  return (
    <>
      <div className={`${projectPostioning}`}>
        <ProjectScreenshots/>
        <ProjectDescription description={project.description}/>
      </div>
    </>
  )
};

export default ProjectLayout;
