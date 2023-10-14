import React from 'react'
import { LiaSearchSolid } from 'react-icons/lia'

const navbar = () => {
    return (
      <div className="flex">
        <div className="w-full h-[70px] justify-between flex items-center p-4">
          <p className="text-[1.25rem] font-[700] pl-12">audienceful</p>
          <div className="flex flex-row space-x-2  ">
            <p className={styles.text}>Features</p>
            <p className={styles.text}>Resources</p>
            <p className={styles.text}>Emailspiration</p>
            <p className={styles.text}>Pricing</p>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <LiaSearchSolid size={22} />
            <p className={styles.text} >Login</p>
            <div className="border rounded-full px-4 py-2 font-inter text-white text-[15px] font-medium opacity-80 bg-black ">Join free</div>
          </div>
        </div>
      </div>
    );
  };

const Audienceful = () => {
  return (
    <>
      {navbar()}
      <div className={styles.pageContainer}>
        <div className="flex justify-center h-[100vh] ">
          <div className="flex flex-col  items-center space-y-0 space-x-0 p-0 justify-start">
            <p className=' text-[136px] font-bold pt-[5%] text-[#222] tracking-tighter' >Better</p>
            <p className=' text-[136px] font-bold leading-3 text-[#222] tracking-tighter'>Email</p>
            <div className="flex flex-col items-center space-y-6 pt-24" >
            <div className="text-[20px] font-inter text-[#666] w-1/3 text-center leading-8 font-medium ">
            Tired of fighting with nightmarish email marketing software? 😳 Join thousands of businesses making the switch to an easier way to do mass email:
            </div>
            <div className="bg-[#2962FF] text-white text-[18px] font-[600] py-4 px-8 rounded-full font-inter my-4 ">
              Join now - Free
            </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Audienceful
const styles = {
    text: "text-[#333] font-medium text-[1rem] font-inter grayscale-0 cursor-pointer hover:bg-gray-200 py-2 px-4 hover:rounded-full ",
    pageContainer: "w-8/12 mx-auto",
  
  };
  