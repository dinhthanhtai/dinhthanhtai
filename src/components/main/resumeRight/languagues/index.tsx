const Languages: React.FC = () => {
    return (
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
    );
}

export default Languages;