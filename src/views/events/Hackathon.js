import React, { useEffect } from 'react';
import { useState } from 'react'
import RotatingSponsorBanner from './../../components/RotatingSponsorBanner';

//once the timer starts it'll run forever so if you leave the page you'll get errors cause it'll try change things that aren't there
//couldn't get any sort of unload function to work to make it stop but if you have nay ideas please try

const Hackathon = () => {

  // function timer(interval) {
  //   let countDownDate = new Date("May 1, 2024 0:0:0").getTime();
  //   console.log(countDownDate)

  //   let x = setInterval(function() {
        
  //       let distance = countDownDate - new Date().getTime();
  //       console.log(distance)

  //       if (distance < 0 || interval === 0) {
  //           clearInterval(x);
  //           document.getElementById('days').innerText = '0';
  //           document.getElementById('hours').innerText = '0';
  //           document.getElementById('minutes').innerText = '0';
  //           document.getElementById('seconds').innerText = '0';
  //           document.getElementById('countdown').innerText = "ENJOY THE 2024 HACKATHON!!";
  //       } else {
  //           document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  //           document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //           document.getElementById('minutes').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //           document.getElementById('seconds').innerText = Math.floor((distance % (1000 * 60)) / 1000);
  //           document.getElementById('countdown').innerText = null;
  //       }
  //   }, interval);
  // }

  const [days, setDays ] = useState(0)
  const [hours, setHours ] = useState(0)
  const [minutes, setMinutes ] = useState(0)
  const [seconds, setSeconds ] = useState(0)

  const deadline = new Date("May 1, 2024 0:0:0").getTime();

  const getTime = () => {
    const time = deadline - new Date().getTime();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((time % (1000 * 60)) / 1000));
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return(
    <>
      <RotatingSponsorBanner />
      <div className='container-fluid text-center p-3' style={{backgroundColor: "var(--darker-blue)"}}>
        <h1 id="headline">Countdown to the 2024 Hackathon</h1>
        <div className='row justify-content-center' style={{color: "var(--green)"}}>
          <div className='col-1'>
            <p id='days' className='h2'>
              {days}
            </p>
          </div>
          <div className='col-1'>
            <p id='hours' className='h2'>
              {hours}
            </p>
          </div>
          <div className='col-1'>
            <p id='minutes' className='h2'>
              {minutes}
            </p>
          </div>
          <div className='col-1'>
            <p id='seconds' className='h2'>
              {seconds}
            </p>
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