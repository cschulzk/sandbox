import { projects } from "@/data/projects";
import { sandboxProjects } from "@/data/sandbox";
import { NavGroup } from "@/types/nav";

const navLinks: NavGroup[] = [
  {
    name:'primary',
    links: [
      {
      name: "Home",
      path: "/"
      }
    ]
  },
  {
    name:'Projects',
    links: projects.map(project => {return {name: project.title, path: `/${project.key}`}})
  },
  {
    name: 'Sandbox',
    links: sandboxProjects.map(project => {return {name: project.title, path: `/${project.key}`}})
  },
  // {
  //   name: 'Personal',
  //   require_auth: true,
  //   links: []
  // }
];

export default navLinks