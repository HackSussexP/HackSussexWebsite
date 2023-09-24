import React from 'react'

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
      </div>
    </>
  )
}

export default Leetcoding