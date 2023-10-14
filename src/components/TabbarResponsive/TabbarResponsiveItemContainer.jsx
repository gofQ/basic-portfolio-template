import React from "react";
import TRItem from "./TRItem";

const TabbarResponsiveItemContainer = () => {
  return (
    <div className="flex flex-col space-y-2 pt-8">
      <TRItem tabName="About me" />
      <TRItem tabName="My Projects" />
      <TRItem tabName="Skills & Experience" />
      <TRItem tabName="Portfolio" />
    </div>
  );
};

export default TabbarResponsiveItemContainer;
