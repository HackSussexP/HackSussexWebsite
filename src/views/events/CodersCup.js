import React from 'react';
import CodersCupBackground from './../../assets/index-carousel/coderscup-background.png';
import CodersCupLogo from './../../assets/coders-cup-logo-white-23.png';

const CodersCup = () => {
  return (
    <>
      <div className="container-fluid p-0">
      <img src={CodersCupBackground} className="d-block w-100 h-100 img-fluid" alt='Background' />
        <div className="carousel-caption">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <img src={CodersCupLogo} alt="Coders Cup Logo" className="img-fluid me-auto ms-auto d-block p-5" />
                <h1 className='fw-bold display-2 d-none d-lg-block'>HackSussex</h1>
                <h1 className='fw-bold display-4 text-electric d-none d-lg-block'>Coders Cup</h1>
              </div>
              
              <div className="col-6 d-none d-lg-block">
                <iframe 
                  className="w-100 rounded" 
                  src="https://www.youtube.com/embed/yPifHEfu4Qs?si=-9kvdIJc05nbL4IY" 
                  style={{ aspectRatio: '16/9', maxWidth: '560px', borderRadius: '15px' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  title="coder's cup video"
                ></iframe>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CodersCup;