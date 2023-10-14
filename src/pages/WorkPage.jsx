import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import useScrollTop from '../util/useScrollTop'

const WorkPage = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const data=location.state
    const headerRef=useScrollTop({navigate})

    const goBack=()=>{
        navigate(-1)
    }

  return (
    <div id='mt' ref={headerRef} className='mt-20'>
        <div>
           <div  className='flex flex-row items-center space-x-3 pb-2'>
           <BiArrowBack onClick={goBack} className='active:scale-90 text-[24px]'  />
           <p id='pgNormalText' className='text-[1.25rem]'>Portfolio</p>
           </div>
           <div className="flex flex-row items-center space-x-2">
        <p id="pgName" className="text-[1.953rem]">{data.workTitle}</p>
        <p id="pgNormalText" className="text-[1.253rem] text-gray-400 italic">
          ({data.workDate})
        </p>
      </div>
      <p id="pgNormalText" className="text-[1.2rem] py-2">{data.workDescription}</p>
      <div>
        <p id="pgSecondaryHeader" className="text-[1.563rem] pt-6 py-2">
          Using Technologies in Project
        </p>
        {data.workTechs.map((item, index) => {
          return <p id="pgNormalText" key={index} className="text-[1.1rem]">{item}</p>;
        })}
      </div>
      {
        data.workImages &&
        <>
        <div>
        <p id="pgSecondaryHeader" className="text-[1.563rem] pt-6 py-2">Project Images</p>
      </div>

      <div id='pgImages' className='grid grid-cols-3 gap-8 pb-24'>
            {data.workImages.map((item,index)=>{
              return  <img src={item} key={index} className='w-full h-56 aspect-video object-fill rounded' />
            })}
        </div>
        </>
      }
        </div>
    </div>
  )
}

export default WorkPage