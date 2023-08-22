import React from 'react';
import AboutHeader from '../../components/AboutHeader';
import SocialMediaBanner from '../../components/SocialMediaBanner';
import SponsorBanner from '../../components/SponsorBanner';

const CaptureTheFlag = () => {
  return(
    <div>
      <SponsorBanner />
      <AboutHeader />
      <SocialMediaBanner />
    </div>
  );
}

export default CaptureTheFlag;