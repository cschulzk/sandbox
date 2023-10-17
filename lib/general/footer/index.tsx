import Copyright from "./Copyright";

const footerPositioning = 'flex h-footer w-full';
const footerStyling = 'border-t-[1px] border-slate-300/75';
const mobileStyle = 'flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-center';

const Footer = () => {
  return (
    <footer className={`${footerPositioning} ${mobileStyle}  ${footerStyling}`}>
      <div className={`flex flex-row justify-start items-center w-1/3`}>
        {/* Replace all of the text with the icons */}
        <a 
          rel='noreferrer' 
          target="_blank" 
          href="https://www.linkedin.com/in/christoph-schulzke/"
        >
          LinkedIn
        </a>
        <a 
          rel='noreferrer' 
          target="_blank" 
          href="https://github.com/cschulzk"
        >
          GitHub
        </a>
        <a 
          rel='noreferrer' 
          target="_blank" 
          href="https://www.hackerrank.com/christophschulz1"
        >
          HackerRank
        </a>
      </div>
      <Copyright />
    </footer>
  )
};

export default Footer;
