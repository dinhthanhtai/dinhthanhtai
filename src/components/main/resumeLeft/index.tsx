import avatar from '../../../assets/avatar.jpg';
import Education from './education';
import Profile from './profile';
import Skills from './skills';
import Social from './social';

const ResumeLeft: React.FC = () => {
    return (
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

        <Social />
        <Profile />
        <Education />
        <Skills />
    </div>
    )
};

export default ResumeLeft;