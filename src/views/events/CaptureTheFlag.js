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
      <div className='container p-3'>
        <div className='row p-2 align-items-center'>
          <div className='col'>
            <img src={pic} className='img-fluid rounded' />
          </div>
          <div className='col text-left'>
            <p className='h2' style={{color: "var(--electric-green)"}}>Hackathon</p>
            <p className='h5 text-light lh-2'>The biggest Annual Hackathon in Brighton & Hove!</p>
            <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun. eiusm tempor incididun.</p>
          </div>
        </div>
        <div className='row p-2 align-items-center'>
          <div className='col text-right'>
            <p className='h2' style={{color: "var(--electric-green)"}}>Game Jam</p>
            <p className='h5 text-light lh-2'>Our Newest Event with the objective to design a game within 24 hours!</p>
            <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun. eiusm tempor incididun.</p>
          </div>
          <div className='col'>
            <img src={pic} className='img-fluid rounded' />
          </div>
        </div>
        <div className='row p-2 align-items-center'>
          <div className='col'>
            <img src={pic} className='img-fluid rounded' />
          </div>
          <div className='col text-left'>
            <p className='h2' style={{color: "var(--electric-green)"}}>Coders Cup</p>
            <p className='h5 text-light lh-2'>Algorithmic Coding Compeititon for Students!</p>
            <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun. eiusm tempor incididun.</p>
          </div>
        </div>
        <div className='row p-2 align-items-center'>
          <div className='col text-right'>
            <p className='h2' style={{color: "var(--electric-green)"}}>Capture The Flag</p>
            <p className='h5 text-light lh-2'>Cybersecruity Puzzles for our HackerSussexers</p>
            <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun. eiusm tempor incididun.</p>
          </div>
          <div className='col'>
            <img src={pic} className='img-fluid rounded' />
          </div>
        </div>
      </div>
    </>
  );
}

export default CaptureTheFlag;