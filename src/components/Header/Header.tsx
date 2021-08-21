import Link from "next/link";
import React from "react";
import Styles from "./Header.module.scss";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LocalPostOfficeIcon from "@material-ui/icons/LocalPostOffice";

const Header: React.FC = () => {
  return (
    <>
      <div className={`w-full bg-white shadow-md md:w-72 md:min-h-full `}>
        <div
          className={`flex items-center h-24 p-6 md:flex-col md:items-center md:h-screen md:fixed md:p-4 md:mt-12 md:w-72`}
        >
          <div className={`text-2xl font-shinppori`}>DAIMARU HAKUI</div>
          <nav className={`hidden md:block my-16`}>
            <ul className={`${Styles.list}`}>
              <li>
                <HomeIcon className={`mb-1 mr-2`} />
                <Link href="/">
                  <a className={``}>トップページ</a>
                </Link>
              </li>
              <li>
                <MenuBookIcon className={`mb-1 mr-2`} />
                <Link href="/catalog">
                  <a>カタログ</a>
                </Link>
              </li>
              <li>
                <LocalPostOfficeIcon className={`mb-1 mr-2`} />
                <Link href="/">
                  <a>お問い合わせ</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={`hidden text-xs md:block`}>© 2021 DAIMARU-HAKUI.</div>
        </div>
      </div>
    </>
  );
};

export default Header;
