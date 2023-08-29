import React from 'react';
import SponsorBanner from './../../components/SponsorBanner';

const Hackathon = () => {
  function timer() {
    let countDownDate = new Date("May 1, 2024 0:0:0").getTime();

    let x = setInterval(function() {

      let distance = countDownDate - new Date().getTime();

      document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
      document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      document.getElementById('minutes').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      document.getElementById('seconds').innerText = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerText = "ENJOY THE 2024 HACKATHON!!";
      }
    }, 1000);
  }

  return(
    <>
      <SponsorBanner />
      <div className='container-fluid text-center p-3' onLoad={timer()} style={{backgroundColor: "var(--darker-blue)"}}>
        <h1 id="headline">Countdown to the 2024 Hackathon</h1>
        <div className='row justify-content-center' style={{color: "var(--green)"}}>
          <div className='col-1'>
            <p id='days' className='h2'/>
          </div>
          <div className='col-1'>
            <p id='hours' className='h2'/>
          </div>
          <div className='col-1'>
            <p id='minutes' className='h2'/>
          </div>
          <div className='col-1'>
            <p id='seconds' className='h2'/>
          </div>
        </div>
        <div className='row justify-content-center' style={{color: "var(--electric-green)"}}>
          <div className='col-1'>
            <p className='h3'>DAYS</p>
          </div>
          <div className='col-1'>
            <p className='h3'>HOURS</p>
          </div>
          <div className='col-1'>
            <p className='h3'>MINS</p>
          </div>
          <div className='col-1'>
            <p className='h3'>SECS</p>
          </div>
        </div>
        <h1 id='countdown' style={{color: "var(--lime)"}}></h1>
        <h1>This timer starts and runs indefinitely in the background - couldn't figure out how to stop it so if you know please help</h1>
        <h1>As soon as you leave this page you will get a load of errors so just reload</h1>
      </div>
    </>
  );
}

export default Hackathon;