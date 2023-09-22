import React from 'react';
import { Link } from 'react-router-dom';

import events from './../events.js'

function dateFormat(date) {
  let dateObj = new Date(date)
  let month = dateObj.toLocaleString('default', { month: 'long' })
  let day = dateObj.getDate()
  let year = dateObj.getFullYear()
  return day + " " + month + " " + year
}

const UpcomingEvents = () => {
  let date = new Date()
  let upcoming = []
  // filter out past events
  events.forEach((event) => {
    let eventDate = new Date(event.date)
    if (eventDate > date) {
      upcoming.push(event)
    }
  })
  // sort by date
  upcoming.sort((a,b) => {
    let dateA = new Date(a.date)
    let dateB = new Date(b.date)
    return dateA - dateB;
  })
  // only show 3
  upcoming = upcoming.slice(0,3)

  return (
    <div className="container-fluid mb-5 p-3 gradient">
      <div className="">
        <h2 className="text-center text-dark display-6">Upcoming Events</h2>
      </div>
      <div className="container align-items-center events">
        <div className="row align-items-center">
          {upcoming.map((event, index) => (
            <div className="col-12 col-md-6 col-lg-4 my-3 ms-auto me-auto">
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
        <div className="text-center">
          <Link to="/events" className="btn">
            <strong>
              View More
              <i className="fas fa-arrow-right ms-2"></i>
            </strong>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents;