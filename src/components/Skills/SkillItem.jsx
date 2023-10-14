import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { BiLogoJavascript, BiLogoReact, BiLogoNodejs } from "react-icons/bi";


const SkillItem = ({ data }) => {
  const icon = () => {
    switch (data.skillName) {
      case "Html":
        return <AiFillHtml5 className="text-[#E34F26] text-2xl" />;
        break;
      case "Css":
        return <SiCss3 className="text-[#264de4] text-2xl" />;
        break;
      case "Javascript":
        return <BiLogoJavascript className="text-[#F7DF1E] text-2xl" />;
        break;
      case "React":
        return <BiLogoReact className="text-[#61DBFB] text-2xl" />;
        break;
      case "React Native":
        return <BiLogoReact className="text-[#61DBFB] text-2xl" />;
        break;
      case "Node.js":
        return <BiLogoNodejs className="text-[#339933] text-2xl" />;
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="flex flex-row items-center space-x-1">
        {icon()}
        <p className="text-[1.25rem]">{data.skillName}</p>
      </div>
      <p className="text-[1rem]">{data.skillDescription}</p>
    </div>
  );
};

export default SkillItem;
