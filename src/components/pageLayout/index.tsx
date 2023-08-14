import Footer from "./footer";
import Header from "./header";

const PageLayout = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return (
    // The page is a single viewport with no scrolling. 
    // All content should be styled to fit within he viewport and use nested scrolling if required.
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <main className="flex flex-col h-screen w-main">
        <Header title="Page Title" hasSearch={true} />
        {children}
        <Footer />
      </main>
    </div>
  )
};

export default PageLayout;
