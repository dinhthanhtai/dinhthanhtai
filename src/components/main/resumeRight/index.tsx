import { useState, useEffect } from "react";

import SkillsDetail from "../resumeLeft/skills/skillsDetail";
import Experience from "./experience";
import Interests from "./interests";

interface IProps {
  isScale: boolean;
}

const ResumeRight: React.FC<IProps> = ({ isScale }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isInterests, setIsInterests] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    })
  }, [window.scrollY])

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.screen.width <= 968) {
        setIsInterests(true);
      } else {
        setIsInterests(false);
      }
    })
  }, [window.screen.width])

  return (
    <div className="resume__right">
      <Experience />
      {!isInterests && <SkillsDetail />}
      {isInterests && <Interests />}
      <a href='#' className={`scrollTop ${isScroll && 'show-scroll'}`} id='scroll-top'>
        <i className='bx bx-up-arrow-alt scrollTop__icon'></i>
      </a>
    </div>
  )
}

export default ResumeRight;
