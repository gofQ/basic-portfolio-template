import React from "react";

const TabbarHeader = ({ uInfo }) => {
  return (
    <div className="flex flex-col items-center justify-end img h-1/3">
      <img id="img" src={uInfo.img} alt="" className="w-44 rounded-full " />
      <div id="nameAnimation">{uInfo.name}</div>
    </div>
  );
};

export default TabbarHeader;
