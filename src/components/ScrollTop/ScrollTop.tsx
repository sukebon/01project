"use client";
import { FC } from "react";
import Styles from "./ScrollTop.module.scss";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export const ScrollTop: FC = () => {
  return (
    <div>
      <div
        className={`${Styles.scrollTo}`}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <ArrowDropUpIcon fontSize={"large"} />
      </div>
    </div>
  );
};
