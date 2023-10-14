import React from 'react'
import WorkItem from '../components/Portfolio/WorkItem'
import ReferenceItem from '../components/Portfolio/ReferenceItem'
import { portfolio } from '../data'

const Portfolio = () => {
  return ( 
    <div id='mt' className='mt-20'>
      <p id='portHeader' className='text-[1.953rem]'>Portfolio</p>
      <div>
        <p id='portText' className='text-[1.1rem] font-mono indent-8'>{portfolio.portfolioDescription}</p>
      </div>
      <div className='py-2'>
        <p id='workHeader' className='text-[1.953rem] py-4 pt-6'>My Works</p>
        <div id='workDiv' className='grid grid-cols-4 gap-8 pb-8' >
          {
            portfolio.portfolioWorks.map((item,index)=>{
              return(
                <WorkItem key={index} data={item} />
              )
            })
          }
        </div>
      </div>
      {
        portfolio.portfolioReferences &&
        <div>
        <p id='referenceHeader' className='text-[1.953rem] py-2 '>References</p>
        <div id='referenceDiv' className='grid grid-cols-6 gap-12 pb-12'>
          {
            portfolio.portfolioReferences.map((item,index)=>{
              return <ReferenceItem key={index} data={item} />
            })
          }
        </div>
      </div>
      
      }

    </div>
  )
}

export default Portfolio