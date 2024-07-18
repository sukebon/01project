import Link from "next/link";
import { FC } from "react";
import Styles from "./Header.module.scss";
import MenuBookIcon from "@mui/icons-material/MenuBook";
// import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import {TemporaryDrawer} from "@/src/components/TemporaryDrawer/TemporaryDrawer";

export const Header: FC = () => {
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
              {/* <li>
                <HomeIcon className={`mb-1 mr-2`} />
                <Link href="/">
                  トップページ
                </Link>
              </li> */}
              <li>
                <MenuBookIcon className={`mb-1 mr-2`} />
                <Link href="/catalog">WEBカタログ</Link>
              </li>
              <li>
                <ListAltIcon className={`mb-1 mr-2`} />
                <a href="https://daimaru-web-zaiko.vercel.app/" target="_blank" rel="noopener noreferrer">
                  在庫照会
                </a>
              </li>
              <li>
                <LocalPostOfficeIcon className={`mb-1 mr-2`} />
                <Link href="/contact">お問い合わせ</Link>
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