import React from "react";
import SkillItem from "../components/Skills/SkillItem";
import { uInfo } from "../data";


const Skills = () => {

  return (
    <div id="mt" className="mt-20">
      <div>
        <p id="skill" className="text-[1.953rem] my-2">My Skills</p>
        <div className="flex flex-col space-y-6">
          {
            uInfo.skills.map((item,index)=>{
              return <SkillItem key={index} data={item} />
            })
          }

        </div>
      </div>
    </div>
  );
};

export default Skills;
