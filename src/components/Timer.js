import React, { useEffect } from 'react';
import { useState } from 'react'

//Timer on mobile view is all pressed together so change this

const Timer = (props) => {

    const [days, setDays ] = useState(0)
    const [hours, setHours ] = useState(0)
    const [minutes, setMinutes ] = useState(0)
    const [seconds, setSeconds ] = useState(0)
  
    const deadline = new Date(props.date).getTime();
  
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

    return (
        <>
            <div className='container-fluid text-center p-3' style={{backgroundColor: "var(--darker-blue)"}}>
                <h1 id="headline">Countdown to the 2024 Hackathon</h1>
                <div className='container-fluid d-block d-lg-none'>
                    <div className='row justify-content-center' style={{color: "var(--green)"}}>
                        <div className='col-2'>
                            <p id='days' className='h2'>
                            {days}
                            </p>
                        </div>
                        <div className='col-2'>
                            <p id='hours' className='h2'>
                            {hours}
                            </p>
                        </div>
                        <div className='col-2'>
                            <p id='minutes' className='h2'>
                            {minutes}
                            </p>
                        </div>
                        <div className='col-2'>
                            <p id='seconds' className='h2'>
                            {seconds}
                            </p>
                        </div>
                    </div>
                    <div className='row justify-content-center' style={{color: "var(--electric-green)"}}>
                        <div className='col-2'>
                            <p className='h3'>DAYS</p>
                        </div>
                        <div className='col-2'>
                            <p className='h3'>HRS</p>
                        </div>
                        <div className='col-2'>
                            <p className='h3'>MINS</p>
                        </div>
                        <div className='col-2'>
                            <p className='h3'>SECS</p>
                        </div>
                    </div>
                </div>
                <div className='container-fluid d-none d-lg-block'>
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
                </div>
                <h1 id='countdown' style={{color: "var(--lime)"}}></h1>
            </div>
        </>
    )
}

export default Timer;

/*<div className="row d-block d-sm-none">

</div>
<div className="row d-none d-sm-block">

</div>*/