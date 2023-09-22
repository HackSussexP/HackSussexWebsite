import React from 'react';
import { Link } from 'react-router-dom';

import Events from './../events.js'

function dateFormat(date) {
  let dateObj = new Date(date)
  let month = dateObj.toLocaleString('default', { month: 'long' })
  let day = dateObj.getDate()
  let year = dateObj.getFullYear()
  return day + " " + month + " " + year
}

const PastEvents = () => {
  let date = new Date()
  let past = []
  let upcoming = []

  Events.forEach((event) => {
    let eventDate = new Date(event.date)
    if (eventDate > date) {
      upcoming.push(event)
    } else {
      past.push(event)
    }
  })

  past.sort((a,b) => {
    let dateA = new Date(a.date)
    let dateB = new Date(b.date)
    return dateB - dateA;
  })

  upcoming.sort((a,b) => {
    let dateA = new Date(a.date)
    let dateB = new Date(b.date)
    return dateA - dateB;
  })

  return (
    <>
      <div className="container-fluid mb-3 p-3">
        <h2 className="text-center display-6 border-bottom w-75 me-auto ms-auto pb-3">Upcoming Events</h2>
        <div class="container align-items-center events">
          <div class="row align-items-center">
            {upcoming.map((event, index) => (
              <div className="col-12 col-md-6 col-lg-4 my-3">
                <div className="card">
                  <img src={event.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h2 className="card-title text-center display-5 mb-2">
                      {event.title}
                    </h2>
                    <p className="card-text">
                      <span className='me-2'>
                        <i className="fas fa-calendar-alt"></i>
                      </span>
                      {dateFormat(event.date)}
                    </p>
                    <p className="card-text">
                      <span className='me-2'>
                        <i className="fas fa-clock"></i>
                      </span>
                      {event.time}
                    </p>
                    <p className="card-text">
                      <span className='me-2'>
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      {event.location}
                    </p>
                    <Link to={"/events/"+event.date+"_"+event.title} className="btn btn-blue">View Event</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid mb-3 p-3">
        <h2 className="text-center display-6 border-bottom w-75 me-auto ms-auto pb-3">Past Events</h2>
        <div class="container align-items-center events">
          <div class="row align-items-center">
            {past.map((event, index) => (
              <div className="col-12 col-md-6 col-lg-4 my-3">
                <div className="card">
                  <img src={event.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h2 className="card-title text-center display-5 mb-2">
                      {event.title}
                    </h2>
                    <p className="card-text">
                      <span className='me-2'>
                        <i className="fas fa-calendar-alt"></i>
                      </span>
                      {dateFormat(event.date)}
                    </p>
                    <p className="card-text">
                      <span className='me-2'>
                        <i className="fas fa-clock"></i>
                      </span>
                      {event.time}
                    </p>
                    <p className="card-text">
                      <span className='me-2'>
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      {event.location}
                    </p>
                    <Link to={"/events/"+event.date+"_"+event.title} className="btn btn-blue">View Event</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PastEvents;