import React from "react";
import Styles from "./ScrollTop.module.scss";
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
        Top
      </div>
    </div>
  );
};

export default ScrollTop;
