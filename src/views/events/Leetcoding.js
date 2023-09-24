import React from 'react'
import AboutSection from '../../components/AboutSection';
import EventWhereWhen from '../../components/EventWhereWhen';

import LeetcodingLogo from './../../assets/index-carousel/leetcoding-logo.png'
import LeetcodingBackground from './../../assets/index-carousel/leetcoding-background.png'

const Leetcoding = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <img src={LeetcodingBackground} className="d-block w-100 h-100 img-fluid" alt='Background' />
        <div className="carousel-caption">
          <img src={LeetcodingLogo} alt="Leetcoding Logo" className='img-fluid ms-auto me-auto d-block p-3' style={{ width: '60%', height: 'auto' }} />
        </div>
        <AboutSection description={`Welcome to HackSussex's weekly Leetcoding sessions! Our sessions are open to programmers of all levels, and they offer a chance to tackle a variety of engaging coding challenges. After taking a shot at these challenges, participants have the opportunity to discuss their approaches and solutions with fellow coders in a relaxed and friendly atmosphere. These sessions are an excellent way to enhance your problem-solving skills and prepare for technical job interviews in a comfortable and inclusive environment. Feel free to use your preferred programming language, and we look forward to having you join us on this coding journey at HackSussex!`} />
        <EventWhereWhen location="Future Technologies Lab, University of Sussex" date="null" />
      </div>
    </>
  )
}

export default Leetcoding