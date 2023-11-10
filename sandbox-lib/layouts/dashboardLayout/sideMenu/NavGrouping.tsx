import { NavGroup } from "@/types/nav";
import SideNavLink from "./SideNavLink";

const links = 'text-gray-800 text-center'
const linkGroup ='flex flex-col items-center'

const NavGrouping = ({group}: {group: NavGroup}) => {
  if (group.name === 'primary') {
    return (
      <div className={`${linkGroup}`}>
        <ul className={`${links} text-2xl`}>
          {group.links.map(
            (link) => <SideNavLink key={link.name} navLink={link} />
          )}
        </ul>
      </div>
    )
  } else {
    return (
      <div className={`${linkGroup}`}>
        <h2 className="font-bold text-2xl text-gray-600/75">{group.name}</h2>
        <ul className={`${links} text-xl`}>
          {group.links.map(
            (link) => <SideNavLink key={link.name} navLink={link} />
          )}
        </ul>
      </div>
    )
  }
};

export default NavGrouping;