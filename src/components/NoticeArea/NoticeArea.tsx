import axios from "axios";
import React, { useEffect, useState } from "react";
import Styles from "./NoticeArea.module.scss";
import { Link } from "@material-ui/core";

type Axios = {
  id: string;
  title: string;
  link: string;
  maker: string;
}[];

const NoticeArea: React.VFC = () => {
  const [noticeData, setNoticeData] = useState<Axios>([]);

  useEffect(() => {
    axios
      .get("https://daimaru-hakui.microcms.io/api/v1/topics", {
        headers: {
          "X-API-KEY": "3c62454d-9a98-4e3d-aee1-d337c3bbdf7e",
        },
      })
      .then((res) => {
        const data = res.data.contents;
        setNoticeData(data);
      });
  }, []);

  return (
    <div className={`${Styles.container} overflow-hidden p-1 mx-auto bg-white`}>
      <div className={`${Styles.lavel} px-2 text-white bg-gray-800`}>
        お知らせ
      </div>
      <ul className={`${Styles.ul} py-1`}>
        {noticeData.map((data) => (
          <li key={data.id} className={`${Styles.li} py-1`}>
            <Link href={data.link}>
              <a className={`text-gray-800`}>{data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeArea;
