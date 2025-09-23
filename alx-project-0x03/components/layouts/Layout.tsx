import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { type LayoutProps } from "@/interface"; 

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;