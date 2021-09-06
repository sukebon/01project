import Link from "next/link";
import React from "react";
import Styles from "./Header.module.scss";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LocalPostOfficeIcon from "@material-ui/icons/LocalPostOffice";
import TemporaryDrawer from "components/TemporaryDrawer/TemporaryDrawer";

const Header: React.FC = () => {
  return (
    <>
      <div className={`w-full bg-white shadow-md lg:w-64 lg:min-h-full`}>
        <div
          className={`flex items-center justify-between h-24 p-6 lg:flex-col lg:justify-start lg:items-center lg:h-screen lg:sticky lg:top-0 lg:px-4 lg:pt-12 lg:w-64`}
        >
          <div className={`text-4xl font-bold font-Roboto`}>
            <Link href="/">MY UNI</Link>
          </div>

          <nav className={`hidden lg:block my-16`}>
            <ul className={`${Styles.list}`}>
              <li>
                <HomeIcon className={`mb-1 mr-2`} />
                <Link href="/">
                  <a>トップページ</a>
                </Link>
              </li>
              <li>
                <MenuBookIcon className={`mb-1 mr-2`} />
                <Link href="/catalog">
                  <a>WEBカタログ</a>
                </Link>
              </li>
              <li>
                <LocalPostOfficeIcon className={`mb-1 mr-2`} />
                <Link href="/contact">
                  <a>お問い合わせ</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={`block lg:hidden`}>
            <TemporaryDrawer />
          </div>
          <div className={`hidden text-xs lg:block`}>© 2021 DAIMARU-HAKUI.</div>
        </div>
      </div>
    </>
  );
};

export default Header;
