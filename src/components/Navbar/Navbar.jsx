import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toggleTabbarResponsiveShow } from "../../redux/HomeSlice";
import { uInfo } from "../../data";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div id="navbar" className={styles.container}>
      <div className="flex flex-row items-center space-x-4">
        <img src={uInfo.img} alt="" className="w-12 rounded-full" />
        <p className="text-gray-300 text-[1.1rem] ">{uInfo.name}</p>
      </div>
      <div onClick={() => dispatch(toggleTabbarResponsiveShow())}>
        <HiOutlineMenu size={26} className="text-gray-300 active:scale-90" />
      </div>
    </div>
  );
};

export default Navbar;
const styles = {
  container: "w-full h-20 shadow-lg bg-slate-700 hidden px-4 z-50 fixed",
};
