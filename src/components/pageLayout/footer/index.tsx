import Copyright from "@/components/pageLayout/footer/Copyright";

const footerPositioning = 'flex flex-row h-footer w-full pl-2 justify-between items-center'
const footerStyling = 'border-t-[1px] border-slate-300/75'

const Footer = () => {
  return (
    <footer className={`${footerPositioning} ${footerStyling}`}>
      <Copyright />
      <div className="flex flex-row justify-around items-center w-1/3">
        <a rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/christoph-schulzke/">
          LinkedIn
        </a>
        <a rel='noreferrer' target="_blank" href="https://github.com/cschulzk">
          GitHub
        </a>
        <a rel='noreferrer' target="_blank" href="https://www.hackerrank.com/christophschulz1">
          HackerRank
        </a>
      </div>
    </footer>
  )
};

export default Footer;
