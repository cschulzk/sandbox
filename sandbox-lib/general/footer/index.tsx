import { GitHubIcon, HackerRankIcon, LinkedInIcon } from "../../../src/data/icons/socialIcons";
import Copyright from "./Copyright";

const footerPositioning = 'flex md:h-footer w-full py-1';
const footerStyling = 'border-t-[1px] border-slate-300/75';
const mobileLayout = 'flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-center';

const Footer = () => {
  return (
    <footer className={`${footerPositioning} ${mobileLayout} ${footerStyling}`}>
      <div className={`flex flex-row justify-start items-center w-1/3`}>
        <GitHubIcon />
        <LinkedInIcon />
        <HackerRankIcon />
      </div>
      <Copyright />
    </footer>
  )
};

export default Footer;
