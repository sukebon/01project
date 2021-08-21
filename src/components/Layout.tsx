import React from "react";
import Footer from "./Footer";
import Header from "./Header/Header";

const Layout: React.FC = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex min-h-screen">
        <header className={`shadow-md`}>
          <Header />
        </header>
        <main>
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
