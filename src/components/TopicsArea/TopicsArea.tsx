import { useState, useEffect, FC } from "react";
import axios from "axios";
import Styles from "./TopicsArea.module.scss";
import { Link } from "@mui/material";
import { TopicData } from "../../../types";

export const HeaderTopicsArea: FC = () => {
  const [topicsData, setTopicsData] = useState<TopicData[]>([]);

  useEffect(() => {
    try {
      axios
        .get("https://daimaru-hakui.microcms.io/api/v1/topics", {
          headers: {
            "X-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
          },
        })
        .then((res) => {
          let data = res.data.contents;
          let newData = [];
          for (let i = 0; i < 1; i++) {
            newData.push(data[i]);
          }
          setTopicsData(newData);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="w-full h-10 flex justify-center items-center sticky bg-gray-800 text-white">
      {topicsData.map(({ id, link, title }) => (
        <p key={id} className={`${Styles.text} px-2`}>
          {link ? (
            <Link href={link} target="_blank" rel="noopener">
              {`${title}`}
            </Link>
          ) : (
            title
          )}
        </p>
      ))}
    </div>
  );
};
