import React from "react";

const PageContainer = ({ children }) => {
  return (
    <div className="w-5/6 m-auto selection:bg-[#163962] selection:text-[#ffed00]">
      {children}
    </div>
  );
};

export default PageContainer;
