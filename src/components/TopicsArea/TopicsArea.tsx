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
          "X-API-KEY": "3c62454d-9a98-4e3d-aee1-d337c3bbdf7e",
        },
      })
      .then((res) => {
        const data = res.data.contents;
        setTopicsData(data);
      });
  }, []);

  return (
    <>
      <div className="w-full h-10 flex flex-col justify-center items-center sticky bg-gray-800 text-white">
        {topicsData.map((value) => (
          <div key={value.id} className={`w-full flex flex-col items-center`}>
            <>
              {topicsData[0].id == value.id && (
                <p className={`${Styles.text} px-2`}>
                  <Link href={value.link} target="_blank" rel="noopener">
                    {`${value.maker} : ${value.title}`}
                  </Link>
                </p>
              )}
            </>
          </div>
        ))}
      </div>
    </>
  );
};

export default MessageArea;
