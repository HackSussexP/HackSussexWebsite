import React from 'react';
import GameJamLogo from './../../assets/index-carousel/gamejam-logo.png';
import GameJamBackground from './../../assets/index-carousel/gamejam-background.png';

const GameJam = () => {
  return(
    <div className="carousel-inner p-0">
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
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='text-center mt-2 text-light display-6'>50%</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default GameJam;