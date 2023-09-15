import React from 'react';

import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

import styles from './EventWhereWhen.module.css';

const EventWhereWhen = () => {
  return (
    <div className={`${styles['container-fluid']} py-4`}>
      <div className="container">
        <div className="row align-items-center">

          {/* Leftmost Column */}
          <div className="col-md-4">
            <div className="row align-items-center">
              <div className="col-3 text-center">
                <FaClock className={styles['icon']} />
              </div>
              <div className="col-9">
                <h3 className={styles['header']}>When</h3>
                <p className={styles['text']}>May 01, 2024, 10:00 AM</p>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="col-md-4">
            <div className="row align-items-center">
              <div className="col-3 text-center">
                <FaMapMarkerAlt className={styles['icon']} />
              </div>
              <div className="col-9">
                <h3 className={styles['header']}>Where</h3>
                <p className={styles['text']}>University of Sussex, Brighton</p>
              </div>
            </div>
          </div>

          {/* Rightmost Column with Google Map */}
          <div className="col-md-4">
            <iframe 
              title="Event Location" 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5036.0026193352405!2d-0.0830064!3d50.8681755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487589b282984cd1%3A0xc03298cc1ca33ee1!2sHackSussex!5e0!3m2!1sen!2suk!4v1694815748321!5m2!1sen!2suk"
              className={styles['map']}
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
