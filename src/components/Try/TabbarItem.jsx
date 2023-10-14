import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../redux/HomeSlice";
import { useNavigate } from "react-router-dom";

const TabbarItem = ({ tabName}) => {
  const pageName=useSelector(state=>state.home.page)
  const dispatch=useDispatch()

  const navigate=useNavigate()

  const handleSetPage=()=>{
    dispatch(setPage(tabName))

    switch(tabName){
      case "About me":
        navigate("/")
        break;
      case "My Projects":
        navigate("/projects")
        break;
      case "Skills & Experience":
        navigate("/skills")
        break;
      case "Portfolio":
        navigate("/portfolio")
        break;
      default:
        break;
    }

  }

  return (
    <div id="navItem" onClick={handleSetPage}  className={" flex justify-center items-center text-gray-200 text-[1.25rem] hover:bg-slate-600 h-16 cursor-pointer selection:select-none rounded transition-all hover:text-[1.28rem] active:opacity-60 -translate-x-96"+" "+(pageName===tabName ? "bg-slate-800 text-[1.28rem] hover:bg-slate-800 active:opacity-100" : null) + " "+ (tabName==="About me" ? "about" : tabName==="My Projects" ? "project" : tabName==="Skills & Experience" ? "skills" : tabName==="Portfolio" ? "portfolio" : null)}>
      {tabName}
    </div>
  );
};

export default TabbarItem;
