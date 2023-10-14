import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaTiktok,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import { uInfo } from "../../data";

const Icons = () => {
  const { instagram, linkedin, github, jobMail } = uInfo;

  const iconComp = (link, children) => {
    return (
      link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    );
  };

  return (
    <div className="flex flex-row justify-center space-x-6">
      {iconComp(instagram, <FaInstagram id="iconRes" color="white" className={styles.icons} />)}
      {iconComp(linkedin, <AiFillLinkedin id="iconRes" color="white" className={styles.icons} />)}
      {iconComp(github, <AiFillGithub id="iconRes" color="white" className={styles.icons} />)}
      {
        uInfo.jobMail && 
        <a href={`mailto:${jobMail}`} target="_blank" rel="noopener noreferrer">
      <AiOutlineMail id="iconRes" color="white" className={styles.icons} />
      </a>
      
      }
      
    </div>
  );
};

export default Icons;
const styles = {
  icons: "cursor-pointer active:scale-90 transition-all hover:scale-110 text-[24px] ",
};
