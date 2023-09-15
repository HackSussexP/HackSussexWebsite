import React from 'react';

import RotatingSponsorBanner from './../../components/RotatingSponsorBanner';
import EventWhereWhen from '../../components/EventWhereWhen'; 
import Timer from './../../components/Timer';

import background from '../../assets/hackathon-background-darker.png';
import hackathonLogo from '../../assets/hackathon-23-trans-gradient-small.png';

var hackathonStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
};

const Hackathon = () => {
  return(
    <>
      <div className='container-fluid p-2' style={hackathonStyle}>
        <div className='row'>
          <div className='col p-5'>
            <img src={hackathonLogo} className='img-fluid'></img>
          </div>
          <div className='col p-5'>
            <div className='container p-2 text-center'>Copy something goes here, text, graphic, dates, social media. just pad this out somehow</div>
          </div>
        </div>
      </div>
      <Timer date={"May 1, 2024, 0:0:0"} />
      <EventWhereWhen />

    </>
  );
}

export default Hackathon;