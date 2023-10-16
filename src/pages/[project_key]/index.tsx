import PageLayout from "@/components/pageLayout";
import { titleStyle } from "@/components/pageLayout/header/PageTitle";
import ProjectLayout from "@/components/projectLayout";
import { projects } from "@/data/projects";
import { sandboxProjects } from "@/data/sandbox";
import type { Project } from "@/types/project";
import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next/types";

const ProjectPage = ({project}: {project: Project}) => {
  const projectTitle = 
  <a 
    href={project.url} 
    target="_blank"
    rel="noreferrer"
    className={`${titleStyle} hover:font-semibold`}
  >
    {project.title}
  </a>

  return (
    <>
      <Head>
        <title>{`${project.title} - C. Schulzke`}</title>
        <meta
          name="description"
          content="The hub of all my hobby and professional projects."
          key="description"
        />
      </Head>
      <PageLayout pageTitle={projectTitle}>
        <ProjectLayout project={project}/>
      </PageLayout>
    </>
  )
};

export default ProjectPage;


export const getStaticPaths: GetStaticPaths = () => {
  const paths = [...projects, ...sandboxProjects].map(project => ({params: {project_key: project.key}}))
  return ({
    paths: paths, 
    fallback: false,
  })
}

export const getStaticProps: GetStaticProps<{project: Project}> = (context) => {
  const projectKey = context?.params?.project_key;
  const project = [...projects, ...sandboxProjects].find(p => p.key === projectKey);
  if (!projectKey || !project) {
    return ({
      props: {project: {} as Project}
    })
  }
  return ({
    props: {project: project}
  })
}