import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "./TopicsArea.module.scss";
import { Link } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

type axios = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  link: string;
  maker: string;
}[];

const MessageArea: React.FC = () => {
  const [topicsData, setTopicsData] = useState<axios>([]);
  const [flag, setFlag] = useState(false);
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

  const onClickFlag = () => {
    setFlag(!flag);
  };

  return (
    <>
      <div className="w-full py-2 flex flex-col justify-center items-center sticky bg-gray-800 text-white">
        {topicsData.map((value) => (
          <div key={value.id} className={`w-full flex flex-col items-center`}>
            {flag ? (
              <p className={`${Styles.text} px-2 pb-2`}>
                <Link href={value.link} target="_blank">
                  {`${value.maker} : ${value.title}`}
                </Link>
              </p>
            ) : (
              <>
                {topicsData[0].id == value.id && (
                  <p className={`${Styles.text} px-2`}>
                    <Link href={value.link} target="_blank">
                      {`${value.maker} : ${value.title}`}
                    </Link>
                  </p>
                )}
              </>
            )}
          </div>
        ))}

        <div
          onClick={onClickFlag}
          className={`${Styles.button} flex justify-center rounded-b bg-gray-800 w-16`}
        >
          {flag ? (
            <ExpandLessIcon fontSize="small" />
          ) : (
            <ExpandMoreIcon fontSize="small" />
          )}
        </div>
      </div>
    </>
  );
};

export default MessageArea;
