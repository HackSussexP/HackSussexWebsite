import React from 'react';

import PwnSussexLogo from './../../assets/index-carousel/PwnSussex-logo.png';
import PwnSussexBackground from './../../assets/index-carousel/PwnSussex-background.png';

const CaptureTheFlag = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <img src={PwnSussexBackground} className="d-block w-100 h-100 img-fluid" alt='Background' />
        <div className="carousel-caption">
          <img src={PwnSussexLogo} alt="PwnSussex Logo" className='img-fluid ms-auto me-auto d-block p-3' style={{ width: '60%', height: 'auto' }} />
        </div>
      </div>
    </>
  )
}

export default CaptureTheFlag;