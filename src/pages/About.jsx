import React from "react";
import { uInfo } from "../data";


const About = () => {
  return (
    <div className="mt-20 flex flex-col pb-24 ">
    <div id='piCon' className="flex flex-row w-full items-center pb-8">
      <div id="borderAnimation" className="from-slate-400 from-25% via-slate-700 to-slate-950  relative bg-gradient-to-tr rounded-full p-2">
        <img id="aboutImg" src={uInfo.img} className="w-56 rounded-full object-cover max-w-none border border-black" />
      </div>
     <div id="aboutNameCon" className="pl-12">
     <p id="aboutName" className="text-[1.953rem] py-2 text-gray-100">{uInfo.name}</p>
     {
      uInfo.mails.map((item,index)=>{
        return <p key={index} id="aboutMail" className="text-[1.25rem] " >{item}</p>
      })
     }
     </div>
    </div>
      <p  id='hd' className={styles.header}>About Me</p>
      <p id='txt' className={styles.txt}>
        {uInfo.about}
      </p>

      <p id='hd' className={styles.header}>Why am I doing this job</p>
      <p id='txt' className={styles.txt}>
        {uInfo.whyYouDoingThis}
      </p>

      <p id='hd' className={styles.header}>achievements and experiences</p>

          {
            uInfo.achivementAndExperience.map((item,index)=>{
              return <p id='txt' key={index} className={styles.txt}>{item}</p>
            })
          }

      <p id='hd' className={styles.header} > interests and hobbies</p>
      {
            uInfo.interestAndHobbies.map((item, index)=>{
              return <p id='txt' key={index} className={styles.txt}>{item}</p>
            })
      }

      <p id='hd' className={styles.header}>vision and goals</p>
      {
            uInfo.visionAndGoals.map((item, index)=>{
              return <p id='txt' key={index} className={styles.txt}>{item}</p>
            })
      }


      </div>
  );
};

export default About;
const styles={
  header:"text-[1.563rem] py-2 text-gray-100 pt-8 capitalize",
  txt:'text-[1.1rem]'

}
