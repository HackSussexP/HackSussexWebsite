import React, { useEffect } from 'react';
import { useState } from 'react'

const Timer = (props) => {

    const [days, setDays ] = useState(0)
    const [hours, setHours ] = useState(0)
    const [minutes, setMinutes ] = useState(0)
    const [seconds, setSeconds ] = useState(0)
    const [loading, setLoading] = useState(true)
  
    const deadline = new Date(props.date).getTime();
  
    const getTime = () => {
      const time = deadline - new Date().getTime();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((time % (1000 * 60)) / 1000));
      setLoading(false)
    }
  
    useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 1000);
  
      return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='container-fluid text-center p-3' style={{backgroundColor: "var(--darker-blue)"}}>
                {loading ? (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <>
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
                    </>
            )}
            </div>
        </>
    )
}

export default Timer;