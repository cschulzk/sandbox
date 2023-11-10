import Logo from "./Logo";
import NavGrouping from "./NavGrouping";

const sideMenuPositionong = 'h-screen w-sideNav items-center';
const sideMenuStyling = 'border-r-2 shadow-lg border-slate-300';
const mobileStyle = 'hidden lg:flex lg:flex-col';

const SideMenu = () => {
  // const user = useUser()
  return (
    <nav className={`${mobileStyle} ${sideMenuPositionong} ${sideMenuStyling}`}>
      <Logo />
      <ul className="flex flex-col justify-start pl-2 overflow-y-scroll">
        {/* {navLinks.map(
          (group) => <NavGrouping key={group.name} group={group} />
        )} */}
      </ul>
    </nav>
  )
};

export default SideMenu;
