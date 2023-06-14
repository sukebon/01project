// import {HeaderTopicsArea} from "components/TopicsArea/TopicsArea";
// import {PopUpArea} from "components/PopUpArea/PopUpArea";
import { ReactNode } from "react";
import { Header } from "../Header/Header";
import {ScrollTop} from "components/ScrollTop/ScrollTop";
import { NextPage } from "next";

type Props = {
  children: ReactNode;
};

const Layout: NextPage<Props> = (props) => {
  const { children } = props;
  return (
    <>
      {/* <HeaderTopicsArea /> */}
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        <header>
          <Header />
        </header>
        <main className={`min-h-screen w-full overflow-hidden`}>
          {children}
          <ScrollTop />
        </main>
      </div>
      {/* <PopUpArea /> */}
    </>
  );
};

export default Layout;
