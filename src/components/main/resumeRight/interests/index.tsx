import { FC } from 'react';

import './index.scss';

const Interests: FC = () => {
    return (
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
    )
}

export default Interests;