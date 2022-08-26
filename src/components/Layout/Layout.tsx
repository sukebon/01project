import TopicsArea from "components/TopicsArea/TopicsArea";
import PopUpArea from "components/PopUpArea/PopUpArea";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollTop from "components/ScrollTop/ScrollTop";

const Layout: React.FC = (props) => {
  const { children } = props;
  return (
    <>
      <TopicsArea />
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        <header>
          <Header />
        </header>
        <main className={`min-h-screen w-full overflow-hidden`}>
          {children}
          {/* <Footer /> */}
          <ScrollTop />
        </main>
      </div>
      {/* <PopUpArea /> */}
    </>
  );
};

export default Layout;
