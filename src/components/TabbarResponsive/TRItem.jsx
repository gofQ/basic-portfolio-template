import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPage, toggleTabbarResponsiveShow } from "../../redux/HomeSlice";

const TRItem = ({ tabName }) => {
  const dispatch = useDispatch();
  const pageName = useSelector((state) => state.home.page);
  const navigate = useNavigate();

  const handleSetPage = () => {
    dispatch(setPage(tabName));

    switch (tabName) {
      case "About me":
        navigate("/");
        dispatch(toggleTabbarResponsiveShow());
        break;
      case "My Projects":
        navigate("/projects");
        dispatch(toggleTabbarResponsiveShow());
        break;
      case "Skills & Experience":
        navigate("/skills");
        dispatch(toggleTabbarResponsiveShow());
        break;
      case "Portfolio":
        navigate("/portfolio");
        dispatch(toggleTabbarResponsiveShow());
        break;
      default:
        break;
    }
  };

  return (
    <div
      id="tabbarRes"
      onClick={handleSetPage}
      className={
        styles.container +
        " " +
        (pageName === tabName
          ? "bg-slate-900 text-[1.1rem] active:bg-slate-900 hover:bg-slate-900 active:opacity-100"
          : null) +
        " " +
        (tabName === "About me"
          ? "about"
          : tabName === "My Projects"
          ? "project"
          : tabName === "Skills & Experience"
          ? "skills"
          : tabName === "Portfolio"
          ? "portfolio"
          : null)
      }
    >
      {tabName}
    </div>
  );
};

export default TRItem;
const styles = {
  container:
    "w-full h-12 flex justify-center items-center text-[1.05rem] text-gray-300 rounded active:bg-slate-600 selection:select-none",
};
