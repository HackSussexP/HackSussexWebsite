import React, { useState, useEffect } from 'react';

import styles from './Home.module.css';

import RotatingSponsorBanner from '../components/RotatingSponsorBanner';
import SocialMediaBanner from '../components/SocialMediaBanner';
import AboutHeader from '../components/AboutHeader';
import HomeEvents from '../components/HomeEvents';
import UpcomingEvents from '../components/UpcomingEvents';

import HackathonBackground from './../assets/hackathon-background-darker.png';
import HackathonLogo from '../assets/hackathon-23-trans-gradient-small.png';

import CodersCupBackground from './../assets/index-carousel/coderscup-background.png';
import CodersCupLogo from '../assets/coders-cup-logo-white-23.png';

import GameJamLogo from './../assets/index-carousel/gamejam-logo.png';
import GameJamBackground from './../assets/index-carousel/gamejam-background.png';

import CTFLogo from './../assets/index-carousel/ctf-logo.png';
import CTFBackground from './../assets/index-carousel/ctf-background.png';

import LeetcodingLogo from './../assets/index-carousel/leetcoding-logo.png';
import LeetcodingBackground from './../assets/index-carousel/leetcoding-background.png';

const Home = () => {
  const [loading, setLoading] = useState(true);

  const waitForLoad = () => {
    if (document.readyState === "complete") {
      setLoading(false);
    }
  };

  useEffect(() => {
    waitForLoad();
  }, []);

  return (
    <>
      <div className='container-fluid m-0 p-0'>
        <div className='row'>
          <div className='col-12 p-0'>
            <div id='homeCarousel' className='carousel slide' data-bs-ride='carousel'>
              <div className="carousel-indicators mb-3 p-0">
                <div className='row'>
                  <div className='col'>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  </div>
                </div>
              </div>
              <div className='carousel-inner' role='listbox'>

                {/* HACKATHON CAROUSEL */}
                <a href="/events/hackathon" className={styles.carouselLink}>
                  <div className={`${styles.carouselItem} carousel-item active`}>
                    <img src={HackathonBackground} className="d-block w-100 h-100 img-fluid" alt='Background' />
                    <div className="carousel-caption d-flex justify-content-center align-items-center h-100">
                      <div className="container">
                        <div className="row align-items-center">

                          <div className="col-md-5">
                            <img src={HackathonLogo} alt="Logo" className="img-fluid mb-3" style={{ width: '125%' }} />
                            <div style={{ textAlign: 'left' }}>
                              <p>📅 18th - 19th February 2023 </p>
                              <p>📍 Chichester building, University of Sussex, UK</p>
                              <p>🌐 Hybrid</p>
                            </div>
                          </div>
                          
                          <div className="col-md-7 d-flex justify-content-center">
                            <iframe 
                              className="w-100 rounded" 
                              src="https://www.youtube.com/embed/gmKBSb7kbTY" 
                              style={{ aspectRatio: '16/9', maxWidth: '560px', borderRadius: '15px' }}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen
                            ></iframe>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* END HACKATHON CAROUSEL */}

                {/* GAME JAM CAROUSEL */}
                <a href="/events/gamejam" className={styles.carouselLink}>
                  <div className={`${styles.carouselItem} carousel-item h-100`}>
                    <img src={GameJamBackground} className="d-block w-100 h-100 img-fluid" alt='Background' />
                    <div className={`${styles.carouselCaption} carousel-caption d-none d-md-block`}>
                      <div className='container my-5'>
                        <div className='row align-items-center justify-content-center'>
                          <div className={`col-md-5 ${styles.leftColumn}`}>
                            <img src={GameJamLogo} alt="Game Jam Logo" className='img-fluid mb-3'/>
                            <div style={{ textAlign: 'left' }}>
                              <p>📅 25th - 26th November 2023</p>
                              <p>📍 Chichester building, University of Sussex, UK</p>
                              <p>🌐 In-Person</p>
                            </div>
                          </div>
                          <div className='col-md-7 text-center'>
                            <h1 className='font-weight-bold display-1'>HackSussex</h1>
                            <h1 className='font-weight-bold display-4' style={{ color: '#34d2c8' }}>Game Jam Event Loading...</h1>
                            <div className='mt-3'>
                              <div className="progress" style={{ height: '30px', borderRadius: '15px', backgroundColor: '#222' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <div className='text-center mt-2 text-light display-6'>40%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* END GAME JAM  CAROUSEL */}

                {/* CODERS CUP CAROUSEL */}
                <a href="/events/coderscup" className={styles.carouselLink}>
                  <div className={`${styles.carouselItem} carousel-item h-100`}>
                    <img src={CodersCupBackground} className="d-block w-100 h-100 img-fluid" alt='Background' />
                    <div className="carousel-caption d-flex justify-content-center align-items-center h-100">
                      <div className="container">
                        <div className="row align-items-center">

                          {/* Left Column */}
                          <div className="col-md-5">
                            <img src={CodersCupLogo} alt="Coders Cup Logo" className="img-fluid mb-3" style={{ width: '125%' }} />
                            <h1 className='font-weight-bold display-2'>HackSussex</h1>
                            <h1 className='font-weight-bold display-4' style={{ color: '#34d2c8' }}>Coders Cup</h1>
                          </div>
                          
                          {/* Right Column */}
                          <div className="col-md-7 d-flex justify-content-center">
                            <iframe 
                              className="w-100 rounded" 
                              src="https://www.youtube.com/embed/yPifHEfu4Qs?si=-9kvdIJc05nbL4IY" 
                              style={{ aspectRatio: '16/9', maxWidth: '560px', borderRadius: '15px' }}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen
                            ></iframe>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* END CODERS CUP CAROUSEL */}

                {/* CTF CAROUSEL */}
                <a href="/events/ctf" className={styles.carouselLink}>
                  <div className={`${styles.carouselItem} carousel-item h-100`} style={{ position: 'relative' }}>
                    <img src={CTFBackground} className="d-block w-100 h-100 img-fluid" alt='Background' />
                    <div className={`${styles.carouselCaption} carousel-caption d-none d-md-block`}>
                      <div className="d-flex justify-content-center align-items-center h-100" style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', overflow: 'visible' }}>
                        <img src={CTFLogo} alt="CTF Logo" className='img-fluid' style={{ width: '60%', height: 'auto' }} />
                      </div>
                    </div>
                  </div>
                </a>
                {/* END CTF CAROUSEL */}

                {/* LEETCODING CAROUSEL */}
                <a href="/events/leetcoding" className={styles.carouselLink}>
                  <div className={`${styles.carouselItem} carousel-item h-100`} style={{ position: 'relative' }}>
                    <img src={LeetcodingBackground} className="d-block w-100 h-100 img-fluid" alt='Background' />
                    <div className={`${styles.carouselCaption} carousel-caption d-none d-md-block`}>
                      <div className="d-flex justify-content-center align-items-center h-100" style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', overflow: 'visible' }}>
                        <img src={LeetcodingLogo} alt="Leetcoding Logo" className='img-fluid' style={{ width: '60%', height: 'auto' }} />
                      </div>
                    </div>
                  </div>
                </a>
                {/* END LEETCODING CAROUSEL */}

              </div>
            </div>
          </div>
        </div>
      </div>

      <RotatingSponsorBanner />
      <AboutHeader />
      <UpcomingEvents />
      <HomeEvents />
      <SocialMediaBanner />
    </>
  );
}

export default Home;
