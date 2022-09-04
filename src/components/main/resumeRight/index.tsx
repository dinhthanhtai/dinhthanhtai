import { useState ,useEffect } from "react";
import Skills from "../resumeLeft/skills";
import SkillsDetail from "../resumeLeft/skills/skillsDetail";

import Certificate from "./certificate";
import Experience from "./experience";
import Interests from "./interests";
import Languages from "./languagues";
import References from "./references";

const ResumeRight: React.FC = () => {
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
            {!isInterests && <SkillsDetail/>}
            {/* <Certificate /> */}
            {isInterests && <Interests/>}
            <a href='#' className={`scrollTop ${isScroll && 'show-scroll'}`} id='scroll-top'>
                <i className='bx bx-up-arrow-alt scrollTop__icon'></i>
            </a>
    </div>
    )
}

export default ResumeRight;