import GitHubIcon from "../icons/socialIcons/GitHubIcon";
import HackerRankIcon from "../icons/socialIcons/HackerRankIcon";
import LinkedInIcon from "../icons/socialIcons/LinkedInIcon";
import Copyright from "./Copyright";

const footerPositioning = 'flex md:h-footer w-full py-1';
const footerStyling = 'border-t-[1px] border-slate-300/75';
const mobileLayout = 'flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-center';

const iconStyles = 'mx-1'

const Footer = () => {
  return (
    <footer className={`${footerPositioning} ${mobileLayout} ${footerStyling}`}>
      <div className={`flex flex-row justify-start items-center w-1/3`}>
        {/* Replace all of the text with the icons */}
        <a 
          rel='noreferrer' 
          target="_blank" 
          href="https://github.com/cschulzk"
          className={iconStyles}
        >
          <GitHubIcon />
        </a>
        <a 
          rel='noreferrer' 
          target="_blank" 
          href="https://www.linkedin.com/in/christoph-schulzke/"
          className={iconStyles}
        >
          <LinkedInIcon />
        </a>
        <a 
          rel='noreferrer' 
          target="_blank" 
          href="https://www.hackerrank.com/christophschulz1"
          className={iconStyles}
        >
          <HackerRankIcon />
        </a>
      </div>
      <Copyright />
    </footer>
  )
};

export default Footer;
