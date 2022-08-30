import './index.css';
import avatar from '../../assets/avatar.jpg';

const Main: React.FC = () => {
    return (
        <main className="l-main bd-container">
            <div className="resume">
                <div className="resume__left">
                    <section className="home" id="home">
                        <div className="home__container section bd-grid">
                            <div className="home__data bd-grid">
                                <img src={avatar} alt="" className="home__img"/>

                                <h1 className="home__title">
                                    DINH THANH TAI
                                </h1>
                                <h3 className="home__profession">
                                    Web developer
                                </h3>

                                <div>
                                    <a className="home__button-movil">Download</a>
                                </div>
                            </div>

                            <div className="home__address bd-grid">
                                <span className="home__information">
                                    <i className="bx bx-map home__icon"></i> Ho Chi Minh, Vietnam
                                </span>
                                <span className="home__information">
                                    <i className="bx bx-envelope home__icon"/> dinhthanhtai.xz@gmail.com
                                </span>
                                <span className="home__information">
                                    <i className="bx bx-phone home__icon"></i> 0906517120
                                </span>
                            </div>
                        </div>
                    </section>

                    <section className='social section'>
                        <h2 className='section-title'>
                            SOCIAL
                        </h2>

                        <div className='social__container bd-grid'>
                            <a href='https://www.linkedin.com/in/thanhtaidev/' target="_blank" className='social__link'>
                                <i className='bx bxl-linkedin-square social__icon' /> Thanh Tai
                            </a>
                            <a href='https://www.linkedin.com/in/thanhtaidev/' target="_blank" className=''>
                                <i className='bx bxl-facebook social__icon' /> Thanh Tai
                            </a>
                            <a href='https://www.linkedin.com/in/thanhtaidev/' target="_blank" className=''>
                                <i className='bx bxl-instagram social__icon' /> Thanh Tai
                            </a>
                        </div>
                    </section>

                    <section className='profile section' id='profile'>
                        <h2 className='section-title'> Profile </h2>
                    
                        <p className='profile__description'>
                        Have 1 year of experience in Web Development. Proficient in HTML, CSS, and Javascript; plus modern libraries and frameworks. 
                        Programming knowledge is enhanced by constant research and professional development. Ability to work well under stress and with short deadlines. Enjoys being part of a productive team, equally comfortable working on their own initiative.
                        </p>
                    </section>

                    <section className='education section' id='education'>
                        <h2 className='section-title'> Education </h2>

                        <div className='education__container bd-grid'>
                            <div className='education__content'>
                                <div className='education__time'>
                                    <span className='education__rounder'></span>
                                    <span className='education__line'></span>
                                </div>
                                
                                <div className='education__data bd-grid'>
                                    <h3 className='education__title'> Master of design </h3>
                                    <span className='education__studies'> University od Technology </span>
                                    <span className='education__year'> 2010 - 2015 </span>
                                </div>
                            </div>

                            <div className='education__content'>
                                <div className='education__time'>
                                    <span className='education__rounder'></span>
                                    <span className='education__line'></span>
                                </div>
                                
                                <div className='education__data bd-grid'>
                                    <h3 className='education__title'> Master of design </h3>
                                    <span className='education__studies'> University od Technology </span>
                                    <span className='education__year'> 2010 - 2015 </span>
                                </div>
                            </div>


                            <div className='education__content'>
                                <div className='education__time'>
                                    <span className='education__rounder'></span>
                                </div>
                                
                                <div className='education__data bd-grid'>
                                    <h3 className='education__title'> Master of design </h3>
                                    <span className='education__studies'> University od Technology </span>
                                    <span className='education__year'> 2010 - 2015 </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='skills section' id='skills'>
                        <h2 className='section-title' > Skill </h2>

                        <div className='skills__content bd-grid'>
                            <ul className='skills__data'>
                                <li className='skills__name'>
                                    <span className='skills__circle'></span> HTML
                                </li>
                                <li className='skills__name'>
                                    <span className='skills__circle'></span> Css
                                </li>
                                <li className='skills__name'>
                                    <span className='skills__circle'></span> Typescript
                                </li>
                                <li className='skills__name'>
                                    <span className='skills__circle'></span> Javascript
                                </li>
                            </ul>

                            <ul className='skills__data'>
                                <li className='skills__name'>
                                    <span className='skills__circle'></span> React JS
                                </li>
                                <li className='skills__name'>
                                    <span className='skills__circle'></span> Css
                                </li>
                                <li className='skills__name'>
                                    <span className='skills__circle'></span> Typescript
                                </li>
                                <li className='skills__name'>
                                    <span className='skills__circle'></span> Javascript
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

                <div className="resume__right">
                    <section className='experience section' id='experience'>
                        <h2 className='section-title'> Experience </h2>

                        <div className='experience__container bd-grid'>
                            <div className='experience__content'>
                                <div className='experience__time'>
                                    <span className='experience__rounder'></span>
                                    <span className='experience__line'></span>
                                </div>

                                <div className='experience__data bd-grid'>
                                    <h3 className='experience__title'> Master of design</h3>
                                    <span className='experience__company'>From 2013 to 2015</span>
                                    <p className='experience__description'> Work in this company </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='certificate section' id='certificates'>
                        <h2 className='section-title'> Certificates </h2>

                        <div className='certificate__container bd-grid'>
                            <div className='certificate__content'>
                                <h3 className='certificate__title'> Certified for compliance </h3>
                                <p className='certificate__description'> For meeting  </p>
                            </div>
                        </div>
                    </section> 

                    <section className='references section' id='references'>
                        <h2 className='section__tile'> References </h2>
                        
                        <div className='references__container bd-grid'>
                            <div className='references__content bd-grid'>
                                <span className='references__subtitle'> Sr. Director </span>
                                <h3 className='references__title'> Mr. Clay Doe </h3>
                                <ul className='references__contact'>
                                    <li> Phone: 999-777-666 </li>
                                    <li> Email: taidinh@kms-technology.com </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className='languages section'>
                        <h2 className='section-title'> Languages </h2>
                        
                        <div className='languages__container'>
                            <ul className='languages__content bd-grid'>
                                <li className='languages__name'>
                                    <span className='languages__circle'></span> Vietnamese
                                </li>
                                <li className='languages__name'>
                                    <span className='languages__circle'></span> English
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className='interest section'>
                        <h2 className='section-title'> Interest </h2>
                    
                        <div className='interests__container bd-grid'>
                            <div className='interests__content'>
                                <i className='bx bx-headphone interests__icon'></i>
                                <span className='interests__name'> Music </span>
                            </div>

                            <div className='interests__content'>
                                <i className='bx bxs-plane-alt interests__icon'></i>
                                <span className='interests__name'> Travel </span>
                            </div>

                            <div className='interests__content'>
                                <i className='bx bx-book interests__icon'></i>
                                <span className='interests__name'> Read </span>
                            </div>

                            <div className='interests__content '>
                                <i className='bx bx-dumbbell interests__icon'></i>
                                <span className='interests__name'> Fitness </span>
                            </div>
                        </div>
                    </section>

                    <a href='#' className='scrollTop' id='scroll-top'>
                        <i className='bx bx-up-arrow-alt scrollTop__icon'></i>
                    </a>

                </div>
            </div>
        </main>
    )
}

export default Main;