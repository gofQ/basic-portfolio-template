import React from "react";
import Icons from "./Icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { uInfo } from "../../data";
import DeveloperComp from "../../util/developerComp";
import TabbarItemContainer from "./TabbarItemContainer";
import TabbarHeader from "./TabbarHeader";


const Tabbar = () => {
  const navigate=useNavigate()
  useEffect(() => {
    navigate("/")
  }, []);
  return (
    <div id="tab" className={styles.container}>
      <TabbarHeader uInfo={uInfo} />
      <div className={styles.contentContainer}>
        <TabbarItemContainer />
        <Icons />
        <DeveloperComp />
      </div>
    </div>
  );
};

export default Tabbar;
const styles={
  container:"flex flex-col w-3/12 bg-slate-700 h-screen font-mono",
  contentContainer:"flex flex-col h-2/3 pt-20 px-2 justify-between "
  
}
