import React from 'react';
import { Link } from 'react-router-dom';

import image1 from './../assets/index-carousel/image1.png'
import image2 from './../assets/index-carousel/image2.png'
import image3 from './../assets/index-carousel/image3.png'

const EventCards = () => {

  const events = [
    {
      image: image1,
      title: 'Game Jam',
      date: '15/09/2023 18:00',
      location: 'Online',
      link: 'gamejam'
    },
    {
      image: image2,
      title: 'Hackathon',
      date: '15/09/2023 18:00',
      location: 'Online',
      link: 'hackathon'
    },
    {
      image: image3,
      title: 'Coder\'s Cup',
      date: '15/09/2023 18:00',
      location: 'Online',
      link: 'coderscup'
    },
  ]

  return (
    <div className="container-fluid mb-5 p-3 event-cards">
      <div className="">
        <h2 className="text-center">Upcoming Events</h2>
      </div>
      <div className="container align-items-center">
        <div className="row align-items-center">
          {events.map((event, index) => (
            <div className="col-12 col-md-6 col-lg-4 my-3 ms-auto me-auto">
              <div className="card">
                <img src={event.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h2 className="card-title text-center mb-2">
                    {event.title}
                  </h2>
                  <p className="card-text">
                    <span className='me-2'>
                      <i className="fas fa-calendar-alt"></i>
                    </span>
                    {event.date}
                  </p>
                  <p className="card-text">
                    <span className='me-2'>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    {event.location}
                  </p>
                  <Link to={"/events/"+event.link} className="btn btn-blue">View Event</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/calendar" className="btn">
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

export default EventCards;