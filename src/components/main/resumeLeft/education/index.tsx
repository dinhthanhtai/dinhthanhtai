const Education = () => {
  return (
    <section className='education section' id='education'>
      <h2 className='section-title'> Education </h2>

      <div className='education__container bd-grid'>
        <div className='education__content'>
          <div className='education__time'>
            <span className='education__rounder'></span>
            <span className='education__line'></span>
          </div>

          <div className='education__data bd-grid'>
            <h3 className='education__title'>  University of Information Technology, ĐHQG TP.HCM </h3>
            <span className='education__studies'> Information System  </span>
            <span className='education__year'> 8/2018 - 12/2022 </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
