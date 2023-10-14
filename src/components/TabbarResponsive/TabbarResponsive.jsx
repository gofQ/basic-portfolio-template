import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiArrowFromLeft } from "react-icons/bi";
import { toggleTabbarResponsiveShow } from "../../redux/HomeSlice";
import Icons from "../Try/Icons";
import TabbarResponsiveItemContainer from "./TabbarResponsiveItemContainer";
import TabbarResponsiveHeader from "./TabbarResponsiveHeader";
import { uInfo } from "../../data";
import DeveloperComp from "../../util/developerComp";

const TabbarResponsive = () => {
  const show = useSelector((state) => state.home.tabbarResponsiveShow);
  const dispatch = useDispatch();

  const toggleShow = () => {
    dispatch(toggleTabbarResponsiveShow());
  };

  return (
    <div
      id="tabbarResponsive"
      className={styles.container + " " + (show ? "flex" : "hidden")}
    >
      <div className={styles.innerContainer}>
        <div className={styles.contentContainer}>
          <BiArrowFromLeft
            onClick={toggleShow}
            size={28}
            className="text-gray-300 active:scale-90"
          />
          <TabbarResponsiveHeader uInfo={uInfo} />
          <div className="flex flex-col justify-between h-5/6 px-2">
            <TabbarResponsiveItemContainer />
            <Icons />
            <DeveloperComp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabbarResponsive;
const styles = {
  container:
    "h-screen bottom-0 right-0 absolute w-64 shadow-2xl overflow-hidden bg-slate-800 z-50  ",
  innerContainer: "flex flex-col w-full h-screen",
  contentContainer: "w-full flex flex-col h-screen py-3 px-3",
};
