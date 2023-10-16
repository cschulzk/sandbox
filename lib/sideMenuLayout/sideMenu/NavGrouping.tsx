import { NavGroup } from "@/types/nav";
import SideNavLink from "./SideNavLink";

const linkColor = 'text-gray-800'

const NavGrouping = ({group}: {group: NavGroup}) => {
  if (group.name === 'primary') {
    return (
      <ul className={`${linkColor} text-lg `}>
        {group.links.map(
          (link) => <SideNavLink key={link.name} navLink={link} />
        )}
      </ul>
    )
  } else {
    return (
      <li>
        <h2 className="font-bold text-lg text-gray-600/75">{group.name}</h2>
        <ul className={`${linkColor} pl-4 text-base`}>
          {group.links.map(
            (link) => <SideNavLink key={link.name} navLink={link} />
          )}
        </ul>
      </li>
    )
  }
};

export default NavGrouping;