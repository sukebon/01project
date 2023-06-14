import axios from "axios";
import  {FC, useEffect, useState } from "react";
import Styles from "./NoticeArea.module.scss";
import { Link } from "@mui/material";

type NoticeData = {
  id: string;
  title: string;
  link: string;
  maker: string;
};

export const NoticeArea: FC = () => {
  const [noticeData, setNoticeData] = useState<NoticeData[]>([]);

  useEffect(() => {
    axios
      .get("https://daimaru-hakui.microcms.io/api/v1/topics", {
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
        },
      })
      .then((res) => {
        let data = res.data.contents;
        let newData = [];
        for (let i = 1; i < data.length; i++) {
          newData.push(data[i]);
        }
        setNoticeData(newData);
      });
  }, []);

  return (
    <div className={`${Styles.container} overflow-hidden mx-auto bg-white`}>
      <div className={`${Styles.lavel} text-white bg-gray-800`}>お知らせ</div>
      <ul className={`${Styles.ul}`}>
        {noticeData.map((data) => (
          <li key={data.id} className={`${Styles.li}`}>
            {data.link ? (
              <Link href={data.link} target="_blank" rel="noopener">
                {data.title}
              </Link>
            ) : (
              <p>{data.title}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};