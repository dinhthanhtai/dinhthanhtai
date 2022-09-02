import { useState ,useEffect } from "react";

import Certificate from "./certificate";
import Experience from "./experience";
import Interests from "./interests";
import Languages from "./languagues";
import References from "./references";

const ResumeRight: React.FC = () => {
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    }, [window.scrollY])

    return (
        <div className="resume__right">
            <Experience />
            <Certificate />
            <Languages />
            <Interests/>
            <a href='#' className={`scrollTop ${isScroll && 'show-scroll'}`} id='scroll-top'>
                <i className='bx bx-up-arrow-alt scrollTop__icon'></i>
            </a>
    </div>
    )
}

export default ResumeRight;