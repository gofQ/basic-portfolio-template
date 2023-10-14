import React from "react";
import { useNavigate } from "react-router-dom"

const ProjectItem = ({data}) => {
  const navigate=useNavigate()

  const goProjectPage=()=>{
    navigate(`${data.projectName}`,{state:data})
  }
  return (
    <div className={styles.container}>
      <div className={styles.imgCon}>
        <img src={data.projectImages[0]} />
        <div className={styles.projectNameCon}>
          <p className={styles.projectName}>{data.projectName}</p>
        </div>
      </div>
      <div className="bg-slate-800">
        <p className="px-4 pt-4 line-clamp-3">
          {data.projectDescription}
        </p>
        <div onClick={goProjectPage} className={styles.detailsBtn}>Go Details...</div>
      </div>
    </div>
  );
};

export default ProjectItem;
const styles = {
  container:
    "flex flex-col border border-slate-600 rounded-md overflow-hidden shadow-lg hover:shadow-2xl",
  imgCon: "flex flex-col h-full relative justify-end items-center",
  projectNameCon:
    "absolute bg-[#00000099] rounded-t-2xl text-gray-200 py-1 px-6",
  projectName: "text-[1.25rem] font-bold truncate",
  detailsBtn:
    "text-[1.1rem] font-semibold text-center py-4 cursor-pointer hover:underline hover:underline-offset-4 active:scale-95",
};
