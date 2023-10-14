import React from "react";
import Button from "../components/Home/Button";

const Home = () => {
  return (
    <div className="w-8/12 m-auto">
      <div className="flex flex-col items-center w-full h-[100vh]">
        <p className="text-[52px] font-bold mt-[10%] pb-10">Example Projects</p>
        <div className="flex flex-row space-x-8" >
          <Button name={"audienceful"} />
          <Button name={"try"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
