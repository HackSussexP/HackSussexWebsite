import React from 'react';
import AboutHeader from '../../components/AboutHeader';
import SocialMediaBanner from '../../components/SocialMediaBanner';
import RotatingSponsorBanner from '../../components/RotatingSponsorBanner';
import background from './../../assets/CTFbackground.png';
import pic from './../../assets/index-carousel/image2.png'

var sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
};

const CaptureTheFlag = () => {
  return(
    <>
      <div className='container-fluid p-2' style={sectionStyle}>
        <div className='row align-items-center p-5'>
          <div className='col'>
            <div className='container bg-white text-center p-2'>
              <p className='h4 text-dark'>Brief passage of text describing or something</p>
            </div>
          </div>
          <div className='col'>
            <div className='container bg-white text-center p-2 h-75'>
              <p className='h4 text-dark'>Image of something CTF related</p>
            </div>
          </div>
          <div className='col'>
            <div className='container bg-white text-center p-2'>
              <p className='h4 text-dark'>Slogan? "putting the hack in hacksussex" or something else</p>
            </div>
          </div>
        </div>
      </div>
      <RotatingSponsorBanner />
      <AboutHeader />
      <SocialMediaBanner />
      <div className='container pt-3 text-center'>
        <div className='row mb-3'>
          <div className='col-12 col-md-6 p-5 m-auto'>
            <img src={pic} alt="hackathon" className='img-fluid rounded'></img>
          </div>
          <div className='col-12 col-md-6 m-auto text-md-start'>
            <h2 className='display-6 fw-bold text-electric'>
              Hackathon
            </h2>
            <p className='fs-4'>
              The biggest annual hackathon in Brighton & Hove!
            </p>
            <p>
              Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do eiusm tempor incididun. Eiusum tempor incididun.
            </p>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-12 col-md-6 m-auto text-md-end'>
            <h2 className='display-6 fw-bold text-electric'>
              Game Jam
            </h2>
            <p className='fs-4'>
              Our newest event where participants are challenged with designing a game within 24 hours!
            </p>
            <p>
              Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do eiusm tempor incididun. Eiusum tempor incididun.
            </p>
          </div>
          <div className='col-12 col-md-6 p-5 m-auto'>
            <img src={pic} alt="hackathon" className='img-fluid rounded'></img>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-12 col-md-6 p-5 m-auto'>
            <img src={pic} alt="hackathon" className='img-fluid rounded'></img>
          </div> 
          <div className='col-12 col-md-6 m-auto text-md-start'>
            <h2 className='display-6 fw-bold text-electric'>
              Coders Cup
            </h2>
            <p className='fs-4'>
              Algorithmic coding compeition
            </p>
            <p>
            Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do eiusm tempor incididun. Eiusum tempor incididun.
            </p>
          </div>   
        </div>
        <div className='row mb-3'>
          <div className='col-12 col-md-6 m-auto text-md-start'>
            <h2 className='display-6 fw-bold text-electric'>
              Capture The Flag
            </h2>
            <p className='fs-4'>
              Cybersecruity Puzzles for our HackerSussexers
            </p>
            <p>
            Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do eiusm tempor incididun. Eiusum tempor incididun.
            </p>
          </div>  
          <div className='col-12 col-md-6 p-5 m-auto'>
            <img src={pic} alt="hackathon" className='img-fluid rounded'></img>
          </div>  
        </div>
      </div>
    </>
  );
}

export default CaptureTheFlag;