import React from "react";

const TabbarResponsiveHeader = ({uInfo}) => {
  return (
    <div className="flex flex-col h-2/6 justify-center py-">
      <div className="flex flex-col justify-center items-center">
        <img src={uInfo.img} className="w-24 rounded-full" />
        <p className="text-gray-300 text-center text-[1.1rem] py-2">
          {uInfo.name}
        </p>
      </div>
    </div>
  );
};

export default TabbarResponsiveHeader;
