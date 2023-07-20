import Copyright from "@/components/pageLayout/footer/Copyright";

const footerPositioning = 'flex flex-row h-footer w-full pl-2'
const footerStyling = 'border-t-[1px] border-slate-300/75'

const Footer = () => {
  return (
    <footer className={`${footerPositioning} ${footerStyling}`}>
      <Copyright />
    </footer>
  )
};

export default Footer;
