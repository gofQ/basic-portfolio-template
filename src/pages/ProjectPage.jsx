import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {BiArrowBack} from 'react-icons/bi'
import useScrollTop from "../util/useScrollTop";

const ProjectPage = () => {
  const location = useLocation();
  const data = location.state;
  const navigate=useNavigate()
  const headerRef=useScrollTop({navigate})
    
    const goBack=()=>{
        navigate(-1)
    }

  return (
    <div id="mt" ref={headerRef} className="mt-20">
      <div className='flex flex-row items-center space-x-3 pb-2'>
           <BiArrowBack onClick={goBack} className='active:scale-90 text-[24px]'  />
           <p id='pgNormalText' className='text-[1.25rem]'>Portfolio</p>
           </div>
      <div className="flex flex-row items-center space-x-2">
        <p id="pgName" className="text-[1.953rem]">{data.projectName}</p>
        <p id="pgNormalText" className="text-[1.253rem] text-gray-400 italic">
          ({data.projectDate})
        </p>
      </div>

      <p id="pgNormalText" className="text-[1.2rem] py-2">{data.projectDescription}</p>
      <div>
        <p id="pgSecondaryHeader" className="text-[1.563rem] pt-6 py-2">
          Using Technologies in Project
        </p>
        {data.projectTechs.map((item,index) => {
          return <p id="pgNormalText" key={index} className="text-[1.1rem]">{item}</p>;
        })}
      </div>
      <div id='pgSUA' className="flex flex-row">
        <div className="flex flex-col w-1/2">
          <p id="pgSecondaryHeader" className="text-[1.563rem] pt-6 py-2 ">Project Source & Urls</p>
          <div className="flex flex-col space-y-1">
            {data.projectURLs.map((item,index) => {
              return (
                <a
                key={index}
                id="pgNormalText"
                  href={item}
                  target="__blank"
                  className="text-[1.1rem] w-0 text-blue-400 underline underline-offset-4"
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
        <div  className="flex flex-col w-1/2">
          <p id="pgSecondaryHeader" className="text-[1.563rem] pt-6 py-2">Project Awards</p>
          <div>
            {data.projectAwards.map((item,index) => {
              return <p key={index} id="pgNormalText" className="text-[1.1rem]">{item}</p>;
            })}
          </div>
        </div>
      </div>
      <div>
        <p id="pgSecondaryHeader" className="text-[1.563rem] pt-6 py-2">Project Images</p>
      </div>

      <div id='pgImages' className='grid grid-cols-3 gap-6 pb-24 '>
            {data.projectImages.map((item,index)=>{
              return  <img key={index} src={item} alt="" className="w-full h-56 object-fill aspect-video rounded" />
            })}
        </div>
    </div>
  );
};

export default ProjectPage;
