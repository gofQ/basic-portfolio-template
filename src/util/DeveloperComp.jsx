import React from "react";
import { AiFillGithub } from "react-icons/ai";

const DeveloperComp = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-2 pb-2">
      <p id="developerTextRes" className="text-gray-300 ">
        Designed by gofQ
      </p>
      <a
        href="https://github.com/gofQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub
          size={24}
          color="white"
          className="active:scale-90 transition-all"
        />
      </a>
    </div>
  );
};

export default DeveloperComp;
