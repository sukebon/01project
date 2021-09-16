import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "./TopicsArea.module.scss";
import { Link } from "@material-ui/core";

type Axios = {
  id: string;
  title: string;
  link: string;
  maker: string;
}[];

const MessageArea: React.FC = () => {
  const [topicsData, setTopicsData] = useState<Axios>([]);

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
        for (let i = 0; i < 1; i++) {
          newData.push(data[i]);
        }
        setTopicsData(newData);
      });
  }, []);

  return (
    <>
      <div className="w-full h-10 flex justify-center items-center sticky bg-gray-800 text-white">
        {topicsData.map((value) => (
          <p key={value.id} className={`${Styles.text} px-2`}>
            {value.link ? (
              <Link href={value.link} target="_blank" rel="noopener">
                {`${value.title}`}
              </Link>
            ) : (
              value.title
            )}
          </p>
        ))}
      </div>
    </>
  );
};

export default MessageArea;
