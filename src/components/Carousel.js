import React from 'react';
import { Link } from 'react-router-dom';

import HackathonBackground from './../assets/hackathon-background-darker.png';
import HackathonLogo from '../assets/hackathon-2024.png';

import CodersCupBackground from './../assets/index-carousel/coderscup-background.png';
import CodersCupLogo from '../assets/coders-cup-logo-white-23.png';

import GameJamLogo from './../assets/index-carousel/gamejam-logo.png';
import GameJamBackground from './../assets/index-carousel/gamejam-background.png';

import PwnSussexLogo from './../assets/index-carousel/PwnSussex-logo.png';
import PwnSussexBackground from './../assets/index-carousel/PwnSussex-background.png';

import LeetcodingLogo from './../assets/index-carousel/leetcoding-logo.png';
import LeetcodingBackground from './../assets/index-carousel/leetcoding-background.png';

const HomeCarousel = () => {
  return (
    <div className='container-fluid m-0 p-0'>
      <div className='row'>
        <div className='col p-0'>
          <div id='homeCarousel' className='carousel slide'data-bs-ride="carousel">
            <div className='carousel-inner m-0'>
              {/* HACKATHON CAROUSEL */}
              <Link to="/events/hackathon" className="p-0">
                <div className="carousel-item active">
                  <img src={HackathonBackground} className="d-block w-100 img-fluid" alt='Hackathon background' />
                  <div className="carousel-caption">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-6">
                        <img src={HackathonLogo} alt="Hackathon Logo" className="img-fluid me-auto ms-auto d-block p-3" />
                        <p className='text-wrap text-start d-none d-lg-block'>
                          📅 18th - 19th February 2024 <br />
                          📍 Chichester building, University of Sussex, UK <br />
                          🌐 Hybrid
                        </p>
                      </div>
                      <div className="col-6 d-none d-lg-block">
                        <iframe 
                          className="w-100 rounded" 
                          src="https://www.youtube.com/embed/gmKBSb7kbTY" 
                          style={{ aspectRatio: '16/9', maxWidth: '560px', borderRadius: '15px' }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                          title="Hackathon Video"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
                
              {/* END HACKATHON CAROUSEL */}

              {/* GAME JAM CAROUSEL */}
              <Link to="/events/gamejam" className="p-0">
                <div className="carousel-item">
                  <img src={GameJamBackground} className="d-block w-100 h-100 img-fluid" alt='Background' />
                  <div className="carousel-caption">
                    <div className='row align-items-center'>
                        <div className="col-12 col-lg-6">
                          <img src={GameJamLogo} alt="Game Jam Logo" className='img-fluid me-auto ms-auto d-block p-3'/>
                          <p className='text-wrap text-start d-none d-lg-block'>
                            📅 25th - 26th November 2023<br />
                            📍 Chichester building, University of Sussex, UK<br />
                            🌐 In-Person
                          </p>
                        </div>
                        <div className='col-lg-6 d-none d-lg-block'>
                          <h1 className='fw-bold display-4 text-electric'>Game Jam Event Loading...</h1>
                          <div className='mt-3'>
                            <div className="progress" style={{ height: '30px', borderRadius: '15px', backgroundColor: '#222' }}>
                              <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="80" aria-valuemax="100"></div>
                            </div>
                            <div className='text-center mt-2 text-light display-6'>80%</div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </Link>
              {/* END GAME JAM  CAROUSEL */}

              {/* CODERS CUP CAROUSEL */}
              <Link to="/events/coderscup" className="p-0">
                <div className="carousel-item">
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
              </Link>
              {/* END CODERS CUP CAROUSEL */}

              {/* PwnSussex CAROUSEL */}
              <Link to="/events/pwnsussex" className="p-0">
                <div className="carousel-item h-100">
                  <img src={PwnSussexBackground} className="d-block w-100 h-100 img-fluid" alt='Background' />
                  <div className="carousel-caption">
                    <img src={PwnSussexLogo} alt="PwnSussex Logo" className='img-fluid ms-auto me-auto d-block p-3' />
                  </div>
                </div>
              </Link>
              {/* END PwnSussex CAROUSEL */}

              {/* LEETCODING CAROUSEL */}
              <Link to="/events/leetcoding" className="p-0">
                <div className="carousel-item">
                  <img src={LeetcodingBackground} className="d-block w-100 h-100 img-fluid" alt='Background' />
                  <div className="carousel-caption">
                    <img src={LeetcodingLogo} alt="Leetcoding Logo" className='img-fluid ms-auto me-auto d-block p-3' style={{ width: '60%', height: 'auto' }} />
                  </div>
                </div>
              </Link>
              {/* END LEETCODING CAROUSEL */}

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
  </div>

  );
}

export default HomeCarousel;
