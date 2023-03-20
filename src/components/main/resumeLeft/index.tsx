import { useEffect, useState, forwardRef, useLayoutEffect } from 'react';

import avatar from '../../../assets/avatar.jpg';
import Certificate from '../resumeRight/certificate';
import Interests from '../resumeRight/interests';
import Languages from '../resumeRight/languages';
import Education from './education';
import Profile from './profile';
import Skills from './skills';
import Social from './social';

import './index.scss';

interface IProps {
    onPrintPDF: () => void;
    isScale: boolean;
}

const ResumeLeft = forwardRef<HTMLAnchorElement, IProps>(({ onPrintPDF, isScale }, ref) => {
    const selectedTheme = localStorage.getItem('theme');
    const getCurrentTheme = document.body.classList.contains('dark-theme');

    const [isSkill, setIsSkill] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        return selectedTheme === 'dark' && getCurrentTheme
    });
    
    useLayoutEffect(() => {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        if (isMac) {
            document.body.classList.add('dark-theme');
        }

        const typeTheme = isMac ? 'dark' : 'light'

        if (!selectedTheme) {
            localStorage.setItem('theme', typeTheme );
            setIsDark(typeTheme === 'dark');
        }
    }, [])
    
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.screen.width <= 968) {
                setIsSkill(true)
            } else {
                setIsSkill(false);
            }
        })
    }, [window.screen.width])

    const onToggleTheme = () => {
        document.body.classList[isDark ? 'remove' : 'add']('dark-theme');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
        setIsDark(!isDark);
    }

    return (
        <div className="resume__left">
        <section className="home" id="home">
            <div className="home__container section bd-grid">
                <div className="home__data bd-grid">
                    <img src={avatar} alt="Image Avatar" className="home__img"/>

                    <h1 className="home__title">
                        DINH THANH TAI
                    </h1>
                    <h3 className="home__profession">
                        Web Developer
                    </h3>

                    <div>
                        <a className="home__button-movil">Download</a>
                    </div>
                </div>

                <div className="home__address bd-grid">
                    <span className="home__information">
                        <i className="bx bx-map home__icon"></i> Ho Chi Minh, Vietnam
                    </span>
                    <a href="mailto: dinhthanhtai.xz@gmail.com" className="home__information">
                        <i className="bx bx-envelope home__icon"/> dinhthanhtai.xz@gmail.com
                    </a>
                    <a href="tel:+0906517120" className="home__information">
                        <i className="bx bx-phone home__icon"></i> 0906517120
                    </a>
                </div>
            </div>

            <i 
                title='Theme' 
                id='theme-button'
                onClick={onToggleTheme} 
                className={`bx ${selectedTheme === 'dark' ? 'bx-sun' : 'bx-moon'} change-theme`} 
            />
            <a ref={ref}>
                <i
                    id='resume-button'
                    title='Generate PDF' 
                    onClick={onPrintPDF}
                    className='bx bx-download generate-pdf' 
                />
            </a>
        </section>

        <Social />
        <Profile />
        <Education />
        <Languages />
        <Certificate />
        {
            isSkill ? <Skills /> : <Interests /> 
        }
    </div>
    )
});

export default ResumeLeft;