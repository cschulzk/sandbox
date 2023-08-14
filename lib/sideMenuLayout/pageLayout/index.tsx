import SideMenu from "../sideMenu";
import Footer from "./footer";
import Header from "./header";
import PageBody from "./pageBody";

const PageLayout = () => {
  return (
    // The page is a single viewport with no scrolling. 
    // All content should be styled to fit within he viewport and use nested scrolling if required.
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <SideMenu />
      <main className="flex flex-col h-screen w-main">
        <Header title="Page Title" hasSearch={true} />
        <PageBody />
        <Footer />
      </main>
    </div>
  )
};

export default PageLayout;
