import { ContextProviders } from "@/context/HomeContext";
import Footer from "./footer";
import Header from "./header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContextProviders>
      <div className="flex h-full bg-zinc-50 dark:bg-black">
        <div className="flex w-full">
          <div className="fixed inset-0 flex justify-center sm:px-8 bg-zinc-50 dark:bg-black">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="flex w-full flex-col">
            <Header />
            <main className="flex-auto">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </ContextProviders>
  )
};

export default MainLayout;
