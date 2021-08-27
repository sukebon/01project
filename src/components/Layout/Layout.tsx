import MessageArea from "components/MessageArea/MessageArea";
import TopicsArea from "components/TopicsArea/TopicsArea";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout: React.FC = (props) => {
  const { children } = props;
  return (
    <>
      <MessageArea />
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        <header>
          <Header />
        </header>
        <main className={`min-h-screen w-full`}>
          {children}
          {/* <Footer /> */}
        </main>
      </div>
      <TopicsArea />
    </>
  );
};

export default Layout;
