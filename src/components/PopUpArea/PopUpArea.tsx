import { useEffect, useState } from "react";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import CloseIcon from "@material-ui/icons/Close";
import Styles from "./PopUpArea.module.scss";
import axios from "axios";

const TopicsArea = () => {
  useEffect(() => {
    axios
      .get("https://daimaru-hakui.microcms.io/api/v1/popup", {
        headers: {
          "X-API-KEY": "3c62454d-9a98-4e3d-aee1-d337c3bbdf7e",
        },
      })
      .then((res) => {
        setMesssage(res.data.message);
      });
  }, []);
  const [messsage, setMesssage] = useState("");
  const [topicFlag, setTopicFlag] = useState(false);
  const [buttonFlag, setButtonFlag] = useState(false);

  const fadeIn = () => {
    setTopicFlag(true);
    setButtonFlag(true);
  };
  const onClickClose = () => {
    setTopicFlag(false);
    setButtonFlag(false);
  };
  // const onClickOpen = () => {
  //   setTopicFlag(true);
  //   setButtonFlag(false);
  // };
  useEffect(() => {
    setTimeout(() => {
      fadeIn();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div
        style={
          topicFlag == true
            ? { opacity: "1", visibility: "visible" }
            : { opacity: "0", visibility: "hidden" }
        }
        className={`${Styles.box} border shadow-md bg-white w-11/12 md:w-auto md:max-w-sm`}
      >
        <div className={`p-6`}>
          <div>
            <div dangerouslySetInnerHTML={{ __html: messsage }}></div>
          </div>
        </div>
      </div>

      <div
        style={
          buttonFlag == true
            ? { opacity: "1", visibility: "visible" }
            : { opacity: "0", visibility: "hidden" }
        }
        onClick={onClickClose}
        className={`${Styles.button} bg-white shadow-md`}
      >
        <CloseIcon fontSize={"large"} />
      </div>
    </>
  );
};
export default TopicsArea;
