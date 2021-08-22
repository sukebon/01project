import React from "react";
import Footer from "./Footer";
import Header from "./Header/Header";

const Layout: React.FC = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        <header className={``}>
          <Header />
        </header>
        <main className={`min-h-screen w-full`}>
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
