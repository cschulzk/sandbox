import Footer from "./footer";
import Header from "./header";
import PageTitle from "./header/PageTitle";
import SideMenu from "./sideMenu";

const bodyPositioning = 'flex flex-col h-body w-full justify-center items-center';
const bodyStlying = ''

const defaultTitle = <PageTitle title={"Christoph Schulzke - Software Engineer"} />

const PageLayout = ({children, pageTitle}: {children: JSX.Element | JSX.Element[], pageTitle?: JSX.Element}) => {
  return (
    // The page is a single viewport with no scrolling. 
    // All content should be styled to fit within he viewport and use nested scrolling if required.
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <SideMenu />
      <main className="flex flex-col h-screen w-main">
      
        <Header title={pageTitle ?? defaultTitle}/>
        <div className={`${bodyPositioning} ${bodyStlying}`}>
          {children}
        </div>
        <Footer />
      </main>
    </div>
  )
};

export default PageLayout;
