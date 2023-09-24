import React from 'react';
import Resources from '../../components/Resources';
import background from '../../assets/matrix-background 1.png'

const sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
}

const CaptureTheFlag = () => {
  return(
    <>
      <div className='container-fluid'>
        <div className='container-fluid justify-content-center' style={sectionStyle}>
          <img></img>
        </div>
        <Resources />
      </div>
    </>
  );
}

export default CaptureTheFlag;