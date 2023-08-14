import PageTitle from "./PageTitle";
import SearchBox from "./SearchBar";

const headerPositioning = 'flex flex-row h-header w-full items-center justify-between px-5'
const headerStyling = 'border-b-2 border-slate-300/75'

const Header = ({title, hasSearch}: {title: string, hasSearch?: boolean}) => {
  return (
    <header className={`${headerPositioning} ${headerStyling}`}>
      <PageTitle title={title} />
      {hasSearch && <SearchBox />}
    </header>
  )
};

export default Header;
