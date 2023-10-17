import Image from "next/image";
import logo from '../../../../public/logo.jpg';


const Logo = () => {
  return (
    <Image 
      src={logo} 
      alt="logo" 
      className="max-h-header max-w-sideNav p-2"
    />
  )
};

export default Logo;
