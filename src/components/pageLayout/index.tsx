import Footer from "./footer";
import Header from "./header";
import SideMenu from "./sideMenu";

const bodyPositioning = 'flex flex-col h-body w-full justify-center items-center';
const bodyStlying = ''

const PageLayout = ({children, pageTitle}: {children: JSX.Element | JSX.Element[], pageTitle?:string}) => {
  return (
    // The page is a single viewport with no scrolling. 
    // All content should be styled to fit within he viewport and use nested scrolling if required.
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <SideMenu />
      <main className="flex flex-col h-screen w-main">
        <Header title={pageTitle ?? "Christoph Schulzke - Software Engineer"}/>
        <div className={`${bodyPositioning} ${bodyStlying}`}>
          {children}
        </div>
        <Footer />
      </main>
    </div>
  )
};

export default PageLayout;
