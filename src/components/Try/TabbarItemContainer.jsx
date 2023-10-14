import React from "react";
import TabbarItem from "./TabbarItem";

const TabbarItemContainer = () => {
  return (
    <div className="flex flex-col space-y-2">
      <TabbarItem tabName={"About me"} duration={"0.5"} delay={"0.5"} />
      <TabbarItem tabName={"My Projects"} />
      <TabbarItem tabName={"Skills & Experience"} />
      <TabbarItem tabName={"Portfolio"} />
    </div>
  );
};

export default TabbarItemContainer;
