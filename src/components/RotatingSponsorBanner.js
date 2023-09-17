import React, { useState } from 'react';
import arrow from './../assets/Arrow 2.png';
import BCS from './../assets/SponsorLogos/BCS.png';
import EDF from './../assets/SponsorLogos/EDF.png';
import ElectricSquare from './../assets/SponsorLogos/ElectricSquare.png';
import GitHub from './../assets/SponsorLogos/GitHub.png';
import RittmanMead from './../assets/SponsorLogos/RittmanMead.png';
import Overleaf from './../assets/SponsorLogos/Overleaf.png';
import RedBull from './../assets/SponsorLogos/RedBull.png';
import UoS from './../assets/SponsorLogos/UoS.png';

import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';

import backgroundPattern from './../assets/sparse-icon-scatter-dark.png';

const RotatingSponsorBanner = () => {
  const sponsors = [
    BCS,
    EDF,
    ElectricSquare,
    GitHub,
    RittmanMead,
    Overleaf,
    RedBull,
    UoS
  ]

  const [settings] = useState({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    initalSlide: 0,
    speed: 3500,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    swipeToSlide: false,
    draggable: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })

  const sponsorLogoStyle = {
    width: '15vw',
    height: '10vh'
  };

  const titleStyle = {
    fontSize: '2rem'
  };

  const containerStyle = {
    backgroundColor: '#e3dad2',
    backgroundImage: `url(${backgroundPattern})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: 'black',
  };

  return(
    <>
      <div className='container-fluid sponsor-banner py-3' style={containerStyle}>
        <div className='row text-center justify-content-center'>
          <div className='col-12'>
            <h3 className='mb-4 text-center' style={titleStyle}>Past Sponsors</h3>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-11'>
            <Slider {...settings}>
              {sponsors.map((sponsor, index) => (
                <div key={index} className="col-auto">
                  <img src={sponsor} className='img-fluid py-1 px-5' style={sponsorLogoStyle} alt="sponsor logo"></img>
                </div>
              ))}
            </Slider>   
          </div>
        </div>
      </div>
    </>
  )
}

export default RotatingSponsorBanner;