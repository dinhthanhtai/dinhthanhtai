const Social = () => {
    return (
        <section className='social section'>
            <h2 className='section-title'>
                SOCIAL
            </h2>

            <div className='social__container bd-grid'>
                <a href='https://www.linkedin.com/in/thanhtaidev/' target="_blank" className='social__link'>
                    <i className='bx bxl-linkedin-square social__icon' /> @dinhthanhtai
                </a>
                <a href='https://www.facebook.com/2002.taidt/' target="_blank" className='social__link'>
                    <i className='bx bxl-facebook social__icon' /> @dinhthanhtai
                </a>
                <a href='https://twitter.com/taidt2' target="_blank" className='social__link'>
                    <i className='bx bxl-twitter social__icon' /> @dinhthanhtai
                </a>
            </div>
        </section>
    )
}

export default Social