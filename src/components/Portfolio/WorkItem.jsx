import React from "react";
import { useNavigate } from "react-router-dom";

const WorkItem = ({ data }) => {
  const navigation = useNavigate();

  const goWorkPage = () => {
    navigation(`/portfolio/${data.workTitle}`, { state: data });
  };

  return (
    <div onClick={goWorkPage} className={styles.container}>
      {data.workImages ? (
        <img
          id="workImg"
          src={data.workImages[0]}
          alt=""
          className=" w-full h-36 object-fit"
        />
      ) : null}
      <div className={styles.secondContainer}>
        <div>
          <p className={
              "text-[1.25rem] pt-4 py-2 text-center truncate" +
              " " +
              (!data.workImages && "pt-6 py-2")
            }>
            {data.workTitle}
          </p>
          <p
            id="workDesc"
            className={
              "text-[1rem] text-gray-300 " +
              " " +
              (data.workImages && "line-clamp-4")
            }>
            {data.workDescription}
          </p>
        </div>
        <div className={styles.goDetailsBtn + " " + (!data.workImages && "pt-4")}>
          Go details...
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
const styles = {
  container:
    "flex flex-col items-center border bg-slate-800 border-slate-600 rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-all",
  secondContainer:
    "flex w-full flex-col justify-between px-6 space-y-6 bg-slate-800",
  goDetailsBtn:
    "text-[1.1rem] font-semibold text-center cursor-pointer pb-4 hover:underline hover:underline-offset-4",
};
