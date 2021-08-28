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
  const [buttonFlag, setButtonFlag] = useState(true);

  const fadeIn = () => {
    setTopicFlag(true);
    setButtonFlag(false);
  };
  const onClickClose = () => {
    setTopicFlag(false);
    setButtonFlag(true);
  };
  const onClickOpen = () => {
    setTopicFlag(true);
    setButtonFlag(false);
  };
  useEffect(() => {
    setTimeout(() => {
      fadeIn();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div
        style={topicFlag == true ? { opacity: "1" } : { opacity: "0" }}
        className={`${Styles.box} rounded shadow-sm bg-white w-11/12 md:w-auto md:max-w-sm`}
      >
        <div className={`p-6`}>
          <div>
            <div dangerouslySetInnerHTML={{ __html: messsage }}></div>
          </div>
        </div>
      </div>

      {buttonFlag == true ? (
        <div
          onClick={onClickOpen}
          className={`${Styles.button} bg-white shadow-md`}
        >
          <AnnouncementIcon fontSize={"large"} />
        </div>
      ) : (
        <div
          onClick={onClickClose}
          className={`${Styles.button} bg-white shadow-md`}
        >
          <CloseIcon fontSize={"large"} />
        </div>
      )}
    </>
  );
};
export default TopicsArea;
