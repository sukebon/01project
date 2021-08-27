import { Button } from "@material-ui/core";
import React from "react";

const MessageArea = () => {
  return (
    <>
      <div className="w-full h-12 flex justify-center items-center sticky  bg-gray-800 text-white">
        <p className={`mr-3`}>テキストテキストテキスト</p>
        <Button
          variant="contained"
          color="primary"
          size="small"
          aria-label="message button"
        >
          Click
        </Button>
      </div>
    </>
  );
};

export default MessageArea;
