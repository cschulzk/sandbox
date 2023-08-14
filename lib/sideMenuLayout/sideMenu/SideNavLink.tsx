import { NavLink } from "@/types/nav";
import Link from "next/link";

const SideNavLink = ({navLink}: {navLink: NavLink}) => {
  return (
    <li className="font-semibold hover:bg-gray-200">
      <Link href={navLink.path}>{navLink.name}</Link>
    </li>
  )
};

export default SideNavLink;