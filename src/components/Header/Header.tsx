import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex items-cente bg-white w-64 h-full relative">
        <div
          className={`flex flex-col items-center justify-end w-64 h-screen fixed p-4`}
        >
          <div>DAIMARU HAKUI</div>
        </div>
      </div>
    </>
  );
};

export default Header;
