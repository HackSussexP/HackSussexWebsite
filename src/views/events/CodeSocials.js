import React from "react";

import CodersCupBackground from './../../assets/events/CodersCup/CodersCupBackground.png';
import CodersCupLogo from './../../assets/events/CodersCup/CodersCupLogo.png';

const CodeSocials = () => {
  return (
    <>
      <div className="carousel-inner p-0">
        <img src={CodersCupBackground} className="d-block w-100 h-100 img-fluid splash" alt='Background' />
        <div className="carousel-caption">
          <img src={CodersCupLogo} alt="CodersCup Logo" className='img-fluid ms-auto me-auto d-block p-3' style={{ width: '60%', height: 'auto' }} />
        </div>
      </div>
    </>
  )
}

export default CodeSocials;