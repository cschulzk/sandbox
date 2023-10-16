import PageTitle from "./PageTitle";

const headerPositioning = 'flex flex-col h-header w-full items-center justify-center px-5'
const headerStyling = 'border-b-2 border-slate-300/75'

const Header = ({title}: {title: JSX.Element}) => {
  return (
    <header className={`${headerPositioning} ${headerStyling}`}>
      {title}
    </header>
  )
};

export default Header;
