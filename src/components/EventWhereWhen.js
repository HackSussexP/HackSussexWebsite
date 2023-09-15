import React from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import background from './../assets/sparse-icon-scatter.png';

const EventWhereWhen = () => {
  return (
    <div className="container-fluid py-3 p-5" style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#F5F5F5',
    }}>
      <div className="container">
        <div className="row align-items-center">

          {/* Leftmost Column */}
          <div className="col-md-4">
            <div className="row align-items-center">
              <div className="col-3 text-center">
                <FaMapMarkerAlt size={90} color="black" className="mr-3" />
              </div>
              <div className="col-9">
                <h5 className="mt-3 mb-2" style={{color: 'black'}}><strong>Where</strong></h5>
                <p className="mb-4" style={{color: 'black'}}>University of Sussex, Brighton</p>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="col-md-4">
            <div className="row align-items-center">
              <div className="col-3 text-center">
                <FaClock size={90} color="black" className="mr-3" />
              </div>
              <div className="col-9">
                <h5 className="mt-3 mb-2" style={{color: 'black'}}><strong>When</strong></h5>
                <p className="mb-4" style={{color: 'black'}}>May 01, 2024, 10:00 AM</p>
              </div>
            </div>
          </div>

          {/* Rightmost Column with Google Map */}
          <div className="col-md-4">
            <iframe 
              title="Event Location" 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5036.0026193352405!2d-0.0830064!3d50.8681755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487589b282984cd1%3A0xc03298cc1ca33ee1!2sHackSussex!5e0!3m2!1sen!2suk!4v1694815748321!5m2!1sen!2suk"
              width="100%" 
              height="200" 
              style={{border:0, borderRadius: '15px', margin: '0 auto'}} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventWhereWhen;
