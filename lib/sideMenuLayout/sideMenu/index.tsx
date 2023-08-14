import Logo from "./Logo";
import type { NavGroup } from "@/types/nav";
import NavGrouping from "./NavGrouping";

// Import the links into this page or set your static links here
const navLinks: NavGroup[] = [
  {
    name:'primary',
    links: [
    {
    name: "Home",
    path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Contact",
      path: "/contact"
    }
  ]},
  {
    name: 'Admin',
    links: [
    {
      name: "Users",
      path: "/users"
    },
    {
      name: "Teams",
      path: "/teams"
    },
  ]},
  {
    name: 'Generic',
    links: [
    {
      name: "Generic 1",
      path: "/generic1"
    },
    {
      name: "Generic 2",
      path: "/generic2"
    },
  ]}
];

const sideMenuPositionong = 'flex flex-col h-screen w-sideNav '
const sideMenuStyling = 'border-r-2 shadow-lg border-slate-300'

const SideMenu = () => {
  return (
    <nav className={`${sideMenuPositionong} ${sideMenuStyling}`}>
      <Logo />
      <ul className="flex flex-col justify-start pl-2">
        {navLinks && navLinks.map(
          (group) => <NavGrouping key={group.name} group={group} />
        )}
      </ul>
    </nav>
  )
};

export default SideMenu;
