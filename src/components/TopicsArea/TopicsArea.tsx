import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import Styles from "./TopicsArea.module.scss";

const TopicsArea = () => {
  const [topicFlag, setTopicFlag] = useState(false);
  const [buttonFlag, setButtonFlag] = useState(false);

  const fadeIn = () => {
    console.log(topicFlag);
    setTopicFlag(true);
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
        style={
          topicFlag == true
            ? { transform: "translateY(0px)" }
            : { transform: "translateY(100%)" }
        }
        className={`${Styles.transition} fixed bottom-0 right-0 z-50 border rounded-t shadow-sm bg-white w-full md:max-w-sm`}
      >
        <div className={`py-12 px-6`}>
          <Button
            onClick={onClickClose}
            style={{ position: "absolute", top: 5, right: 5 }}
          >
            close
          </Button>

          <ul>
            <li>
              テキストテキストテキストテキストテキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキステキストテキストテキストテキス
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${Styles.transition} fixed bottom-0 right-5 z-40 bg-white rounded-xl shadow-md`}
        style={
          buttonFlag === true
            ? { transform: "translateY(-20px)" }
            : { transform: "translateY(100%)" }
        }
      >
        <Button onClick={onClickOpen}>
          <AnnouncementIcon fontSize={"large"} />
        </Button>
      </div>
    </>
  );
};
export default TopicsArea;
