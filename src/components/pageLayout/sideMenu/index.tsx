import Logo from "./Logo";
import type { NavGroup } from "@/types/nav";
import NavGrouping from "./NavGrouping";
import { projects } from "@/data/projects";
import { sandboxProjects } from "@/data/sandbox";

// Import the links into this page or set your static links here
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

const sideMenuPositionong = 'flex flex-col h-screen w-sideNav items-center '
const sideMenuStyling = 'border-r-2 shadow-lg border-slate-300'

const SideMenu = () => {
  // const user = useUser()
  return (
    <nav className={`${sideMenuPositionong} ${sideMenuStyling}`}>
      <Logo />
      <ul className="flex flex-col justify-start pl-2 overflow-y-scroll">
        {navLinks && navLinks.map(
          (group) => <NavGrouping key={group.name} group={group} />
        )}
      </ul>
    </nav>
  )
};

export default SideMenu;
