import React from "react";
import Styles from "./ScrollTop.module.scss";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
const ScrollTop = () => {
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

export default ScrollTop;
